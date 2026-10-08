
/**
 * SINGLE SOURCE OF TRUTH FOR BRAND DETAILS
 * Replace these values once the final name, logo and domain are approved.
 * - Logo: drop a file in /public (e.g. /logo.svg) and set `logo` below.
 * - Favicon: replace /public/favicon.svg
 * - Colours: edit the CSS variables at the top of src/index.css
 */
export const brand = {
	name: "ACHARYA",
	displayName: "Ayurvista Research",
	tagline: "Ayurveda • Yoga • Health Research",
	description:
		"Research-driven consultancy in Ayurveda, Yoga and healthcare, helping transform knowledge, clinical experience and ideas into meaningful scientific outcomes.",
	domain: "https://www.ayurvista.example",
	logo: null,
	companyName:"ASSEMBLY CENTRE FOR HEALTH AND RESEARCH IN YOG AND AYURVEDA LLP",

	email: "acharya.apr@gmail.com",
	phone: "+91 88306 03975",
	whatsappNumber: "918830603975",
	whatsappMessage:"Hello Acharya Team, I’m interested in learning more about your Ayurveda, Yoga, and Health Research Consultancy services. Could you please share more details about your services and how we can collaborate? Thank you!",
	location: "137, Balaji park, Pimpalgaon Road, Near balaji wedding hall, Yavatmal-445001, Maharashtra, India",
	mapQuery: "137, Balaji park, Pimpalgaon Road, Near balaji wedding hall, Yavatmal-445001, Maharashtra, India",

	social: {
		linkedin:
			"https://www.linkedin.com/company/assembly-centre-for-health-and-research-in-yog-and-ayurveda/",
		instagram:
			"https://www.instagram.com/acharya_yogayurveda?stkn=Y2k5OG92cGZiaGF5",
		facebook:
			"https://www.facebook.com/share/1BypSKtEy1/",
		threads:
			"https://www.threads.com/@acharya_yogayurveda",
	},
};

export const whatsappLink = (text = brand.whatsappMessage) =>
	`https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(text)}`;
