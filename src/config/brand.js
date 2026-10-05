
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

	email: "acharya.apr@gmail.com",
	phone: "+91 96378 66014",
	whatsappNumber: "919637866014",
	whatsappMessage:
		"Hello, I would like to know more about your research consultancy services.",
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
