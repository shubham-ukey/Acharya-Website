
import { HeartHandshake, HandHeart, Users, ArrowRight } from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Button from "../components/Button";

const supportOptions = [
	{
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
	},
	{
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
	},
];

export default function SupportUs() {
	return (
		<>
			<Seo
				title="Support Us | Acharya"
				description="Support Acharya through volunteering, knowledge contribution or funding to help advance meaningful work in Ayurveda, Yoga, healthcare and research."
			/>

			<PageHero
				eyebrow="Support Our Mission"
				title="Be Part of Meaningful Change"
				text="There are many ways to contribute to our journey. Share your time, expertise or resources and help us create meaningful impact through research, education and healthcare."
			/>

			<section className="section-pad">
				<div className="container-x">
					<div className="mx-auto max-w-3xl text-center">
						<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-soft text-forest">
							<HeartHandshake size={24} strokeWidth={1.6} />
						</div>

						<p className="mt-6 text-lg leading-8 text-charcoal/70">
							At Acharya, we believe meaningful work grows through
							collaboration. Whether you contribute your skills,
							time, ideas or financial resources, your support can
							help us take research and knowledge-driven initiatives
							forward.
						</p>
					</div>

					<div className="mt-14 grid gap-6 lg:grid-cols-2">
						{supportOptions.map((option) => {
							const Icon = option.icon;

							return (
								<article
									key={option.title}
									className="rounded-2xl border border-forest/10 bg-white p-7"
								>
									<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sage-soft text-forest">
										<Icon
											size={22}
											strokeWidth={1.6}
										/>
									</div>

									<h2 className="mt-6 text-2xl">
										{option.title}
									</h2>

									<p className="mt-3 leading-7 text-charcoal/70">
										{option.text}
									</p>

									<ul className="mt-6 space-y-3">
										{option.points.map((point) => (
											<li
												key={point}
												className="flex items-start gap-3 text-sm text-charcoal/70"
											>
												<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
												{point}
											</li>
										))}
									</ul>

									<Button
										to="/contact"
										className="mt-7"
										arrow
									>
										{option.action}
									</Button>
								</article>
							);
						})}
					</div>
				</div>
			</section>

			<section className="section-pad bg-ivory-deep/60">
				<div className="container-x">
					<div className="mx-auto max-w-4xl text-center">
						<p className="eyebrow">Let's Collaborate</p>

						<h2 className="h-display mt-4 text-3xl md:text-5xl">
							Your Contribution Can Help Move an Idea Forward
						</h2>

						<p className="mx-auto mt-5 max-w-2xl leading-7 text-charcoal/70">
							If you are interested in volunteering, collaborating
							on a project or supporting our initiatives, we would
							love to hear from you.
						</p>

						<div className="mt-8">
							<Button to="/contact" arrow>
								Get in Touch
							</Button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
