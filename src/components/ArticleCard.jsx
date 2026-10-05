import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ArticleMedia, { formatDate } from "./ArticleMedia";

export default function ArticleCard({ article }) {
	return (
		<article className="group relative flex h-full flex-col">
			<div className="aspect-[4/3] overflow-hidden rounded-3xl bg-sage-soft">
				<ArticleMedia
					article={article}
					className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105"
				/>
			</div>
			<div className="mt-5 flex items-center gap-3 text-xs text-charcoal/60">
				<span className="rounded-full bg-sage-soft px-3 py-1 font-semibold text-forest">
					{article.category}
				</span>
				<time dateTime={article.date}>{formatDate(article.date)}</time>
			</div>
			<h3 className="mt-3 text-[1.35rem] leading-snug transition-colors group-hover:text-forest-deep">
				{article.title}
			</h3>
			<p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-charcoal/70">
				{article.excerpt}
			</p>
			<Link
				to={`/insights/${article.slug}`}
				className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest after:absolute after:inset-0"
			>
				Read Article{" "}
				<ArrowRight
					size={16}
					className="transition-transform duration-300 group-hover:translate-x-1"
					aria-hidden="true"
				/>
				<span className="sr-only">: {article.title}</span>
			</Link>
		</article>
	);
}
