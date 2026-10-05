
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getIcon } from "./icons";

export default function ServiceCard({ service }) {
	const Icon = getIcon(service.icon);

	return (
		<article className="group flex h-full flex-col rounded-2xl border border-forest/10 bg-white p-6 transition-transform duration-300 hover:-translate-y-1">
			{/* Icon + Number */}
			<div className="flex items-start justify-between">
				<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sage-soft text-forest">
					<Icon
						size={20}
						strokeWidth={1.7}
						aria-hidden="true"
					/>
				</span>

				<span className="font-display text-2xl text-forest/20">
					{service.number}
				</span>
			</div>

			{/* Content */}
			<h3 className="mt-6 text-xl leading-snug">
				{service.title}
			</h3>

			<p className="mt-2 flex-1 text-sm leading-6 text-charcoal/65">
				{service.summary}
			</p>

			{/* Link */}
			<Link
				to={`/services#${service.id}`}
				className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest"
			>
				Learn More
				<ArrowRight
					size={15}
					aria-hidden="true"
				/>
				<span className="sr-only">
					about {service.title}
				</span>
			</Link>
		</article>
	);
}