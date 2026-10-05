import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import ArticleDetails from "../components/ArticleDetails";
import Button from "../components/Button";
import useAsync from "../hooks/useAsync";
import {
	fetchArticleBySlug,
	fetchRelatedArticles,
} from "../services/articlesApi";

export default function ArticleDetailsPage() {
	const { slug } = useParams();
	const { data: article, loading } = useAsync(
		() => fetchArticleBySlug(slug),
		[slug],
	);
	const { data: related } = useAsync(
		() => fetchRelatedArticles(slug, 3),
		[slug],
	);

	if (loading) return <div className="min-h-[70vh]" aria-busy="true" />;

	if (!article) {
		return (
			<section className="container-x flex min-h-[70vh] flex-col items-start justify-center pt-32">
				<Seo title="Article not found" />
				<h1 className="h-display">We could not find that article</h1>
				<p className="lede mt-4 max-w-lg">
					The link may be outdated or the article may have moved. Browse all
					insights to find what you need.
				</p>
				<Button to="/insights" className="mt-8">
					Browse all insights
				</Button>
			</section>
		);
	}

	return (
		<>
			<Seo
				title={article.title}
				description={article.excerpt}
				image={article.image}
				type="article"
			/>
			<ArticleDetails article={article} related={related || []} />
		</>
	);
}
