import {
	Compass,
	Eye,
	Linkedin,
	HeartPulse,
	Microscope,
	ClipboardCheck,
	GraduationCap,
	Network,
} from "lucide-react";

import Seo from "../components/Seo";
import SplitWords from "../components/SplitWords";
import SectionHeading from "../components/SectionHeading";
import { FounderPortrait } from "../components/FounderCard";
import Roadmap from "../components/Roadmap";
import CTASection from "../components/CTASection";
import { useGsapScope } from "../animations/gsapAnimations";
import { founders } from "../data/founders";

const objectives = [
	{
		Icon: HeartPulse,
		title: "Quality Healthcare Services",
		text: "Access to quality healthcare services is a vital component in promoting health and wellness. We aim to provide timely, effective, personalized and holistic medical care that improves health outcomes, enhances quality of life, and empowers individuals to live healthy and fulfilling lives.",
	},
	{
		Icon: Microscope,
		title: "Research & Advocacy",
		text: "Advancing Ayurveda through research is crucial for its acceptance and integration into mainstream healthcare. We aim to foster scientific inquiry and evidence-based research to preserve, validate and make Ayurvedic wisdom more accessible, effective and sustainable for future generations.",
	},
	{
		Icon: ClipboardCheck,
		title: "Standardization of Medication & Services",
		text: "We aim to establish consistent and uniform practices, protocols and guidelines for healthcare delivery, including standardized medication names, dosages and formulations, accurate labeling and packaging, evidence-based clinical guidelines, patient assessment procedures, treatment plans and care pathways.",
	},
	{
		Icon: GraduationCap,
		title: "Education, Awareness & Acknowledgement",
		text: "We aim to educate and enlighten society about the ancient wisdom of Ayurveda, promote holistic well-being, encourage Ayurvedic lifestyle practices, support research and innovation, foster collaboration with conventional healthcare systems, and promote Ayurveda as a complementary approach to modern medicine.",
	},
	{
		Icon: Network,
		title: "Integration with Other Pathies",
		text: "We aim to provide comprehensive, patient-centric care by integrating Ayurveda with other medical disciplines including Chinese medicine, allopathy, naturopathy, Yoga and Siddha. Through collaboration, we seek to combine traditional wisdom with modern medical advancements and create a more compassionate, inclusive and effective healthcare ecosystem.",
	},
];

const steps = [
	{
		title: "Understand",
		text: "We listen to your goals, data and constraints.",
	},
	{
		title: "Research",
		text: "We review the literature and define the right question and method.",
	},
	{
		title: "Collaborate",
		text: "We work with your team on design, writing and documentation.",
	},
	{
		title: "Validate",
		text: "We check quality, reporting standards and ethical requirements.",
	},
	{
		title: "Deliver",
		text: "You receive outputs ready for submission, presentation or practice.",
	},
];

function ObjectiveCard({ objective }) {
	const Icon = objective.Icon;

	return (
		<article className="rounded-3xl border border-forest/10 bg-white p-7">
			<div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-soft text-forest">
				<Icon size={22} strokeWidth={1.6} aria-hidden="true" />
			</div>

			<h3 className="mt-6 text-xl leading-snug">{objective.title}</h3>

			<p className="mt-3 text-[0.95rem] leading-7 text-charcoal/70">
				{objective.text}
			</p>
		</article>
	);
}

export default function About() {
	const ref = useGsapScope();

	return (
		<div ref={ref}>
			<Seo
				title="About Us"
				description="Learn about our mission to advance Ayurveda through research, and meet the founders behind the consultancy."
			/>

			{/* =========================================
			    HERO
			========================================= */}
			<section
				className="relative overflow-hidden bg-ivory"
				aria-labelledby="about-hero-heading"
			>
				{/* Background banner: mobile + desktop */}
				<div
					className="absolute inset-0"
					data-hero-art
					aria-hidden="true"
				>
					<img
						src="/banners/about-us.webp"
						alt=""
						className="h-full w-full object-cover object-[80%_bottom] lg:object-right"
						data-hero-art-inner
						fetchPriority="high"
					/>

					{/* Mobile: upar se ivory fade, neeche plant dikhe */}
					<div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory/85 via-45% to-transparent lg:hidden" />

					{/* Desktop: left se halka fade */}
					<div className="absolute inset-0 hidden bg-gradient-to-r from-ivory/70 via-transparent to-transparent lg:block" />
				</div>

				<div className="container-x relative flex pb-72 pt-32 sm:pb-[24rem] md:pt-40 lg:min-h-[36rem] lg:items-center lg:pb-24">
					<div className="max-w-xl lg:max-w-[34rem]">
						<p className="eyebrow" data-hero-label>
							About Us
						</p>

						<h1
							id="about-hero-heading"
							className="h-display mt-6 !text-[2.4rem] sm:!text-6xl lg:!text-[3.75rem]"
						>
							<SplitWords text="Advancing Ayurveda Through Research" />
						</h1>

						<p className="lede mt-7" data-hero-fade>
							We are a group of clinicians and researchers who
							believe Ayurveda and Yoga deserve the same careful
							documentation and testing as any other health
							discipline.
						</p>
					</div>
				</div>
			</section>

			{/* =========================================
			    OUR STORY
			========================================= */}
			<section className="section-pad" aria-labelledby="story-heading">
				<div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
					<div data-reveal>
						<p className="eyebrow">Our Story</p>

						<h2 id="story-heading" className="h-section mt-5">
							When we started
						</h2>
					</div>

					<div
						className="space-y-5 text-lg leading-relaxed text-charcoal/75"
						data-reveal
					>
						<p>
							By the end of 2025, a new Ayurveda Multispeciality
							Hospital will be launched by four friends and
							professionals — Ankita, Prajakta, Reena, and Sakshi.
						</p>

						<p>
							United by their strong bond and shared values, they
							came together with a common vision to build a
							healthcare institution rooted in ethical practices,
							compassionate care, and professional excellence.
						</p>

						<p>
							Their aim is to create an institution that not only
							provides exceptional medical care but also places
							community service, empathy, and dedication at the
							heart of healthcare.
						</p>
					</div>
				</div>
			</section>

			{/* =========================================
			    MISSION & VISION
			========================================= */}
			<section className="pb-20 md:pb-28" aria-label="Mission and vision">
				<div
					className="container-x grid gap-6 md:grid-cols-2"
					data-stagger
				>
					{[
						{
							Icon: Compass,
							t: "Our Mission",
							p: "To provide quality, holistic healthcare through the establishment of a multispeciality Ayurveda hospital, while advancing research, standardizing medicines and healthcare services, empowering education and awareness, and fostering collaboration with other systems of medicine. We aim to promote research, publication, professional training, women entrepreneurship, and sustainable healthcare practices.",
						},
						{
							Icon: Eye,
							t: "Our Vision",
							p: "Globalization of Ayurveda. To revolutionize healthcare by establishing a renowned Ayurveda hospital dedicated to promoting the ancient wisdom of Ayurveda globally. We envision a world where holistic, natural, sustainable, and compassionate healthcare addresses the physical, mental, and spiritual well-being of individuals, empowering people to achieve optimal health and fostering a harmonious relationship between humanity and nature.",
						},
					].map(({ Icon, t, p }, i) => (
						<div
							key={t}
							className={`rounded-[2rem] p-8 sm:p-12 ${
								i === 0
									? "bg-forest text-ivory"
									: "border border-forest/15 bg-white"
							}`}
						>
							<Icon
								size={28}
								strokeWidth={1.5}
								className={i === 0 ? "text-gold" : "text-forest"}
								aria-hidden="true"
							/>

							<h2
								className={`mt-6 text-3xl ${
									i === 0 ? "!text-ivory" : ""
								}`}
							>
								{t}
							</h2>

							<p
								className={`mt-4 text-lg leading-relaxed ${
									i === 0
										? "text-ivory/80"
										: "text-charcoal/75"
								}`}
							>
								{p}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* =========================================
			    CORE OBJECTIVES
			========================================= */}
			<section
				className="section-pad bg-ivory-deep/60"
				aria-labelledby="objectives-heading"
			>
				<div className="container-x">
					<div data-reveal>
						<p className="eyebrow">Core Objectives</p>

						<h2 id="objectives-heading" className="h-section mt-5">
							What We Are Here to Do
						</h2>

						<p className="mt-6 max-w-3xl text-lg leading-relaxed text-charcoal/70">
							Our objectives focus on delivering quality
							healthcare, advancing Ayurveda through research,
							standardizing medications and services, creating
							awareness, and building an integrated healthcare
							ecosystem.
						</p>
					</div>

					<div className="mt-14">
						{/* FIRST ROW - 3 CARDS */}
						<div className="grid gap-6 md:grid-cols-3" data-stagger>
							{objectives.slice(0, 3).map((objective) => (
								<ObjectiveCard
									key={objective.title}
									objective={objective}
								/>
							))}
						</div>

						{/* SECOND ROW - 2 CARDS CENTERED */}
						<div
							className="mt-6 grid gap-6 md:mx-auto md:max-w-4xl md:grid-cols-2"
							data-stagger
						>
							{objectives.slice(3, 5).map((objective) => (
								<ObjectiveCard
									key={objective.title}
									objective={objective}
								/>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* =========================================
			    FOUNDERS
			========================================= */}
			<section id="founders" className="section-pad scroll-mt-20">
				<div className="container-x">
					<SectionHeading
						eyebrow="Founders"
						title="The people behind the work"
					/>

					<div className="mt-16 space-y-20 md:space-y-28">
						{founders.map((f, i) => (
							<article
								key={f.id}
								className="grid items-center gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20"
								data-reveal
							>
								<FounderPortrait
									founder={f}
									className={`mx-auto w-full max-w-sm lg:max-w-none ${
										i % 2 ? "lg:order-2" : ""
									}`}
								/>

								<div className={i % 2 ? "lg:order-1" : ""}>
									<h3 className="text-3xl sm:text-4xl">
										{f.name}
									</h3>

									<p className="mt-2 font-semibold text-forest/70">
										{f.role}
									</p>

									<p className="mt-6 text-lg leading-relaxed text-charcoal/75">
										{f.bio}
									</p>

									<h4 className="mt-8 font-sans text-sm font-semibold uppercase tracking-[0.16em] text-forest/70">
										Professional background
									</h4>

									<ul className="mt-3 space-y-2">
										{f.background.map((b) => (
											<li
												key={b}
												className="flex gap-3 text-charcoal/80"
											>
												<span
													className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
													aria-hidden="true"
												/>

												{b}
											</li>
										))}
									</ul>

									{/* LinkedIn Profile */}
									{f.linkedin && (
										<a
											href={f.linkedin}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={`${f.name} on LinkedIn`}
											className="mt-8 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-forest/20 text-forest transition hover:bg-forest hover:text-ivory"
										>
											<Linkedin
												size={16}
												aria-hidden="true"
											/>
										</a>
									)}
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* =========================================
			    OUR APPROACH
			========================================= */}
			<section className="section-pad bg-ivory-deep/60">
				<div className="container-x">
					<SectionHeading
						eyebrow="Our Approach"
						title="A clear path from question to outcome"
					/>

					<ol
						className="mt-14 grid gap-4 md:grid-cols-5"
						data-stagger
					>
						{steps.map((s, i) => (
							<li
								key={s.title}
								className="relative rounded-3xl border border-forest/10 bg-white p-6"
							>
								<span className="font-display text-3xl text-gold">
									{String(i + 1).padStart(2, "0")}
								</span>

								<h3 className="mt-4 text-xl">{s.title}</h3>

								<p className="mt-2 text-sm leading-relaxed text-charcoal/70">
									{s.text}
								</p>
							</li>
						))}
					</ol>
				</div>
			</section>

			{/* =========================================
			    FUTURE ROADMAP
			========================================= */}
			<section className="section-pad">
				<div className="container-x">
					<SectionHeading
						eyebrow="Future Roadmap"
						title="Consultancy, then manufacturing, then a multi-speciality hospital"
					/>

					<div className="mt-16">
						<Roadmap />
					</div>
				</div>
			</section>

			{/* =========================================
			    CTA
			========================================= */}
			<CTASection
				title="Let's Build Meaningful Healthcare Research Together"
				description="Tell us about your idea, thesis or project and we will suggest a practical way forward."
			/>
		</div>
	);
}