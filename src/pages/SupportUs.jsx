import {
	HeartHandshake,
	HandHeart,
	Users,
	Lightbulb,
	MessageCircle,
	Sprout,
	Check,
} from "lucide-react";
import Seo from "../components/Seo";
import SplitWords from "../components/SplitWords";
import Button from "../components/Button";
import { useGsapScope } from "../animations/gsapAnimations";

const supportOptions = [
	{
		n: "01",
		icon: Users,
		title: "Volunteer With Us",
		text: "Share your time, knowledge, skills or professional experience to support meaningful work in Ayurveda, Yoga, healthcare and research.",
		points: [
			"Research and academic support",
			"Content and knowledge contribution",
			"Workshops and educational initiatives",
			"Community and outreach activities",
		],
		action: "Become a Volunteer",
		dark: false,
	},
	{
		n: "02",
		icon: HandHeart,
		title: "Support Through Funding",
		text: "Your financial support can help us develop research initiatives, educational programs, community activities and knowledge-sharing projects.",
		points: [
			"Support research initiatives",
			"Enable educational programs",
			"Support community outreach",
			"Contribute to knowledge development",
		],
		action: "Support Our Work",
		dark: true,
	},
];

const ways = [
	{ icon: Users, label: "Time & skills" },
	{ icon: Lightbulb, label: "Ideas & knowledge" },
	{ icon: HandHeart, label: "Funding" },
];

const steps = [
	{
		icon: MessageCircle,
		title: "Reach out",
		text: "Tell us how you would like to contribute through the contact form.",
	},
	{
		icon: HeartHandshake,
		title: "Have a conversation",
		text: "We understand your interests and match them with our current work.",
	},
	{
		icon: Sprout,
		title: "Contribute and grow",
		text: "Start supporting research, education or outreach initiatives with us.",
	},
];

export default function SupportUs() {
	const ref = useGsapScope();

	return (
		<div ref={ref}>
			<Seo
				title="Support Us | Acharya"
				description="Support Acharya through volunteering, knowledge contribution or funding to help advance meaningful work in Ayurveda, Yoga, healthcare and research."
			/>

			{/* =========================================
			    HERO
			========================================= */}
			<section
				className="relative overflow-hidden bg-ivory"
				aria-labelledby="support-hero-heading"
			>
				{/* Background banner: mobile + desktop */}
				<div
					className="absolute inset-0"
					data-hero-art
					aria-hidden="true"
				>
					<img
						src="/banners/support-us.webp"
						alt=""
						className="h-full w-full object-cover object-[80%_bottom] lg:object-right"
						data-hero-art-inner
						fetchPriority="high"
					/>

					{/* Mobile: upar se ivory fade, neeche subject dikhe */}
					<div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory/85 via-45% to-transparent lg:hidden" />

					{/* Desktop: left se halka fade */}
					<div className="absolute inset-0 hidden bg-gradient-to-r from-ivory/70 via-transparent to-transparent lg:block" />
				</div>

				<div className="container-x relative flex pb-72 pt-32 sm:pb-[24rem] md:pt-40 lg:min-h-[36rem] lg:items-center lg:pb-24">
					<div className="max-w-xl lg:max-w-[34rem]">
						<p className="eyebrow" data-hero-label>
							Support Our Mission
						</p>

						<h1
							id="support-hero-heading"
							className="h-display mt-6 !text-[2.4rem] sm:!text-6xl lg:!text-[3.75rem]"
						>
							<SplitWords text="Be Part of Meaningful Change" />
						</h1>

						<p className="lede mt-7" data-hero-fade>
							There are many ways to contribute to our journey.
							Share your time, expertise or resources and help us
							create meaningful impact through research, education
							and healthcare.
						</p>
					</div>
				</div>
			</section>

			{/* INTRO */}
			<section className="section-pad">
				<div className="container-x grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
					<div data-reveal>
						<p className="eyebrow">Why It Matters</p>

						<h2 className="h-section mt-5">
							Meaningful Work Grows Through Collaboration
						</h2>

						<p className="mt-6 max-w-2xl text-lg leading-8 text-charcoal/70">
							At Acharya, we believe meaningful work grows through
							collaboration. Whether you contribute your skills,
							time, ideas or financial resources, your support can
							help us take research and knowledge-driven
							initiatives forward.
						</p>
					</div>

					<ul className="grid gap-3" data-stagger>
						{ways.map((w) => {
							const Icon = w.icon;
							return (
								<li
									key={w.label}
									className="flex items-center gap-4 rounded-2xl border border-forest/10 bg-white/70 px-5 py-4"
								>
									<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage-soft text-forest">
										<Icon size={20} strokeWidth={1.6} />
									</span>
									<span className="font-semibold text-forest">
										{w.label}
									</span>
								</li>
							);
						})}
					</ul>
				</div>
			</section>

			{/* OPTIONS */}
			<section className="pb-16 md:pb-24">
				<div
					className="container-x grid gap-6 lg:grid-cols-2"
					data-stagger
				>
					{supportOptions.map((option) => {
						const Icon = option.icon;

						return (
							<article
								key={option.title}
								className={`group relative flex flex-col overflow-hidden rounded-3xl border p-8 transition duration-500 hover:-translate-y-1 hover:shadow-lift md:p-10 ${
									option.dark
										? "border-forest bg-forest text-ivory"
										: "border-forest/10 bg-white"
								}`}
							>
								<span
									className={`absolute right-7 top-6 font-display text-6xl ${
										option.dark
											? "text-ivory/10"
											: "text-forest/10"
									}`}
									aria-hidden="true"
								>
									{option.n}
								</span>

								<div
									className={`flex h-12 w-12 items-center justify-center rounded-xl ${
										option.dark
											? "bg-ivory/10 text-gold"
											: "bg-sage-soft text-forest"
									}`}
								>
									<Icon size={22} strokeWidth={1.6} />
								</div>

								<h2
									className={`mt-6 text-2xl ${
										option.dark ? "!text-ivory" : ""
									}`}
								>
									{option.title}
								</h2>

								<p
									className={`mt-3 leading-7 ${
										option.dark
											? "text-ivory/75"
											: "text-charcoal/70"
									}`}
								>
									{option.text}
								</p>

								<ul className="mt-6 space-y-3">
									{option.points.map((point) => (
										<li
											key={point}
											className={`flex items-start gap-3 text-sm ${
												option.dark
													? "text-ivory/80"
													: "text-charcoal/70"
											}`}
										>
											<Check
												size={16}
												strokeWidth={2}
												className="mt-0.5 shrink-0 text-gold"
												aria-hidden="true"
											/>
											{point}
										</li>
									))}
								</ul>

								<div className="mt-auto pt-8">
									<Button
										to="/contact"
										arrow
										variant={
											option.dark ? "secondary" : undefined
										}
									>
										{option.action}
									</Button>
								</div>
							</article>
						);
					})}
				</div>
			</section>

			{/* HOW IT WORKS */}
			<section className="section-pad bg-ivory-deep/60">
				<div className="container-x">
					<div className="mx-auto max-w-2xl text-center" data-reveal>
						<p className="eyebrow">How It Works</p>
						<h2 className="h-section mt-5">
							Getting Involved Is Simple
						</h2>
					</div>

					<ol
						className="mt-14 grid gap-6 md:grid-cols-3"
						data-stagger
					>
						{steps.map((s, i) => {
							const Icon = s.icon;
							return (
								<li
									key={s.title}
									className="relative rounded-2xl border border-forest/10 bg-white p-7"
								>
									<span className="font-display text-xl text-gold">
										0{i + 1}
									</span>

									<span className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-sage-soft text-forest">
										<Icon size={22} strokeWidth={1.6} />
									</span>

									<h3 className="mt-5 text-xl">{s.title}</h3>

									<p className="mt-2 text-sm leading-6 text-charcoal/70">
										{s.text}
									</p>
								</li>
							);
						})}
					</ol>
				</div>
			</section>

			{/* CTA */}
			<section className="section-pad">
				<div className="container-x">
					<div
						className="relative overflow-hidden rounded-[2rem] bg-forest px-6 py-14 text-center text-ivory md:px-16 md:py-20"
						data-reveal
					>
						<div
							className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
							aria-hidden="true"
						/>

						<div className="relative mx-auto max-w-3xl">
							<p className="eyebrow !text-gold">
								Let's Collaborate
							</p>

							<h2 className="h-display mt-4 text-3xl !text-ivory md:text-5xl">
								Your Contribution Can Help Move an Idea Forward
							</h2>

							<p className="mx-auto mt-5 max-w-2xl leading-7 text-ivory/75">
								If you are interested in volunteering,
								collaborating on a project or supporting our
								initiatives, we would love to hear from you.
							</p>

							<div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
								<Button to="/contact" arrow>
									Get in Touch
								</Button>
								<Button to="/about" variant="secondary">
									Learn About Us
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}