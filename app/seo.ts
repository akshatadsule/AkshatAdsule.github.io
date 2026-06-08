export const SITE_URL = "https://adsule.com";

export const SITE_NAME = "Akshat Adsule";

export const SITE_DESCRIPTION =
	"Akshat Adsule is a software engineer, UC Davis computer science and engineering student, and photographer building web, cloud, and rendering systems.";

export const SITE_BACKGROUND_COLOR = "#0f172a";

export const PROFILE_LINKS = [
	"https://www.linkedin.com/in/AkshatAdsule/",
	"https://github.com/AkshatAdsule",
	"https://photos.adsule.com",
];

export const PERSON_JSON_LD = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Akshat Adsule",
	url: SITE_URL,
	description: SITE_DESCRIPTION,
	jobTitle: "Software Engineer",
	sameAs: PROFILE_LINKS,
	knowsAbout: [
		"Software engineering",
		"Computer science",
		"Web development",
		"Cloud infrastructure",
		"Distributed rendering",
		"Photography",
	],
	alumniOf: {
		"@type": "CollegeOrUniversity",
		name: "University of California, Davis",
		sameAs: "https://www.ucdavis.edu/",
	},
};
