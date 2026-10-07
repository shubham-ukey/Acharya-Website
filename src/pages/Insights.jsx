import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import Seo from "../components/Seo";
import SplitWords from "../components/SplitWords";
import FeaturedArticle from "../components/FeaturedArticle";
import CategoryFilter from "../components/CategoryFilter";
import ArticleGrid from "../components/ArticleGrid";
import Button from "../components/Button";
import CTASection from "../components/CTASection";
import { useGsapScope } from "../animations/gsapAnimations";
import useAsync from "../hooks/useAsync";
import { fetchArticles, fetchCategories } from "../services/articlesApi";

export default function Insights() {
	const ref = useGsapScope();
	const [category, setCategory] = useState("All");
	const [query, setQuery] = useState("");

	const { data, loading, error } = useAsync(
		() => fetchArticles({ category, query }),
		[category, query]
	);
	const { data: cats } = useAsync(() => fetchCategories(), []);

	const list = data || [];
	const filtering = category !== "All" || query.trim() !== "";

	const { featured, rest } = useMemo(
		() =>
			filtering
				? { featured: null, rest: list }
				: { featured: list[0], rest: list.slice(1) },
		[list, filtering]
	);

	const reset = () => {
		setCategory("All");
		setQuery("");
	};

	return (
		<div ref={ref}>
			<Seo
				title="Insights"
				description="Articles on Ayurveda, Yoga, research methodology, clinical studies, healthcare and scientific writing."
			/>

			{/* =========================================
			    HERO
			========================================= */}
			<section
				className="relative overflow-hidden bg-ivory"
				aria-labelledby="insights-hero-heading"
			>
				{/* Background banner: mobile + desktop */}
				<div
					className="absolute inset-0"
					data-hero-art
					aria-hidden="true"
				>
					<img
						src="/banners/articles.webp"
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
							Insights
						</p>

						<h1
							id="insights-hero-heading"
							className="h-display mt-6 !text-[2.4rem] sm:!text-6xl lg:!text-[3.75rem]"
						>
							<SplitWords text="Research, Ayurveda & Healthcare Perspectives" />
						</h1>

						<p className="lede mt-7" data-hero-fade>
							Practical writing on study design, evidence,
							publication and the science of traditional medicine.
						</p>
					</div>
				</div>
			</section>

			{/* =========================================
			    ARTICLES
			========================================= */}
			<section
				className="section-pad !pt-12 md:!pt-16"
				aria-label="Articles"
			>
				<div className="container-x">
					<div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
						<CategoryFilter
							categories={cats || []}
							active={category}
							onChange={setCategory}
						/>

						<div className="relative w-full lg:max-w-xs">
							<label htmlFor="article-search" className="sr-only">
								Search articles
							</label>

							<Search
								size={17}
								className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-forest/60"
								aria-hidden="true"
							/>

							<input
								id="article-search"
								type="search"
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								placeholder="Search articles"
								className="input !rounded-full !py-3 pl-11"
							/>
						</div>
					</div>

					<div
						className="mt-12 min-h-[24rem]"
						aria-live="polite"
						aria-busy={loading}
					>
						{error ? (
							<p
								role="alert"
								className="rounded-2xl border border-forest/15 bg-white p-8 text-center text-charcoal/75"
							>
								We could not load the articles right now. Please
								refresh the page or try again in a few minutes.
							</p>
						) : loading && !data ? null : (
							<>
								{featured && (
									<div className="mb-16">
										<FeaturedArticle article={featured} />
									</div>
								)}

								<ArticleGrid
									articles={rest}
									emptyAction={
										<Button
											variant="secondary"
											className="mt-6"
											onClick={reset}
										>
											Clear search and filters
										</Button>
									}
								/>
							</>
						)}
					</div>
				</div>
			</section>

			<CTASection
				title="Have a topic you would like us to cover?"
				description="Tell us what you are working on and we may explore it in a future article."
				secondary={null}
			/>
		</div>
	);
}