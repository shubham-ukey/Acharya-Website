
import { ArrowRight } from "lucide-react";
import Seo from "../components/Seo";
import Button, { TextLink } from "../components/Button";
import SplitWords from "../components/SplitWords";
import ArtPlate from "../components/ArtPlate";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import FounderCard from "../components/FounderCard";
import ArticleCard from "../components/ArticleCard";
import Roadmap from "../components/Roadmap";
import CTASection from "../components/CTASection";
import { getIcon } from "../components/icons";
import { useGsapScope } from "../animations/gsapAnimations";
import useAsync from "../hooks/useAsync";
import { fetchArticles } from "../services/articlesApi";
import { services } from "../data/services";
import { founders } from "../data/founders";

const pillars = [
	{
		n: "01",
		icon: "Microscope",
		title: "Scientific Approach",
		text: "Every project starts with a clear question, a suitable design and transparent reporting.",
	},
	{
		n: "02",
		icon: "Leaf",
		title: "Ayurveda Expertise",
		text: "Classical knowledge is respected and translated carefully into testable research.",
	},
	{
		n: "03",
		icon: "Handshake",
		title: "Collaborative Research",
		text: "We work as partners with clinicians, institutes and organisations, not as outside vendors.",
	},
	{
		n: "04",
		icon: "BadgeCheck",
		title: "Practical Outcomes",
		text: "Papers, protocols, trained teams and products that people can actually use.",
	},
];

const capabilities = [
	"Clinical research",
	"Scientific writing",
	"Research methodology",
	"Formulation guidance",
];

export default function Home() {
	const ref = useGsapScope();
	const { data: latest } = useAsync(
		() => fetchArticles({ limit: 3 }),
		[]
	);

	return (
		<div ref={ref}>
			<Seo />

			{/* =========================================
			    HERO
			========================================= */}
			<section
				className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40"
				aria-labelledby="hero-heading"
			>
				<div
					className="pointer-events-none absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full bg-sage-soft blur-3xl"
					aria-hidden="true"
				/>

				<div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
					<div>
						<p className="eyebrow" data-hero-label>
							Ayurveda • Yoga • Health Research
						</p>

						<h1
							id="hero-heading"
							className="h-display mt-6 !text-[2.6rem] sm:!text-6xl lg:!text-[4.25rem]"
						>
							<SplitWords text="Bridging Ancient Wisdom with Modern Science" />
						</h1>

						<p className="lede mt-7 max-w-xl" data-hero-fade>
							Research-driven consultancy in Ayurveda, Yoga and
							healthcare, helping transform knowledge, clinical
							experience and ideas into meaningful scientific outcomes.
						</p>

						<div
							className="mt-9 flex flex-col gap-3 sm:flex-row"
							data-hero-fade
						>
							<Button to="/services" arrow>
								Explore Our Services
							</Button>

							<Button to="/contact" variant="secondary">
								Talk to Us
							</Button>
						</div>

						<ul
							className="mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-3 border-t border-forest/15 pt-6 text-sm text-charcoal/70"
							data-hero-fade
						>
							{capabilities.map((c) => (
								<li key={c} className="flex items-center gap-2">
									<span
										className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
										aria-hidden="true"
									/>
									{c}
								</li>
							))}
						</ul>
					</div>

					<div
						className="relative mx-auto w-full max-w-md lg:max-w-none"
						data-hero-art
					>
						<div className="aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] shadow-lift">
							<div className="h-full w-full" data-hero-art-inner>
								<ArtPlate
									variant="sprig"
									tone="light"
									label="Botanical specimen plate of a medicinal herb with measurement marks"
								/>
							</div>
						</div>

						<div className="absolute -bottom-6 left-1/2 w-[92%] -translate-x-1/2 rounded-2xl border border-forest/10 bg-ivory/95 p-4 shadow-soft backdrop-blur sm:-left-8 sm:bottom-10 sm:w-64 sm:translate-x-0">
							<p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-forest/60">
								Our method
							</p>

							<ol className="mt-3 flex items-center justify-between text-xs font-semibold text-forest">
								{["Observe", "Study", "Publish"].map((s, i) => (
									<li key={s} className="flex items-center gap-2">
										<span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest text-[0.65rem] text-ivory">
											{i + 1}
										</span>
										{s}
									</li>
								))}
							</ol>
						</div>
					</div>
				</div>
			</section>

			{/* =========================================
			    MISSION
			========================================= */}
			<section
				className="section-pad"
				aria-labelledby="purpose-heading"
			>
				<div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
					<div data-reveal>
						<p className="eyebrow">Our Purpose</p>

						<h2 id="purpose-heading" className="h-section mt-5">
							Where Traditional Knowledge Meets Scientific Inquiry
						</h2>

						<p className="lede mt-6">
							We work at the intersection of Ayurveda, healthcare,
							clinical experience and scientific research. Our role is
							to help practitioners, scholars and organisations ask
							sharper questions, design credible studies and share
							their findings in ways the wider scientific community
							can trust.
						</p>

						<p className="lede mt-4">
							Ayurveda has depth that deserves rigorous documentation.
							We provide the structure, method and writing support to
							make that possible.
						</p>

						<TextLink to="/about" className="mt-8">
							Discover Our Approach
						</TextLink>
					</div>

					<div
						className="aspect-[5/4] overflow-hidden rounded-[2rem] shadow-soft"
						data-image-reveal
					>
						<ArtPlate
							variant="molecule"
							tone="paper"
							label="Molecular structure diagram beside botanical notes"
						/>
					</div>
				</div>
			</section>

			{/* =========================================
			    SERVICES
			========================================= */}
			<section className="section-pad bg-ivory-deep/60">
				<div className="container-x">
					<SectionHeading
						eyebrow="What We Do"
						title="Research Expertise That Moves Ideas Forward"
					/>

					<div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
						<div>
							<p className="max-w-3xl text-lg leading-8 text-charcoal/75">
								At Acharya, we bring together the depth of Ayurvedic
								knowledge with a structured and research-oriented
								approach. Our work is designed to support
								researchers, students, practitioners, and
								organisations looking to explore ideas, develop
								meaningful research, and translate knowledge into
								practical outcomes.
							</p>
						</div>

						<div className="rounded-3xl border border-forest/10 bg-white/60 p-6">
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-forest">
								Our Approach
							</p>

							<ul className="mt-4 space-y-3 text-sm leading-6 text-charcoal/70">
								<li>• Research-led thinking</li>
								<li>• Classical Ayurvedic knowledge</li>
								<li>• Structured academic guidance</li>
								<li>• Practical and application-focused solutions</li>
							</ul>
						</div>
					</div>

					<div className="mt-14 border-y border-forest/10 py-6">
						<div className="grid gap-6 text-sm sm:grid-cols-3">
							<div>
								<p className="font-semibold text-forest">
									Research & Academia
								</p>

								<p className="mt-1 text-charcoal/60">
									Supporting meaningful academic and research
									initiatives.
								</p>
							</div>

							<div>
								<p className="font-semibold text-forest">
									Ayurveda & Innovation
								</p>

								<p className="mt-1 text-charcoal/60">
									Connecting traditional wisdom with contemporary
									thinking.
								</p>
							</div>

							<div>
								<p className="font-semibold text-forest">
									Knowledge to Practice
								</p>

								<p className="mt-1 text-charcoal/60">
									Turning ideas and research into practical outcomes.
								</p>
							</div>
						</div>
					</div>

					<div
						className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
						data-stagger
					>
						{services.map((s) => (
							<ServiceCard key={s.id} service={s} />
						))}
					</div>
				</div>
			</section>

			{/* =========================================
			    WHY WORK WITH US
			========================================= */}
			<section className="section-pad">
				<div className="container-x">
					<SectionHeading
						eyebrow="Why Work With Us"
						title="Research With Purpose. Knowledge With Impact."
						align="center"
					/>

					<div
						className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0"
						data-stagger
					>
						{pillars.map((p) => {
							const Icon = getIcon(p.icon);

							return (
								<div
									key={p.n}
									className="lg:border-l lg:border-forest/15 lg:px-8 lg:first:border-l-0 lg:first:pl-0"
								>
									<div className="flex items-center gap-4">
										<span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-forest/20 text-forest">
											<Icon
												size={21}
												strokeWidth={1.5}
												aria-hidden="true"
											/>
										</span>

										<span className="font-display text-xl text-gold">
											{p.n}
										</span>
									</div>

									<h3 className="mt-6 text-xl">
										{p.title}
									</h3>

									<p className="mt-3 text-[0.95rem] leading-relaxed text-charcoal/70">
										{p.text}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* =========================================
			    FOUNDERS
			========================================= */}
			<section className="section-pad bg-ivory-deep/60">
				<div className="container-x">
					<div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
						<SectionHeading
							eyebrow="Meet the Founders"
							title="Built by People Who Believe in Better Research"
						/>

						<TextLink
							to="/about#founders"
							className="shrink-0"
						>
							Meet Our Team
						</TextLink>
					</div>

					<div
						className="mt-14 grid gap-8 md:grid-cols-3"
						data-stagger
					>
						{founders.slice(0, 3).map((f) => (
							<div key={f.id} className="min-w-0">
								<FounderCard founder={f} />
							</div>
						))}
					</div>
				</div>
			</section>

			{/* =========================================
			    INSIGHTS
			========================================= */}
			<section className="section-pad">
				<div className="container-x">
					<div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
						<SectionHeading
							eyebrow="Insights"
							title="Perspectives on Ayurveda, Research & Healthcare"
						/>

						<TextLink
							to="/insights"
							className="shrink-0"
						>
							View All Insights
						</TextLink>
					</div>

					<div
						className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3"
						style={{ minHeight: latest ? undefined : 420 }}
					>
						{(latest || []).map((a) => (
							<ArticleCard
								key={a.id}
								article={a}
							/>
						))}
					</div>
				</div>
			</section>

			{/* =========================================
			    ROADMAP
			========================================= */}
			<section className="section-pad bg-ivory-deep/60">
				<div className="container-x">
					<SectionHeading
						eyebrow="Our Roadmap"
						title="From Consultancy to a Broader Healthcare Ecosystem"
						description="We are building step by step, letting research, quality and trust shape each stage."
					/>

					<div className="mt-16">
						<Roadmap />
					</div>
				</div>
			</section>

			{/* =========================================
			    CTA
			========================================= */}
			<div className="pt-20 md:pt-28">
				<CTASection />
			</div>
		</div>
	);
}

