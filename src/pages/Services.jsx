import { Check } from "lucide-react";
import Seo from "../components/Seo";
import SplitWords from "../components/SplitWords";
import Button from "../components/Button";
import CTASection from "../components/CTASection";
import { getIcon } from "../components/icons";
import { useGsapScope } from "../animations/gsapAnimations";
import { services } from "../data/services";

export default function Services() {
	const ref = useGsapScope();

	return (
		<div ref={ref}>
			<Seo
				title="Services"
				description="Thesis-to-paper conversion, clinical writing and publication support, collaborative health projects, funded grants, research workshops, webinars and awareness."
			/>

			{/* =========================================
			    HERO
			========================================= */}
			<section
				className="relative overflow-hidden bg-ivory"
				aria-labelledby="services-hero-heading"
			>
				{/* Background banner: mobile + desktop */}
				<div
					className="absolute inset-0"
					data-hero-art
					aria-hidden="true"
				>
					<img
						src="/banners/service.webp"
						alt=""
						className="h-full w-full object-cover object-[80%_bottom] lg:object-right"
						data-hero-art-inner
						loading="eager"
					/>

					{/* Mobile: upar se ivory fade, neeche plant dikhe */}
					<div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory/85 via-45% to-transparent lg:hidden" />

					{/* Desktop: left se halka fade */}
					<div className="absolute inset-0 hidden bg-gradient-to-r from-ivory/70 via-transparent to-transparent lg:block" />
				</div>

				<div className="container-x relative flex pb-72 pt-32 sm:pb-[24rem] md:pt-40 lg:min-h-[36rem] lg:items-center lg:pb-24">
					<div className="max-w-xl lg:max-w-[34rem]">
						<p className="eyebrow" data-hero-label>
							Services
						</p>

						<h1
							id="services-hero-heading"
							className="h-display mt-6 !text-[2.4rem] sm:!text-6xl lg:!text-[3.75rem]"
						>
							<SplitWords text="Research Expertise Across Ayurveda & Healthcare" />
						</h1>

						<p className="lede mt-7" data-hero-fade>
							Four focused services for clinicians, scholars,
							institutes and organisations who want their work to
							be rigorous, visible and useful.
						</p>
					</div>
				</div>
			</section>

			{/* =========================================
			    SERVICES
			========================================= */}
			{services.map((s, i) => {
				const Icon = getIcon(s.icon);
				const flip = i % 2 === 1;

				return (
					<section
						key={s.id}
						id={s.id}
						className={`section-pad scroll-mt-16 ${
							i % 2 === 0 ? "" : "bg-ivory-deep/60"
						}`}
						aria-labelledby={`${s.id}-title`}
					>
						<div className="container-x grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
							<div
								className={flip ? "lg:order-2" : ""}
								data-reveal
							>
								<div className="flex items-center gap-5">
									<span className="font-display text-7xl leading-none text-gold/70 sm:text-8xl">
										{s.number}
									</span>

									<span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-forest text-ivory">
										<Icon
											size={26}
											strokeWidth={1.5}
											aria-hidden="true"
										/>
									</span>
								</div>

								<h2
									id={`${s.id}-title`}
									className="h-section mt-8 !text-3xl sm:!text-4xl"
								>
									{s.detailTitle}
								</h2>

								<p className="lede mt-5">{s.description}</p>

								{/* SERVICE IMAGE */}
								{s.image && (
									<div
										className="mt-8 aspect-[16/10] overflow-hidden rounded-3xl bg-sage-soft"
										data-image-reveal
									>
										<img
											src={s.image}
											alt={s.title}
											width="1600"
											height="1000"
											className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
											loading="lazy"
											decoding="async"
											onError={(e) => {
												console.warn(
													`Service image not found: ${s.image}`,
												);
												e.currentTarget.parentElement.style.display =
													"none";
											}}
										/>
									</div>
								)}
							</div>

							<div className={flip ? "lg:order-1" : ""}>
								<h3
									className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-forest/70"
									data-reveal
								>
									Key offerings
								</h3>

								<ul
									className="mt-5 divide-y divide-forest/10 border-y border-forest/10"
									data-stagger
								>
									{s.offerings.map((o) => (
										<li
											key={o.title}
											className="flex gap-4 py-5"
										>
											<span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage-soft text-forest">
												<Check
													size={14}
													aria-hidden="true"
												/>
											</span>

											<div>
												<p className="font-display text-xl text-forest">
													{o.title}
												</p>

												<p className="mt-1 text-[0.95rem] leading-relaxed text-charcoal/70">
													{o.text}
												</p>
											</div>
										</li>
									))}
								</ul>

								<Button
									to={`/contact?type=${s.projectType}`}
									arrow
									className="mt-8 w-full sm:w-auto"
								>
									Discuss this service
								</Button>
							</div>
						</div>
					</section>
				);
			})}

			{/* =========================================
			    CTA
			========================================= */}
			<div className="pt-20 md:pt-28">
				<CTASection
					title="Not sure which service fits?"
					description="Describe your project in a few lines. We will tell you honestly whether and how we can help."
					primary={{
						label: "Start a Conversation",
						to: "/contact",
					}}
					secondary={{
						label: "Book a Consultation",
						to: "/consultation",
					}}
				/>
			</div>
		</div>
	);
}