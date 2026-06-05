import { Link } from "./common/link";
import {
	ExperienceCard,
	JobDetails,
	ProjectCard,
	ProjectDetails,
} from "./experience-card";
import { Arrow } from "./icons/arrow";

export function MainContent() {
	const jobs: JobDetails[] = [
		{
			role: "Associate Software Engineer",
			company: "Veeva Systems",
			companyLink: "https://www.veeva.com/",
			startDate: "August 2026",
			endDate: "?",
			description: ["To be updated..."],
			techStack: [],
		},
		{
			role: "Software Engineering Intern",
			company: "Veeva Systems",
			companyLink: "https://www.veeva.com/",
			startDate: "June 2025",
			endDate: "Sept 2025",
			description: [
				"Contributed to Veeva’s Electronic Data Capture (EDC) application, a platform for collecting, reviewing, and validating clinical study data",
				"Resolved 30+ software defects across the application, improving system stability and reliability",
				"Developed new features to support file uploads, integration of externally sourced data, and ingestion of lab-collected data",
			],
			techStack: [
				"Java",
				"React",
				"JavaScript",
				"SCSS",
				"MySQL",
				"Git",
				"Jira",
			],
		},
		{
			role: "Student Application Developer",
			company: "UC Davis IET",
			companyLink: "https://iet.ucdavis.edu/",
			startDate: "Oct 2023",
			endDate: "Present",
			description: [
				"Worked with students and senior developers to maintain MyInfoVault, an all-encompassing platform for academic personnel",
				"Developed new features in a complex and mature Java Spring web application as per the needs of actual users",
				"Collaborated on an ongoing UI refresh and transitioned existing JSP pages to modern technologies such as React",
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
				"Worked with a team of fellow interns to build & release a full-stack mobile application to gather crowdsourced data for an ongoing project to identify and tag horses in the wild with machine learning",
				"Designed and deployed backend systems for image processing, user management, and app functionality using standard technologies and platforms such as node.js, postgres, Microsoft Azure, Google Firebase, PostgresSQL, Docker, and Kubernetes.",
				"Implemented machining learning models in to the backend to ensure image validity and quality whilst removing unwanted and dangerous content",
			],
			techStack: [
				"Node.js",
				"Postgres",
				"Azure",
				"Firebase",
				"Docker",
				"Kubernetes",
				"Machine Learning",
				"Flutter",
			],
		},
	];

	const projects: ProjectDetails[] = [
		{
			name: "Distributed Deep Rendering and Compositing",
			link: "https://github.com/skewer-project/skewer",
			startDate: "Jan 2026",
			endDate: "Present",
			description: [
				"Building Skewer, an open-source animation suite for distributed deep rendering, compositing, and render orchestration",
				"Developed a custom C++ ray tracing renderer with deep sampling support for per-pixel depth and opacity data",
				"Researched and implemented a deep image compositor for merging multi-layer render outputs efficiently",
				"Designed cloud infrastructure for distributed render jobs across local and remote workers",
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
			link: "https://volare.aksads.tech",
			startDate: "Sep 2024",
			endDate: "May 2025",
			description: [
				"Built Volare, a web-based AI interview coach that helps college students practice with role-specific mock interviews",
				"Developed a TypeScript backend and Next.js frontend for generating interview sessions from job listings and user profiles",
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
			link: "https://b3.aksads.tech",
			startDate: "April 2025",
			endDate: "June 2025",
			description: [
				"Built B3, a smart bike monitoring system for automatic ride tracking, crash detection, and live location sharing",
				"Prototyped embedded hardware with a TI CC3200 SoC, GPS antenna, OLED display, and accelerometer",
				"Used AWS IoT Device Shadows and SNS to synchronize bike state and send crash detection alerts in real time",
				"Developed a tracking web app and backend for ride history, live maps, and remote lock controls",
			],
			techStack: [
				"C++",
				"Go",
				"React",
				"Embedded Systems",
				"AWS IoT",
				"AWS SNS",
			],
		},
	];

	return (
		<main className="pt-24 lg:w-3/4 lg:py-24">
			<section id="about">
				Since I was a kid, I've always been fascinated by technology. I started
				programming in middle school and have been hooked ever since. I'm
				currently a student at UC Davis studying computer science and
				enginnering. I've worked on a variety of projects with different
				technologies and teams. In the past, I've built robots with my{" "}
				<Link href="https://homesteadrobotics.com/" label="robotics team">
					Robotics Team
				</Link>
				, interned at a{" "}
				<Link
					href="https://home.americanwildhorse.org/"
					label="American Wild Horse Campaign"
				>
					large non-profit organization
				</Link>{" "}
				tracking horses in the wild, and contributed to{" "}
				<Link
					href="https://www.veeva.com/products/veeva-edc/"
					label="Veeva Systems"
				>
					Veeva’s Electronic Data Capture (EDC) platform
				</Link>{" "}
				improving clinical data collection and validation processes. I'm
				currently working at my school's{" "}
				<Link href="https://iet.ucdavis.edu/" label="university">
					IT department
				</Link>
				. Outside of my responsibilities, I also enjoy photography. You can find
				some of my favorite shots over on my{" "}
				<Link href="https://photos.aksads.tech/" label="Photo Gallery">
					photo gallery
				</Link>
				.
			</section>

			<section id="experience">
				<ol className="group/list">
					{jobs.map((job) => (
						<ExperienceCard key={`${job.company}-${job.role}`} job={job} />
					))}
				</ol>
			</section>

			<hr className="mx-auto mb-20 mt-2 w-[calc(100%-2rem)] border-0 border-t border-slate-700/60 sm:w-[calc(100%-3rem)] lg:mb-16" />

			<section id="projects">
				<ol className="group/list">
					{projects.map((project) => (
						<ProjectCard key={project.name} project={project} />
					))}
				</ol>
			</section>

			<div className="mt-12 text-center">
				<Link href="/resume.pdf" label="View my full Resume">
					View my full Resume <Arrow />
				</Link>
			</div>
		</main>
	);
}
