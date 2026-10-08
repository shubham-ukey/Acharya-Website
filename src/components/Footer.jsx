
import { Link } from "react-router-dom";
import {
	Facebook,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Phone,
	AtSign,
} from "lucide-react";
import Logo from "./Logo";
import { brand } from "../config/brand";
import { navLinks } from "./Navbar";

const socials = [
	{ key: "linkedin", Icon: Linkedin, label: "LinkedIn" },
	{ key: "instagram", Icon: Instagram, label: "Instagram" },
	{ key: "facebook", Icon: Facebook, label: "Facebook" },
	{ key: "threads", Icon: AtSign, label: "Threads" },
];

const footerServices = [
	{
		label: "Thesis to Publication",
		hash: "thesis-to-paper",
	},
	{
		label: "Clinical Writing",
		hash: "clinical-writing",
	},
	{
		label: "Health Projects & Grants",
		hash: "collaborative-projects",
	},
	{
		label: "Workshops & Webinars",
		hash: "workshops-webinars",
	},
];



export default function Footer() {
	const colTitle =
		"text-xs font-semibold uppercase tracking-[0.18em] text-gold";

	const link =
		"text-sm text-ivory/70 transition-colors hover:text-ivory";

	return (
		<footer className="bg-forest-deep text-ivory">
			<div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.1fr] lg:gap-10">

				{/* BRAND */}
				<div>
					<Logo tone="light" />

					{/* COMPANY NAME */}
					<p className="mt-3 max-w-sm text-xs font-medium uppercase leading-relaxed tracking-wide text-ivory/60">
						{brand.companyName}
					</p>

					<p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/70">
						{brand.description}
					</p>

					{/* SOCIAL LINKS */}
					<div className="mt-6 flex gap-3">
						{socials.map(({ key, Icon, label }) => (
							<a
								key={key}
								href={brand.social[key]}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={label}
								className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 text-ivory/80 transition hover:border-gold hover:text-gold"
							>
								<Icon size={17} />
							</a>
						))}
					</div>
				</div>

				{/* QUICK LINKS */}
				<nav aria-label="Quick links">
					<h2
						className={`${colTitle} !font-sans`}
						style={{ color: "rgb(var(--c-gold))" }}
					>
						Quick Links
					</h2>

					<ul className="mt-5 space-y-3">
						{navLinks.map((l) => (
							<li key={l.to}>
								<Link to={l.to} className={link}>
									{l.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				{/* SERVICES */}
				<nav aria-label="Services">
					<h2
						className={`${colTitle} !font-sans`}
						style={{ color: "rgb(var(--c-gold))" }}
					>
						Services
					</h2>

					<ul className="mt-5 space-y-3">
						{footerServices.map((service) => (
							<li key={service.hash}>
								<Link
									to={`/services#${service.hash}`}
									className={link}
								>
									{service.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				{/* CONTACT */}
				<div>
					<h2
						className={`${colTitle} !font-sans`}
						style={{ color: "rgb(var(--c-gold))" }}
					>
						Contact
					</h2>

					<ul className="mt-5 space-y-4 text-sm text-ivory/70">
						<li className="flex gap-3">
							<Mail
								size={17}
								className="mt-0.5 shrink-0 text-gold"
								aria-hidden="true"
							/>

							<a
								className="break-all hover:text-ivory"
								href={`mailto:${brand.email}`}
							>
								{brand.email}
							</a>
						</li>

						<li className="flex gap-3">
							<Phone
								size={17}
								className="mt-0.5 shrink-0 text-gold"
								aria-hidden="true"
							/>

							<a
								className="hover:text-ivory"
								href={`tel:${brand.phone.replace(/\s/g, "")}`}
							>
								{brand.phone}
							</a>
						</li>

						<li className="flex gap-3">
							<MapPin
								size={17}
								className="mt-0.5 shrink-0 text-gold"
								aria-hidden="true"
							/>

							<span>{brand.location}</span>
						</li>
					</ul>
				</div>
			</div>

			{/* COPYRIGHT */}
			<div className="border-t border-ivory/10">
				<div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-ivory/60 sm:flex-row">
					<p>
						© {new Date().getFullYear()} {brand.displayName}. All Rights Reserved.
					</p>

					<p>Ayurveda • Yoga • Health Research</p>
				</div>
			</div>
		</footer>
	);
}

