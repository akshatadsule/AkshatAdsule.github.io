import { Link } from "./common/link";
import { Arrow } from "./icons/arrow";
import { TechBadge } from "./tech-badge";

interface TimelineCardDetails {
	title: string;
	subtitle?: string;
	link: string;
	linkLabel: string;
	startDate: string;
	endDate: string;
	description: React.ReactNode;
	techStack: string[];
}

export interface JobDetails {
	role: string;
	company: string;
	companyLink: string;
	startDate: string;
	endDate: string;
	description: React.ReactNode;
	techStack: string[];
}

export interface ProjectDetails {
	name: string;
	link: string;
	startDate: string;
	endDate: string;
	description: React.ReactNode;
	techStack: string[];
}

interface TimelineCardProps {
	item: TimelineCardDetails;
}

interface ExperienceCardProps {
	job: JobDetails;
}

interface ProjectCardProps {
	project: ProjectDetails;
}

function TimelineCard({ item }: TimelineCardProps) {
	return (
		<li className="mb-12">
			<div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 w-full md:w-auto text-center md:text-left lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
				{/* shadow */}
				<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
				{/* Time */}
				<header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2">
					{item.startDate} - {item.endDate}
				</header>
				{/* desc */}
				<div className="z-10 sm:col-span-6">
					<h3>
						{item.subtitle ? (
							<>
								<span className="text-sm font-semibold text-slate-200">
									{item.title}
								</span>
								<span className="block text-lg font-semibold text-slate-100">
									<Link href={item.link} label={item.linkLabel}>
										{item.subtitle}
										<Arrow />
									</Link>
								</span>
							</>
						) : (
							<span className="block text-lg font-semibold text-slate-100">
								<Link href={item.link} label={item.linkLabel}>
									{item.title}
									<Arrow />
								</Link>
							</span>
						)}
					</h3>

					<p className="mt-2 text-sm leading-normal text-left max-w-full">
						{item.description}
					</p>

					{/* Tech used */}
					<ul className="mt-2 flex flex-wrap">
						{item.techStack.map((tech) => (
							<TechBadge key={`${item.title}-${tech}`}>{tech}</TechBadge>
						))}
					</ul>
				</div>
			</div>
		</li>
	);
}

export function ExperienceCard({ job }: ExperienceCardProps) {
	return (
		<TimelineCard
			item={{
				title: job.role,
				subtitle: job.company,
				link: job.companyLink,
				linkLabel: job.company,
				startDate: job.startDate,
				endDate: job.endDate,
				description: job.description,
				techStack: job.techStack,
			}}
		/>
	);
}

export function ProjectCard({ project }: ProjectCardProps) {
	return (
		<TimelineCard
			item={{
				title: project.name,
				link: project.link,
				linkLabel: project.name,
				startDate: project.startDate,
				endDate: project.endDate,
				description: project.description,
				techStack: project.techStack,
			}}
		/>
	);
}
