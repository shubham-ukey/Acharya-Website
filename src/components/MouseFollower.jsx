import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MouseFollower() {
	const cursorRef = useRef(null);
	const dotRef = useRef(null);

	useEffect(() => {
		// Mouse follower only for desktop
		const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

		if (!isDesktop) return;

		const cursor = cursorRef.current;
		const dot = dotRef.current;

		if (!cursor || !dot) return;

		const moveCursor = (e) => {
			gsap.to(cursor, {
				x: e.clientX,
				y: e.clientY,
				duration: 0.8,
				ease: "power3.out",
			});

			gsap.to(dot, {
				x: e.clientX,
				y: e.clientY,
				duration: 0.15,
				ease: "power2.out",
			});
		};

		const handleEnter = () => {
			gsap.to(cursor, {
				scale: 1.6,
				duration: 0.3,
				ease: "power2.out",
			});

			gsap.to(dot, {
				scale: 0,
				duration: 0.2,
			});
		};

		const handleLeave = () => {
			gsap.to(cursor, {
				scale: 1,
				duration: 0.3,
				ease: "power2.out",
			});

			gsap.to(dot, {
				scale: 1,
				duration: 0.2,
			});
		};

		const interactiveElements = document.querySelectorAll(
			"a, button, input, textarea, select"
		);

		window.addEventListener("mousemove", moveCursor);

		interactiveElements.forEach((el) => {
			el.addEventListener("mouseenter", handleEnter);
			el.addEventListener("mouseleave", handleLeave);
		});

		return () => {
			window.removeEventListener("mousemove", moveCursor);

			interactiveElements.forEach((el) => {
				el.removeEventListener("mouseenter", handleEnter);
				el.removeEventListener("mouseleave", handleLeave);
			});
		};
	}, []);

	return (
		<>
			{/* Outer Cursor */}
			<div
				ref={cursorRef}
				className="
					pointer-events-none
					fixed
					left-0
					top-0
					z-[9999]
					hidden
					lg:block
					h-9
					w-9
					-translate-x-1/2
					-translate-y-1/2
					rounded-full
					border
					border-gold/70
					bg-gold/5
					backdrop-blur-[2px]
				"
			/>

			{/* Center Dot */}
			<div
				ref={dotRef}
				className="
					pointer-events-none
					fixed
					left-0
					top-0
					z-[10000]
					hidden
					lg:block
					h-1.5
					w-1.5
					-translate-x-1/2
					-translate-y-1/2
					rounded-full
					bg-gold
				"
			/>
		</>
	);
}
