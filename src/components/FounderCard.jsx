import { Linkedin } from "lucide-react";
import ArtPlate from "./ArtPlate";

/** Portrait: uses `founder.photo` when supplied, otherwise an elegant monogram. */
export function FounderPortrait({ founder, className = "" }) {
	return (
		<div
			className={`relative aspect-[4/5] overflow-hidden rounded-3xl bg-sage-soft ${className}`}
		>
			{founder.photo ? (
				<img
					src={founder.photo}
					alt={`Portrait of ${founder.name}`}
					loading="lazy"
					className="h-full w-full object-cover"
				/>
			) : (
				<>
					<ArtPlate
						variant="rings"
						tone={founder.tone}
						label={`Portrait placeholder for ${founder.name}`}
					/>
					<span
						className="absolute inset-0 flex items-center justify-center font-display text-7xl text-forest/85"
						aria-hidden="true"
					>
						{founder.initials}
					</span>
				</>
			)}
		</div>
	);
}

export default function FounderCard({ founder }) {
	return (
		<article className="group">
			<FounderPortrait
				founder={founder}
				className="transition-shadow duration-500 group-hover:shadow-lift"
			/>
			<div className="mt-6 flex items-start justify-between gap-4">
				<div>
					<h3 className="text-2xl">{founder.name}</h3>
					<p className="mt-1 text-sm font-medium text-forest/70">
						{founder.role}
					</p>
				</div>
				<a
					href={founder.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={`${founder.name} on LinkedIn`}
					className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-forest/20 text-forest transition hover:bg-forest hover:text-ivory"
				>
					<Linkedin size={16} />
				</a>
			</div>
			<p className="mt-3 text-[0.95rem] leading-relaxed text-charcoal/70">
				{founder.short}
			</p>
		</article>
	);
}
