"use client";

import { useEffect, useRef, useState } from "react";
import { Aperture } from "./icons/aperture";
import { Github } from "./icons/github";
import { LinkedIn } from "./icons/linkedin";

const navItems = [
	{ id: "about", label: "About" },
	{ id: "experience", label: "Experience" },
	{ id: "projects", label: "Projects" },
];

export function Header() {
	const [activeSection, setActiveSection] = useState("about");
	const frameRef = useRef<number | null>(null);

	useEffect(() => {
		const sections = navItems
			.map((item) => document.getElementById(item.id))
			.filter((section): section is HTMLElement => section !== null);

		if (sections.length === 0) {
			return;
		}

		const updateActiveSection = () => {
			frameRef.current = null;

			const scrollY = window.scrollY;
			const viewportHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;
			const readingLine = scrollY + Math.min(viewportHeight * 0.35, 260);
			const isAtPageEnd =
				scrollY + viewportHeight >=
				documentHeight - Math.max(24, viewportHeight * 0.05);

			let nextActiveSection = sections[0].id;

			if (isAtPageEnd) {
				nextActiveSection = sections[sections.length - 1].id;
			} else {
				for (const section of sections) {
					const sectionTop = section.getBoundingClientRect().top + scrollY;

					if (sectionTop <= readingLine) {
						nextActiveSection = section.id;
					} else {
						break;
					}
				}
			}

			setActiveSection((currentSection) =>
				currentSection === nextActiveSection
					? currentSection
					: nextActiveSection,
			);
		};

		const queueActiveSectionUpdate = () => {
			if (frameRef.current !== null) {
				return;
			}

			frameRef.current = window.requestAnimationFrame(updateActiveSection);
		};

		updateActiveSection();

		window.addEventListener("scroll", queueActiveSectionUpdate, {
			passive: true,
		});
		window.addEventListener("resize", queueActiveSectionUpdate);
		window.addEventListener("hashchange", queueActiveSectionUpdate);

		return () => {
			if (frameRef.current !== null) {
				window.cancelAnimationFrame(frameRef.current);
			}

			window.removeEventListener("scroll", queueActiveSectionUpdate);
			window.removeEventListener("resize", queueActiveSectionUpdate);
			window.removeEventListener("hashchange", queueActiveSectionUpdate);
		};
	}, []);

	return (
		<header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
			<div>
				<h1>Akshat Adsule</h1>
				<h2>Software engineer & guy with a camera</h2>
				<p>Associate software engineer at Veeva</p>
				<ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
					<li className="mr-5 shrink-0">
						<Github />
					</li>
					<li className="mr-5 shrink-0">
						<LinkedIn />
					</li>
					<li className="mr-5 shrink-0">
						<Aperture />
					</li>
				</ul>
				<nav className="nav hidden lg:block">
					<ul className="mt-16 w-max">
						{navItems.map((item) => (
							<li key={item.id}>
								<a
									className="group flex items-center py-3"
									href={`#${item.id}`}
									onClick={() => setActiveSection(item.id)}
									aria-current={
										activeSection === item.id ? "location" : undefined
									}
								>
									<span
										className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none ${
											activeSection === item.id
												? "w-16 bg-slate-200"
												: "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"
										}`}
									></span>
									<span
										className={`nav-text text-xs font-bold uppercase tracking-widest ${
											activeSection === item.id
												? "text-slate-200"
												: "text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
										}`}
									>
										{item.label}
									</span>
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}
