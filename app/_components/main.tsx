import { jobs, projects } from "../content";
import { Link } from "./common/link";
import { ExperienceCard, ProjectCard } from "./experience-card";
import { Arrow } from "./icons/arrow";

export function MainContent() {
	return (
		<main className="pt-8 lg:w-3/4 lg:py-24">
			<section id="about">
				<h2 className="sr-only">About Akshat Adsule</h2>
				I'm a software engineer and UC Davis computer science and engineering
				graduate, working at{" "}
				<Link href="https://www.veeva.com/products/clinical-data-management/">
					Veeva
				</Link>{" "}
				to build clinical data management software. My work spans production
				platforms, cloud systems, and hands-on engineering projects, including{" "}
				<Link href="https://github.com/skewer-project/skewer">
					distributed deep rendering and compositing
				</Link>
				, where I'm building open-source tools for rendering, and orchestrating
				animation workloads. Before that, I built robots with my{" "}
				<Link href="https://homesteadrobotics.com/">robotics team</Link>,
				launched an app at a{" "}
				<Link href="https://home.americanwildhorse.org/">
					large non-profit organization
				</Link>{" "}
				for tracking horses in the wild, and worked at my school's{" "}
				<Link href="https://iet.ucdavis.edu/">IT department</Link>. Outside of
				software, I spend a lot of time with photography; some of my favorite
				shots live in my{" "}
				<Link href="https://photos.adsule.com/">photo gallery</Link>.
			</section>

			<section id="experience">
				<h2 className="sr-only">Software engineering experience</h2>
				<ol className="group/list">
					{jobs.map((job) => (
						<ExperienceCard key={`${job.company}-${job.role}`} job={job} />
					))}
				</ol>
			</section>

			<hr className="mx-auto mb-20 mt-2 w-[calc(100%-2rem)] border-0 border-t border-slate-700/60 sm:w-[calc(100%-3rem)] lg:mb-16" />

			<section id="projects">
				<h2 className="sr-only">Software projects</h2>
				<ol className="group/list">
					{projects.map((project) => (
						<ProjectCard key={project.name} project={project} />
					))}
				</ol>
			</section>

			<div className="mt-12 text-center">
				<Link href="/resume.pdf">
					View my full résumé
					<Arrow />
				</Link>
			</div>
		</main>
	);
}
