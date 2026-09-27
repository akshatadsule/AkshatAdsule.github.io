"use client";

import { useEffect, useRef } from "react";

const TRACKING_QUERY =
	"(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

export function Backdrop() {
	const glowRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const media = window.matchMedia(TRACKING_QUERY);
		let frame: number | null = null;
		let pointerX = 0;
		let pointerY = 0;

		const moveGlow = () => {
			frame = null;
			if (glowRef.current) {
				glowRef.current.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
			}
		};

		const onPointerMove = (event: PointerEvent) => {
			pointerX = event.clientX;
			pointerY = event.clientY;
			if (frame === null) frame = window.requestAnimationFrame(moveGlow);
		};

		const updateTracking = () => {
			if (media.matches) {
				window.addEventListener("pointermove", onPointerMove, {
					passive: true,
				});
			} else {
				window.removeEventListener("pointermove", onPointerMove);
				if (frame !== null) window.cancelAnimationFrame(frame);
				frame = null;
			}
		};

		updateTracking();
		media.addEventListener("change", updateTracking);
		return () => {
			media.removeEventListener("change", updateTracking);
			window.removeEventListener("pointermove", onPointerMove);
			if (frame !== null) window.cancelAnimationFrame(frame);
		};
	}, []);

	return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}
