import type { JobDetails, ProjectDetails } from "./_components/experience-card";

export const jobs: JobDetails[] = [
	{
		role: "Associate Software Engineer",
		company: "Veeva Systems",
		companyLink: "https://www.veeva.com/",
		startDate: "August 2026",
		endDate: "present",
		description: ["Building software for clinical data management."],
		techStack: [],
	},
	{
		role: "Software Engineering Intern",
		company: "Veeva Systems",
		companyLink: "https://www.veeva.com/",
		startDate: "June 2025",
		endDate: "Sept 2025",
		description: [
			"Worked on Veeva’s Electronic Data Capture (EDC) application, a platform for collecting, reviewing, and validating clinical study data",
			"Resolved 40+ software defects in a Java backend and React/Backbone frontend, improving system usability and reliability",
			"Implemented production features for file uploads, external data ingestion, and lab-data workflows in Veeva EDC, improving support for clinical study data collection.",
		],
		techStack: ["Java", "React", "JavaScript", "SCSS", "MySQL", "Git", "Jira"],
	},
	{
		role: "Student Application Developer",
		company: "UC Davis IET",
		companyLink: "https://iet.ucdavis.edu/",
		startDate: "Oct 2023",
		endDate: "Jun 2026",
		description: [
			"Collaborated with senior developers to maintain MyInfoVault, a platform for academic personnel",
			"Resolved defects and developed new features in a mature Java Spring web application as per the needs of actual users",
			"Collaborated on an ongoing UI refresh and transitioned existing JSP pages to modern technologies such as Vue.js",
		],
		techStack: ["Java", "Spring", "React", "MariaDB", "Jira"],
	},
	{
		role: "Software Engineering Intern",
		company: "American Wild Horse Campaign",
		companyLink: "https://home.americanwildhorse.org/",
		startDate: "June 2023",
		endDate: "Sept 2023",
		description: [
			"Worked with a team to build and release a full-stack mobile application to gather crowdsourced data to identify and tag horses in the wild with machine learning",
			"Designed and deployed backend systems for image processing, user management, and app functionality using standard technologies and platforms such as node.js, postgres, Microsoft Azure, Google Firebase, PostgresSQL, Docker, and Kubernetes.",
			"Implemented machine learning models into the backend to ensure image validity and quality while removing unwanted and dangerous content",
		],
		techStack: [
			"Node.js",
			"Postgres",
			"Azure",
			"Firebase",
			"Docker",
			"Machine Learning",
		],
	},
];

export const projects: ProjectDetails[] = [
	{
		name: "Distributed Deep Rendering and Compositing",
		link: "https://github.com/skewer-project/skewer",
		startDate: "Jan 2026",
		endDate: "Present",
		description: [
			"Building Skewer, an open-source animation suite for distributed deep rendering, compositing, and render orchestration",
			"Developed a custom C++ ray tracing renderer with deep sampling support for per-pixel depth and opacity data",
			"Researched and implemented a deep image compositor for merging multi-layer render outputs efficiently",
			"Designed cloud infrastructure for distributed render jobs across Google Cloud Platform",
			"Created a React and Three.js scene previewer for editing scenes and dispatching render jobs",
		],
		techStack: [
			"C++",
			"Go",
			"React",
			"TypeScript",
			"Three.js",
			"GCP",
			"Terraform",
		],
	},
	{
		name: "Volare",
		link: "https://volare.adsule.com",
		startDate: "Sep 2024",
		endDate: "May 2025",
		description: [
			"Launched Volare, a web-based AI interview coach that helps college students practice with role-specific mock interviews",
			"Developed a TypeScript backend and Next.js frontend for generating personalized interview sessions from job listings and user profiles and resumes",
			"Integrated ElevenLabs voice synthesis to support real-time conversational interview practice",
			"Added computer vision feedback for facial expression and emotion cues to make post-interview coaching more personalized",
		],
		techStack: [
			"TypeScript",
			"Next.js",
			"GCP",
			"Agents",
			"Large Language Models",
		],
	},
	{
		name: "Bike Black Box",
		link: "https://b3.adsule.com",
		startDate: "April 2025",
		endDate: "June 2025",
		description: [
			"Built B3, a smart bike monitoring system for automatic ride tracking, crash detection, and live location sharing",
			"Prototyped embedded hardware with a TI CC3200 SoC, GPS antenna, OLED display, and accelerometer",
			"Used AWS IoT Device Shadows and SNS to synchronize bike state and send crash detection alerts in real time",
			"Developed a tracking web app and backend for ride history, live maps, and remote lock controls",
		],
		techStack: ["C++", "Go", "React", "Embedded Systems", "AWS IoT", "AWS SNS"],
	},
];
