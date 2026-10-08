/**
 * Service content. `icon` keys map to src/components/icons.js.
 *
 * Images: public/images/services-image/<id>.webp
 * (lowercase, kebab-case, same as the service `id` so names never mismatch)
 *
 * `projectType` must match a value your Contact form understands
 * (e.g. /contact?type=clinical).
 */

const IMG = "/images/services-image";

export const services = [
	{
		id: "thesis-to-paper",
		number: "01",
		icon: "FileText",
		image: `${IMG}/thesis-to-paper.webp`,
		projectType: "thesis",
		title: "Thesis to Paper Conversion & Publication",
		detailTitle: "Thesis to Paper Conversion & Publication",
		summary:
			"We transform academic dissertations and post-graduate thesis into concise, high-impact manuscripts ready for peer-reviewed medical journals.",
		description:
			"We transform academic dissertations and post-graduate thesis into concise, high-impact manuscripts ready for peer-reviewed medical journals. We extract core data, restructure methodology, and handle journal formatting so your academic research achieves the indexing and readership it deserves.",
		offerings: [
			{
				title: "Thesis analysis",
				text: "A structured review of your thesis to identify the core data, methodology, findings and publishable research.",
			},
			{
				title: "Research restructuring",
				text: "Restructuring the thesis into a concise and logically organized journal manuscript.",
			},
			{
				title: "Manuscript preparation",
				text: "Preparing the research manuscript according to scientific writing and reporting standards.",
			},
			{
				title: "Journal formatting",
				text: "Formatting manuscripts according to the requirements and guidelines of the selected medical journal.",
			},
			{
				title: "Publication guidance",
				text: "Guidance on journal selection, submission requirements and the overall publication process.",
			},
		],
	},

	{
		id: "clinical-writing",
		number: "02",
		icon: "Users", // same icon as 03: change one (e.g. "Stethoscope") if it exists in icons.js
		image: `${IMG}/clinical-writing.webp`,
		projectType: "clinical",
		title: "Clinical Writing & Publication Support",
		detailTitle: "Clinical Writing & Publication Support",
		summary:
			"We support practicing clinicians in documenting, analyzing, and publishing their clinical observations, unique case studies, and case series.",
		description:
			"We support practicing clinicians in documenting, analyzing, and publishing their clinical observations, unique case studies, and case series. From retrospective chart reviews to full manuscript drafting and submission management, we handle the publication workload while you retain complete authorship.",
		offerings: [
			{
				title: "Case reports & case series",
				text: "CARE-compliant manuscript drafting from patient records, clinical observations and documented outcomes.",
			},
			{
				title: "Clinical documentation setup",
				text: "Standardized clinical intake templates designed to support research documentation from scratch.",
			},
			{
				title: "Ethics & consent guidance",
				text: "Patient informed consent frameworks and guidance regarding ethical committee compliance.",
			},
			{
				title: "End-to-end submission management",
				text: "Journal portal submissions, cover letters, manuscript revisions and reviewer responses.",
			},
		],
	},

	{
		id: "collaborative-projects",
		number: "03",
		icon: "Users",
		image: `${IMG}/collaborative-projects.webp`,
		projectType: "collaboration",
		title: "Collaborative Health Projects & Funded Grants",
		detailTitle: "Collaborative Health Projects & Funded Grants",
		summary:
			"We partner with clinicians, hospitals, academic bodies, and health organizations to conceptualize, secure funding for, and execute clinical research initiatives.",
		description:
			"We partner with clinicians, hospitals, academic bodies, and health organizations to conceptualize, secure funding for, and execute clinical research initiatives. We bridge integrative medicine, evidence-based Ayurveda, and modern healthcare—applying for competitive grants and co-investigating specialized clinical programs.",
		offerings: [
			{
				title: "Government & institutional grant proposals",
				text: "Protocol drafting, funding identification, and competitive grant co-application.",
			},
			{
				title: "Women’s health initiatives",
				text: "Collaborative research specializing in Ayurvedic and integrative gynaecology.",
			},
			{
				title: "Cancer supportive care projects",
				text: "Evidence-based clinical projects targeting oncology symptom and quality-of-life relief.",
			},
			{
				title: "Institutional & hospital partnerships",
				text: "Joint study design, ethical clearances, and outcome documentation.",
			},
			{
				title: "Cross-pathy clinical collaborations",
				text: "Joint research trials bridging modern and traditional medicine.",
			},
		],
	},

	{
		id: "workshops-webinars",
		number: "04",
		icon: "Presentation",
		image: `${IMG}/workshops-webinars.webp`,
		projectType: "workshop",
		title: "Workshops, Webinars & Awareness",
		detailTitle: "Workshops, Webinars & Awareness",
		summary:
			"We deliver practical academic training, clinical Ayurvedic masterclasses, and public health initiatives for students, faculty, and healthcare institutions.",
		description:
			"We deliver practical academic training, clinical Ayurvedic masterclasses, and public health initiatives. Catering to students, faculty, and healthcare institutions, our programs bridge core research methodology, classical Ayurvedic wisdom, and integrative clinical awareness.",
		offerings: [
			{
				title: "Academic research & writing workshops",
				text: "Practical research methodology training for students, faculties, and institutions.",
			},
			{
				title: "Clinical Ayurveda masterclasses",
				text: "Deep therapeutic principles, formulations, and modern clinical correlations.",
			},
			{
				title: "Specialized Ayurvedic webinar series",
				text: "Curated online lectures exploring traditional science and therapeutics.",
			},
			{
				title: "Health awareness campaigns",
				text: "Outreach campaigns for women’s health and cancer supportive care.",
			},
		],
	},
];