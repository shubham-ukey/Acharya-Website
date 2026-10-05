import { useMemo, useState } from "react";
import { CalendarCheck } from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import FormField from "../components/FormField";
import Button from "../components/Button";
import { useGsapScope } from "../animations/gsapAnimations";
import { submitConsultation } from "../services/inquiryApi";

const types = [
	"Thesis / Publication Review",
	"Research Collaboration Discussion",
	"Workshop Planning",
	"Ayurveda Consultancy",
	"Product Formulation Guidance",
	"Other",
];
const times = [
	"10:00 AM – 11:00 AM",
	"11:00 AM – 12:00 PM",
	"2:00 PM – 3:00 PM",
	"3:00 PM – 4:00 PM",
	"5:00 PM – 6:00 PM",
];
const empty = {
	name: "",
	email: "",
	phone: "",
	type: "",
	date: "",
	time: "",
	message: "",
};

export default function Consultation() {
	const ref = useGsapScope();
	const today = useMemo(() => new Date().toISOString().split("T")[0], []);
	const [v, setV] = useState(empty);
	const [errors, setErrors] = useState({});
	const [status, setStatus] = useState("idle");
	const set = (k) => (e) => setV((s) => ({ ...s, [k]: e.target.value }));
	const aria = (k) => ({
		"aria-invalid": errors[k] ? "true" : "false",
		"aria-describedby": errors[k] ? `${k}-error` : undefined,
	});

	const onSubmit = async (e) => {
		e.preventDefault();
		const er = {};
		if (!v.name.trim()) er.name = "Enter your full name.";
		if (!/^\S+@\S+\.\S+$/.test(v.email))
			er.email = "Enter a valid email address, such as name@example.com.";
		if (v.phone.replace(/\D/g, "").length < 7)
			er.phone = "Enter a phone number with at least 7 digits.";
		if (!v.type) er.type = "Choose a consultation type.";
		if (!v.date) er.date = "Choose a preferred date.";
		else if (v.date < today) er.date = "Choose a date that is today or later.";
		if (!v.time) er.time = "Choose a preferred time.";
		setErrors(er);
		if (Object.keys(er).length) return;
		setStatus("sending");
		try {
			await submitConsultation(v);
			setStatus("sent");
		} catch {
			setStatus("failed");
		}
	};

	return (
		<div ref={ref}>
			<Seo
				title="Book a Consultation"
				description="Request a consultation with our research team on publication, collaboration, workshops, Ayurveda consultancy or formulation."
			/>
			<PageHero
				eyebrow="Consultation"
				title="Book a Consultation"
				description="Choose a topic and a time that suits you. We will confirm your slot by email within two working days."
			/>

			<section
				className="section-pad !pt-12 md:!pt-16"
				aria-label="Consultation request form"
			>
				<div className="container-x max-w-3xl">
					<div
						className="rounded-[2rem] border border-forest/10 bg-white p-6 shadow-soft sm:p-10"
						data-reveal
					>
						{status === "sent" ? (
							<div className="py-10 text-center" role="status">
								<CalendarCheck
									size={44}
									className="mx-auto text-forest"
									strokeWidth={1.4}
									aria-hidden="true"
								/>
								<h2 className="mt-5 text-3xl">Request received</h2>
								<p className="mx-auto mt-3 max-w-md text-charcoal/70">
									We will confirm your consultation for {v.date} ({v.time}) by
									email at {v.email}.
								</p>
								<Button
									variant="secondary"
									className="mt-8"
									onClick={() => {
										setV(empty);
										setStatus("idle");
									}}
								>
									Request another consultation
								</Button>
							</div>
						) : (
							<form onSubmit={onSubmit} noValidate className="space-y-6">
								<div className="grid gap-6 sm:grid-cols-2">
									<FormField
										id="name"
										label="Full Name"
										required
										error={errors.name}
									>
										<input
											id="name"
											autoComplete="name"
											className="input"
											value={v.name}
											onChange={set("name")}
											{...aria("name")}
										/>
									</FormField>
									<FormField
										id="email"
										label="Email"
										required
										error={errors.email}
									>
										<input
											id="email"
											type="email"
											autoComplete="email"
											className="input"
											value={v.email}
											onChange={set("email")}
											{...aria("email")}
										/>
									</FormField>
									<FormField
										id="phone"
										label="Phone"
										required
										error={errors.phone}
									>
										<input
											id="phone"
											type="tel"
											autoComplete="tel"
											className="input"
											value={v.phone}
											onChange={set("phone")}
											{...aria("phone")}
										/>
									</FormField>
									<FormField
										id="type"
										label="Consultation Type"
										required
										error={errors.type}
									>
										<select
											id="type"
											className="input"
											value={v.type}
											onChange={set("type")}
											{...aria("type")}
										>
											<option value="">Select a type</option>
											{types.map((t) => (
												<option key={t} value={t}>
													{t}
												</option>
											))}
										</select>
									</FormField>
									<FormField
										id="date"
										label="Preferred Date"
										required
										error={errors.date}
									>
										<input
											id="date"
											type="date"
											min={today}
											className="input"
											value={v.date}
											onChange={set("date")}
											{...aria("date")}
										/>
									</FormField>
									<FormField
										id="time"
										label="Preferred Time"
										required
										error={errors.time}
									>
										<select
											id="time"
											className="input"
											value={v.time}
											onChange={set("time")}
											{...aria("time")}
										>
											<option value="">Select a time slot</option>
											{times.map((t) => (
												<option key={t} value={t}>
													{t}
												</option>
											))}
										</select>
									</FormField>
								</div>
								<FormField
									id="message"
									label="Message"
									hint="Optional. Share any background that will help us prepare."
								>
									<textarea
										id="message"
										rows={5}
										className="input resize-y"
										value={v.message}
										onChange={set("message")}
									/>
								</FormField>
								{status === "failed" && (
									<p role="alert" className="text-sm font-medium text-red-800">
										We could not send your request. Please try again in a
										moment.
									</p>
								)}
								<Button
									type="submit"
									disabled={status === "sending"}
									className="w-full sm:w-auto"
								>
									{status === "sending" ? "Sending…" : "Request Consultation"}
								</Button>
							</form>
						)}
					</div>
				</div>
			</section>
		</div>
	);
}
