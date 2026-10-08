import { useState } from "react";
import {
	CheckCircle2,
	Mail,
	MapPin,
	MessageCircle,
	Phone,
	Clock,
	ShieldCheck,
	Send,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import Seo from "../components/Seo";
import SplitWords from "../components/SplitWords";
import FormField from "../components/FormField";
import Button from "../components/Button";
import { brand, whatsappLink } from "../config/brand";
import { useGsapScope } from "../animations/gsapAnimations";
import { submitInquiry } from "../services/inquiryApi";

const validate = (v) => {
	const e = {};

	if (!v.name.trim()) {
		e.name = "Enter your full name.";
	}

	if (!v.age || Number(v.age) < 1 || Number(v.age) > 120) {
		e.age = "Enter a valid age.";
	}

	if (!v.gender) {
		e.gender = "Please select your gender.";
	}

	if (v.mobile.replace(/\D/g, "").length < 10) {
		e.mobile = "Enter a valid 10-digit mobile number.";
	}

	if (!/^\S+@\S+\.\S+$/.test(v.email)) {
		e.email = "Enter a valid email address.";
	}

	if (v.concern.trim().length < 10) {
		e.concern = "Please describe your concern in at least 10 characters.";
	}

	return e;
};

const emptyValues = {
	name: "",
	age: "",
	gender: "",
	mobile: "",
	email: "",
	concern: "",
	website: "",
};

const nextSteps = [
	{ Icon: Send, text: "We receive your inquiry" },
	{ Icon: Clock, text: "We review it carefully" },
	{ Icon: MessageCircle, text: "We contact you personally" },
];

/* ------------------------------------------------------------------
   EmailJS config (from .env / hosting dashboard)
   - ADMIN template : mail to YOU (To Email = your Gmail)
   - REPLY template : auto-reply to CLIENT (To Email = {{email}})
------------------------------------------------------------------- */
const EMAILJS = {
	serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
	adminTemplateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
	replyTemplateId: import.meta.env.VITE_EMAILJS_REPLY_TEMPLATE_ID,
	publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

async function sendInquiryEmails(params) {
	// 1) Admin mail: this one MUST succeed
	await emailjs.send(
		EMAILJS.serviceId,
		EMAILJS.adminTemplateId,
		params,
		EMAILJS.publicKey
	);

	// 2) Client auto-reply: best effort, never blocks the form
	if (EMAILJS.replyTemplateId) {
		try {
			await emailjs.send(
				EMAILJS.serviceId,
				EMAILJS.replyTemplateId,
				params,
				EMAILJS.publicKey
			);
		} catch (err) {
			console.warn("Auto-reply email failed:", err?.text || err);
		}
	}
}

export default function Contact() {
	const ref = useGsapScope();

	const [values, setValues] = useState(emptyValues);
	const [errors, setErrors] = useState({});
	const [status, setStatus] = useState("idle"); // idle | sending | sent | failed

	const set = (k) => (e) =>
		setValues((v) => ({
			...v,
			[k]: e.target.value,
		}));

	const aria = (k) => ({
		"aria-invalid": errors[k] ? "true" : "false",
		"aria-describedby": errors[k] ? `${k}-error` : undefined,
	});

	const onSubmit = async (e) => {
		e.preventDefault();

		const found = validate(values);
		setErrors(found);

		if (Object.keys(found).length) return;

		// Honeypot: bots fill this hidden field. Pretend success, send nothing.
		if (values.website) {
			setStatus("sent");
			return;
		}

		setStatus("sending");

		const templateParams = {
			name: values.name,
			age: values.age,
			gender: values.gender,
			mobile: values.mobile,
			email: values.email,
			concern: values.concern,
			time: new Date().toLocaleString(),
		};

		try {
			// Optional backend/CMS save: failure here must NOT stop the emails
			Promise.resolve()
				.then(() => submitInquiry(values))
				.catch((err) =>
					console.warn("Inquiry API failed (ignored):", err)
				);

			await sendInquiryEmails(templateParams);

			setStatus("sent");
		} catch (error) {
			console.error("EmailJS error:", error?.status, error?.text || error);
			setStatus("failed");
		}
	};

	const details = [
		{
			Icon: Mail,
			t: "Email",
			v: brand.email,
			h: `mailto:${brand.email}`,
		},
		{
			Icon: Phone,
			t: "Phone",
			v: brand.phone,
			h: `tel:${brand.phone.replace(/\s/g, "")}`,
		},
		{
			Icon: MapPin,
			t: "Location",
			v: brand.location,
		},
	];

	return (
		<div ref={ref}>
			<Seo
				title="Contact"
				description="Contact us for Ayurveda, Yoga and healthcare research consultation."
			/>

			{/* =========================================
			    HERO / CONTACT BANNER
			========================================= */}
			<section
				className="relative overflow-hidden bg-ivory"
				aria-labelledby="contact-hero-heading"
			>
				{/* Background Banner */}
				<div
					className="absolute inset-0"
					data-hero-art
					aria-hidden="true"
				>
					<img
						src="/banners/contact-us.webp"
						alt=""
						className="h-full w-full object-cover object-[75%_center] lg:object-right"
						data-hero-art-inner
						fetchPriority="high"
					/>

					{/* Mobile Overlay */}
					<div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory/85 via-50% to-transparent lg:hidden" />

					{/* Desktop Overlay */}
					<div className="absolute inset-0 hidden bg-gradient-to-r from-ivory/90 via-ivory/55 via-45% to-transparent lg:block" />
				</div>

				<div className="container-x relative flex min-h-[34rem] items-center pb-20 pt-32 md:pt-40">
					<div className="max-w-xl lg:max-w-[34rem]">
						<p className="eyebrow" data-hero-label>
							Contact
						</p>

						<h1
							id="contact-hero-heading"
							className="h-display mt-6 !text-[2.4rem] sm:!text-6xl lg:!text-[3.75rem]"
						>
							<SplitWords text="Let's Start a Conversation" />
						</h1>

						<p className="lede mt-7" data-hero-fade>
							Share a few details about yourself and your concern.
							We will get back to you personally.
						</p>
					</div>
				</div>
			</section>

			{/* =========================================
			    CONTACT FORM + DETAILS
			========================================= */}
			<section
				className="section-pad !pt-12 md:!pt-16"
				aria-label="Contact form and details"
			>
				<div className="container-x">
					<div
						className="grid overflow-hidden rounded-[2rem] border border-forest/10 bg-white shadow-soft lg:grid-cols-[0.8fr_1.2fr]"
						data-reveal
					>
						{/* LEFT: DETAILS PANEL */}
						<aside className="relative flex flex-col overflow-hidden bg-forest p-8 text-ivory sm:p-10">
							<div
								className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-gold/15 blur-3xl"
								aria-hidden="true"
							/>

							<div className="relative">
								<p className="eyebrow !text-gold">
									Get in Touch
								</p>

								<h2 className="mt-4 text-2xl !text-ivory sm:text-3xl">
									We would love to hear from you
								</h2>

								<ul className="mt-8 space-y-6">
									{details.map(({ Icon, t, v, h }) => (
										<li key={t} className="flex gap-4">
											<span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ivory/10 text-gold">
												<Icon
													size={19}
													aria-hidden="true"
												/>
											</span>

											<div className="min-w-0">
												<p className="text-xs font-semibold uppercase tracking-[0.18em] text-ivory/60">
													{t}
												</p>

												{h ? (
													<a
														href={h}
														className="break-all text-ivory/90 transition hover:text-gold"
													>
														{v}
													</a>
												) : (
													<p className="text-ivory/90">
														{v}
													</p>
												)}
											</div>
										</li>
									))}
								</ul>

								{/* WHATSAPP */}
								<Button
									href={whatsappLink()}
									target="_blank"
									rel="noopener noreferrer"
									variant="secondary"
									className="mt-8 w-full"
								>
									<MessageCircle
										size={17}
										aria-hidden="true"
									/>
									Chat on WhatsApp
								</Button>

								{/* WHAT HAPPENS NEXT */}
								<div className="mt-10 border-t border-ivory/15 pt-8">
									<p className="text-xs font-semibold uppercase tracking-[0.18em] text-ivory/60">
										What happens next
									</p>

									<ol className="mt-4 space-y-3">
										{nextSteps.map(
											({ Icon, text }, i) => (
												<li
													key={text}
													className="flex items-center gap-3 text-sm text-ivory/85"
												>
													<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ivory/25 text-xs text-gold">
														{i + 1}
													</span>

													{text}
												</li>
											)
										)}
									</ol>
								</div>
							</div>
						</aside>

						{/* RIGHT: FORM */}
						<div className="p-6 sm:p-10 lg:p-12">
							{status === "sent" ? (
								<div
									className="flex h-full flex-col items-center justify-center py-10 text-center"
									role="status"
								>
									<span className="flex h-20 w-20 items-center justify-center rounded-full bg-sage-soft">
										<CheckCircle2
											size={44}
											className="text-forest"
											strokeWidth={1.4}
											aria-hidden="true"
										/>
									</span>

									<h2 className="mt-6 text-3xl">
										Thank you,{" "}
										{values.name.split(" ")[0]}
									</h2>

									<p className="mx-auto mt-3 max-w-md text-charcoal/70">
										Your concern has been received. We will
										contact you shortly.
									</p>

									<Button
										variant="secondary"
										className="mt-8"
										onClick={() => {
											setValues(emptyValues);
											setErrors({});
											setStatus("idle");
										}}
									>
										Send another inquiry
									</Button>
								</div>
							) : (
								<form
									onSubmit={onSubmit}
									noValidate
									className="relative space-y-6"
								>
									<div>
										<h2 className="text-2xl sm:text-3xl">
											Contact Us
										</h2>

										<p className="mt-2 text-sm text-charcoal/60">
											Fields marked with * are required.
										</p>
									</div>

									{/* Honeypot field */}
									<div
										className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
										aria-hidden="true"
									>
										<label htmlFor="website">
											Leave this field empty
										</label>

										<input
											id="website"
											name="website"
											type="text"
											tabIndex={-1}
											autoComplete="off"
											value={values.website}
											onChange={set("website")}
										/>
									</div>

									<div className="grid gap-6 sm:grid-cols-2">
										<div className="sm:col-span-2">
											<FormField
												id="name"
												label="Full Name"
												required
												error={errors.name}
											>
												<input
													id="name"
													name="name"
													autoComplete="name"
													className="input"
													placeholder="Enter your full name"
													value={values.name}
													onChange={set("name")}
													{...aria("name")}
												/>
											</FormField>
										</div>

										<FormField
											id="age"
											label="Age"
											required
											error={errors.age}
										>
											<input
												id="age"
												name="age"
												type="number"
												min="1"
												max="120"
												className="input"
												placeholder="Enter your age"
												value={values.age}
												onChange={set("age")}
												{...aria("age")}
											/>
										</FormField>

										<FormField
											id="gender"
											label="Gender"
											required
											error={errors.gender}
										>
											<select
												id="gender"
												name="gender"
												className="input"
												value={values.gender}
												onChange={set("gender")}
												{...aria("gender")}
											>
												<option value="">
													Select gender
												</option>
												<option value="Male">
													Male
												</option>
												<option value="Female">
													Female
												</option>
												<option value="Other">
													Other
												</option>
												<option value="Prefer not to say">
													Prefer not to say
												</option>
											</select>
										</FormField>

										<FormField
											id="mobile"
											label="Mobile Number"
											required
											error={errors.mobile}
										>
											<input
												id="mobile"
												name="mobile"
												type="tel"
												autoComplete="tel"
												className="input"
												placeholder="Enter 10-digit mobile number"
												value={values.mobile}
												onChange={set("mobile")}
												{...aria("mobile")}
											/>
										</FormField>

										<FormField
											id="email"
											label="Email ID"
											required
											error={errors.email}
										>
											<input
												id="email"
												name="email"
												type="email"
												autoComplete="email"
												className="input"
												placeholder="Enter your email address"
												value={values.email}
												onChange={set("email")}
												{...aria("email")}
											/>
										</FormField>
									</div>

									<FormField
										id="concern"
										label="Concern"
										required
										error={errors.concern}
									>
										<textarea
											id="concern"
											name="concern"
											rows={6}
											className="input resize-y"
											placeholder="Briefly describe your concern..."
											value={values.concern}
											onChange={set("concern")}
											{...aria("concern")}
										/>
									</FormField>

									{status === "failed" && (
										<p
											role="alert"
											className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800"
										>
											We could not send your inquiry.
											Please try again or email us at{" "}
											{brand.email}.
										</p>
									)}

									<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
										<Button
											type="submit"
											disabled={status === "sending"}
											className="w-full sm:w-auto"
										>
											{status === "sending"
												? "Sending…"
												: "Submit"}
										</Button>

										<p className="flex items-center gap-2 text-xs text-charcoal/55">
											<ShieldCheck
												size={15}
												className="shrink-0 text-forest"
												aria-hidden="true"
											/>
											Your details are kept private.
										</p>
									</div>
								</form>
							)}
						</div>
					</div>
				</div>

				{/* =========================================
				    MAP
				========================================= */}
				<div className="container-x mt-16">
					<div className="mb-6 text-center" data-reveal>
						<p className="eyebrow">Find Us</p>
					</div>

					<div
						className="overflow-hidden rounded-[2rem] border border-forest/10 shadow-soft"
						data-reveal
					>
						<iframe
							title={`Map showing ${brand.location}`}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="h-80 w-full border-0 sm:h-96"
							src={`https://www.google.com/maps?q=${encodeURIComponent(
								brand.mapQuery
							)}&output=embed`}
						/>
					</div>
				</div>
			</section>
		</div>
	);
}