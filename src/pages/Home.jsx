import Seo from "../components/Seo";
import Button, { TextLink } from "../components/Button";
import SplitWords from "../components/SplitWords";
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
import { pillars } from "../data/pillars";
import { brand } from "../config/brand";

const capabilities = [
	"Clinical research",
	"Scientific writing",
	"Research methodology",
	"Formulation guidance",
];

export default function Home() {
	const ref = useGsapScope();
	const { data: latest } = useAsync(() => fetchArticles({ limit: 3 }), []);

	return (
		<div ref={ref}>
			<Seo />

			{/* =========================================
			    HERO
			========================================= */}
			<section
				className="relative overflow-hidden bg-ivory"
				aria-labelledby="hero-heading"
			>
				{/* Background banner: mobile + desktop dono par */}
				<div className="absolute inset-0" data-hero-art aria-hidden="true">
					<img
						src="/images/hero-banner.png"
						alt=""
						className="h-full w-full object-cover object-[80%_bottom] lg:object-right"
						data-hero-art-inner
						fetchPriority="high"
					/>

					{/* Mobile: upar se ivory fade (text readable), neeche plant dikhe */}
					<div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory/85 via-45% to-transparent lg:hidden" />

					{/* Desktop: left se halka fade */}
					<div className="absolute inset-0 hidden bg-gradient-to-r from-ivory/70 via-transparent to-transparent lg:block" />
				</div>

				<div className="container-x relative flex pb-80 pt-32 sm:pb-[26rem] md:pt-40 lg:min-h-[44rem] lg:items-center lg:pb-24">
					<div className="max-w-xl lg:max-w-[34rem]">
						{/* COMPANY NAME */}
						<p
							className="max-w-lg text-lg font-extrabold uppercase leading-relaxed tracking-[0.08em] text-gold sm:text-base"
							data-hero-label
						>
							{brand.companyName}
						</p>
						{/* BRAND TAGLINE */}
						<p className="eyebrow mt-3 font-bold" data-hero-label>
							Ayurveda • Yoga • Health Research
						</p>

						<h1
							id="hero-heading"
							className="h-display mt-6 !text-[2.6rem] sm:!text-6xl lg:!text-[4rem]"
						>
							<SplitWords text="Bridging Ancient Wisdom with Modern Science" />
						</h1>

						<p className="lede mt-7" data-hero-fade>
							Research-driven consultancy in Ayurveda, Yoga and Healthcare.
							Helping transform knowledge, clinical experience and ideas into
							meaningful scientific outcomes.
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
							className="mt-12 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-forest/15 pt-6 text-sm text-charcoal/70"
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
				</div>
			</section>

			{/* =========================================
			    MISSION
			========================================= */}
			<section className="section-pad" aria-labelledby="purpose-heading">
				<div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
					<div data-reveal>
						<p className="eyebrow">Our Purpose</p>

						<h2 id="purpose-heading" className="h-section mt-5">
							Where Traditional Knowledge Meets Scientific Inquiry
						</h2>

						<p className="lede mt-6">
							We work at the intersection of Ayurveda, healthcare, clinical
							experience and scientific research. Our role is to help
							practitioners, scholars and organisations ask sharper questions,
							design credible studies and share their findings in ways the wider
							scientific community can trust.
						</p>

						<p className="lede mt-4">
							Ayurveda, Yoga, Global traditional systems, and Modern integrative
							healthcare has depth that deserves rigorous documentation. We
							provide the structure, method and writing support to make that
							possible.
						</p>

						<TextLink to="/about" className="mt-8">
							Discover Our Approach
						</TextLink>
					</div>

					<div
						className="aspect-[5/4] overflow-hidden rounded-[2rem] shadow-soft"
						data-image-reveal
					>
						<img
							src="/banners/our-purpose.webp"
							alt="Molecular structure diagram beside botanical notes"
							className="h-full w-full object-cover"
							loading="lazy"
							decoding="async"
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
								At Acharya, we bring together the depth of Ayurvedic knowledge
								with a structured and research-oriented approach. Our work is
								designed to support researchers, students, practitioners, and
								organisations looking to explore ideas, develop meaningful
								research, translate knowledge into practical outcomes and
								advance dedicated solutions in Women’s Health and Cancer
								Supportive Care.
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
								<li>• Dedicated focus on Women’s Health &amp; Cancer Care</li>
							</ul>
						</div>
					</div>

					<div className="mt-14 border-y border-forest/10 py-6">
						<div className="grid gap-6 text-sm sm:grid-cols-3">
							<div>
								<p className="font-semibold text-forest">
									Research &amp; Academia
								</p>

								<p className="mt-1 text-charcoal/60">
									Supporting meaningful academic and research initiatives.
								</p>
							</div>

							<div>
								<p className="font-semibold text-forest">
									Ayurveda &amp; Innovation
								</p>

								<p className="mt-1 text-charcoal/60">
									Connecting traditional wisdom with contemporary thinking.
								</p>
							</div>

							<div>
								<p className="font-semibold text-forest">Focus Areas</p>

								<p className="mt-1 text-charcoal/60">
									Targeted initiatives in Women’s Health and Cancer Supportive
									Care.
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
			<section className="section-pad overflow-hidden">
				<div className="container-x">
					<SectionHeading
						eyebrow="Why Work With Us"
						title="Research With Purpose. Knowledge With Impact."
						align="center"
					/>

					<div className="mt-16 space-y-16 lg:space-y-20">
						{pillars.map((p, index) => {
							const Icon = getIcon(p.icon);

							return (
								<div
									key={p.n}
									className="why-pillar grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
								>
									<div
										className={`why-pillar-image overflow-hidden rounded-[2rem] ${
											index % 2 === 0 ? "lg:order-1" : "lg:order-2"
										}`}
									>
										<div className="group relative aspect-[4/3] overflow-hidden rounded-[2rem]">
											<img
												src={p.image}
												alt={p.title}
												className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
												loading="lazy"
											/>

											<div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent" />

											<span className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-forest backdrop-blur-sm">
												<Icon size={20} strokeWidth={1.5} aria-hidden="true" />
											</span>

											<span className="absolute bottom-5 right-5 font-display text-3xl text-white/90">
												{p.n}
											</span>
										</div>
									</div>

									<div
										className={`why-pillar-content ${
											index % 2 === 0 ? "lg:order-2" : "lg:order-1"
										}`}
									>
										<div className="flex items-center gap-4">
											<span className="font-display text-xl text-gold">
												{p.n}
											</span>

											<span className="h-px w-12 bg-forest/20" />
										</div>

										<h3 className="mt-5 text-2xl lg:text-3xl">{p.title}</h3>

										<p className="mt-4 max-w-xl text-[0.98rem] leading-7 text-charcoal/70">
											{p.text}
										</p>
									</div>
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

						<TextLink to="/about#founders" className="shrink-0">
							Meet Our Team
						</TextLink>
					</div>

					<div className="mt-14 grid gap-8 md:grid-cols-3" data-stagger>
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

						<TextLink to="/insights" className="shrink-0">
							View All Insights
						</TextLink>
					</div>

					<div
						className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3"
						style={{ minHeight: latest ? undefined : 420 }}
					>
						{(latest || []).map((a) => (
							<ArticleCard key={a.id} article={a} />
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
