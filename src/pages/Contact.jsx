
import { useState } from "react";
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
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

export default function Contact() {
	const ref = useGsapScope();

	const [values, setValues] = useState({
		name: "",
		age: "",
		gender: "",
		mobile: "",
		email: "",
		concern: "",
		website: "",
	});

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

		setStatus("sending");

		try {
			// Existing inquiry submission
			await submitInquiry(values);

			// EmailJS template parameters
			const templateParams = {
				name: values.name,
				age: values.age,
				gender: values.gender,
				mobile: values.mobile,
				email: values.email,
				concern: values.concern,
				time: new Date().toLocaleString(),
			};

			// Send only one email to admin/client
			await emailjs.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				templateParams,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			);

			setStatus("sent");
		} catch (error) {
			console.error("EmailJS / Inquiry Error:", error);
			setStatus("failed");
		}
	};

	return (
		<div ref={ref}>
			<Seo
				title="Contact"
				description="Contact us for Ayurveda, Yoga and healthcare research consultation."
			/>

			<PageHero
				eyebrow="Contact"
				title="Let's Start a Conversation"
				description="Share a few details about yourself and your concern. We will get back to you personally."
			/>

			<section
				className="section-pad !pt-12 md:!pt-16"
				aria-label="Contact form and details"
			>
				<div className="container-x grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
					<div
						className="rounded-[2rem] border border-forest/10 bg-white p-6 shadow-soft sm:p-10"
						data-reveal
					>
						{status === "sent" ? (
							<div className="py-10 text-center" role="status">
								<CheckCircle2
									size={44}
									className="mx-auto text-forest"
									strokeWidth={1.4}
									aria-hidden="true"
								/>

								<h2 className="mt-5 text-3xl">
									Thank you, {values.name.split(" ")[0]}
								</h2>

								<p className="mx-auto mt-3 max-w-md text-charcoal/70">
									Your concern has been received. We will contact you
									shortly.
								</p>

								<Button
									variant="secondary"
									className="mt-8"
									onClick={() => {
										setValues({
											name: "",
											age: "",
											gender: "",
											mobile: "",
											email: "",
											concern: "",
											website: "",
										});

										setErrors({});
										setStatus("idle");
									}}
								>
									Send another inquiry
								</Button>
							</div>
						) : (
							<form onSubmit={onSubmit} noValidate className="space-y-6">
								<h2 className="text-2xl">Contact Us</h2>

								{/* Honeypot field */}
								<div
									className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
									aria-hidden="true"
								>
									<label htmlFor="website">Leave this field empty</label>

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
											<option value="">Select gender</option>
											<option value="Male">Male</option>
											<option value="Female">Female</option>
											<option value="Other">Other</option>
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
										className="text-sm font-medium text-red-800"
									>
										We could not send your inquiry. Please try again or email
										us at {brand.email}.
									</p>
								)}

								<Button
									type="submit"
									disabled={status === "sending"}
									className="w-full sm:w-auto"
								>
									{status === "sending" ? "Sending…" : "Submit"}
								</Button>
							</form>
						)}
					</div>

					{/* CONTACT DETAILS */}
					<aside className="space-y-8" data-reveal>
						<ul className="space-y-6">
							{[
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
							].map(({ Icon, t, v, h }) => (
								<li key={t} className="flex gap-4">
									<span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage-soft text-forest">
										<Icon size={19} aria-hidden="true" />
									</span>

									<div>
										<p className="text-sm font-semibold text-forest">
											{t}
										</p>

										{h ? (
											<a
												href={h}
												className="break-all text-charcoal/75 hover:text-forest"
											>
												{v}
											</a>
										) : (
											<p className="text-charcoal/75">{v}</p>
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
							className="w-full"
						>
							<MessageCircle size={17} aria-hidden="true" />
							Chat on WhatsApp
						</Button>
					</aside>
				</div>

				{/* MAP */}
				<div className="container-x mt-16">
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
