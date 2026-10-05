
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const q = (scope, sel) => gsap.utils.toArray(sel, scope);

/** Opening sequence: label, headline words, supporting copy, buttons, artwork. */
export function heroIntro(scope) {
	if (
		!q(scope, "[data-word]").length &&
		!q(scope, "[data-hero-art]").length
	)
		return;

	const tl = gsap.timeline({
		defaults: { ease: "power3.out" },
	});

	const label = q(scope, "[data-hero-label]");
	const words = q(scope, "[data-word]");
	const fade = q(scope, "[data-hero-fade]");
	const art = q(scope, "[data-hero-art]");

	if (label.length) {
		tl.from(label, {
			opacity: 0,
			y: 12,
			duration: 0.6,
		});
	}

	if (words.length) {
		tl.from(
			words,
			{
				yPercent: 110,
				duration: 0.95,
				stagger: 0.06,
			},
			label.length ? "-=0.3" : 0,
		);
	}

	if (fade.length) {
		tl.from(
			fade,
			{
				opacity: 0,
				y: 18,
				duration: 0.8,
				stagger: 0.1,
			},
			"-=0.5",
		);
	}

	if (art.length) {
		tl.from(
			art,
			{
				opacity: 0,
				y: 40,
				duration: 1.2,
			},
			0.15,
		);

		tl.from(
			q(scope, "[data-hero-art-inner]"),
			{
				scale: 1.12,
				duration: 1.6,
			},
			0.15,
		);
	}
}

/** Gentle scroll reveal for anything tagged data-reveal. */
export function revealOnScroll(scope) {
	q(scope, "[data-reveal]").forEach((el) => {
		gsap.from(el, {
			opacity: 0,
			y: 24,
			duration: 0.9,
			ease: "power3.out",
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
				once: true,
			},
		});
	});
}

/** Children of [data-stagger] enter one after another. */
export function staggerOnScroll(scope) {
	q(scope, "[data-stagger]").forEach((parent) => {
		const kids = Array.from(parent.children);

		if (!kids.length) return;

		gsap.from(kids, {
			opacity: 0,
			y: 28,
			duration: 0.85,
			stagger: 0.12,
			ease: "power3.out",
			scrollTrigger: {
				trigger: parent,
				start: "top 85%",
				once: true,
			},
		});
	});
}

/** Images wipe open as they scroll into view. */
export function imageReveal(scope) {
	q(scope, "[data-image-reveal]").forEach((el) => {
		gsap.from(el, {
			clipPath: "inset(0 0 100% 0)",
			duration: 1.2,
			ease: "power3.inOut",
			scrollTrigger: {
				trigger: el,
				start: "top 88%",
				once: true,
			},
		});
	});
}

/** Timeline line draws with scroll; stages light up in sequence. */
export function drawTimeline(scope) {
	const wrap = q(scope, "[data-timeline]")[0];

	if (!wrap) return;

	q(wrap, "[data-line]").forEach((line) => {
		const vertical = line.hasAttribute("data-vertical");

		gsap.fromTo(
			line,
			vertical ? { scaleY: 0 } : { scaleX: 0 },
			{
				...(vertical ? { scaleY: 1 } : { scaleX: 1 }),
				ease: "none",
				scrollTrigger: {
					trigger: wrap,
					start: "top 75%",
					end: "bottom 65%",
					scrub: 0.6,
				},
			},
		);
	});

	gsap.from(q(wrap, "[data-stage]"), {
		opacity: 0,
		y: 24,
		duration: 0.8,
		stagger: 0.25,
		ease: "power3.out",
		scrollTrigger: {
			trigger: wrap,
			start: "top 80%",
			once: true,
		},
	});
}

/** Optional section reveal. */
export function sectionReveal(scope) {
	q(scope, "[data-section-reveal]").forEach((el) => {
		gsap.from(el, {
			opacity: 0,
			y: 40,
			duration: 0.9,
			ease: "power3.out",
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
				once: true,
			},
		});
	});
}

export function initPageAnimations(scope) {
	heroIntro(scope);
	revealOnScroll(scope);
	staggerOnScroll(scope);
	imageReveal(scope);
	drawTimeline(scope);
	sectionReveal(scope);

	// Make sure ScrollTrigger recalculates positions
	ScrollTrigger.refresh();
}

/**
 * Scopes GSAP work to a container, cleans up on unmount,
 * and only runs when the visitor has NOT requested reduced motion.
 */
export function useGsapScope(
	setup = initPageAnimations,
	deps = [],
) {
	const ref = useRef(null);

	useLayoutEffect(() => {
		const mm = gsap.matchMedia();

		mm.add(
			"(prefers-reduced-motion: no-preference)",
			() => {
				if (ref.current) {
					setup(ref.current);
				}
			},
			ref,
		);

		return () => mm.revert();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, deps);

	return ref;
}

/** Soft fade for route changes. */
export function pageEnter(el) {
	if (
		!el ||
		window.matchMedia("(prefers-reduced-motion: reduce)").matches
	) {
		return;
	}

	gsap.fromTo(
		el,
		{
			opacity: 0,
			y: 14,
		},
		{
			opacity: 1,
			y: 0,
			duration: 0.55,
			ease: "power2.out",
			clearProps: "transform,opacity",
		},
	);
}

export { gsap, ScrollTrigger };
