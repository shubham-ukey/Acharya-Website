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
	) {
		return;
	}

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
			duration: 0.9,
		});
	}

	if (words.length) {
		tl.from(
			words,
			{
				yPercent: 110,
				duration: 0.95,
				stagger: 0.09,
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
				duration: 0.9,
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

/**
 * Roadmap timeline
 *
 * Line draws with scroll.
 * Stages appear slowly and smoothly one after another.
 */
export function drawTimeline(scope) {
	const wrap = q(scope, "[data-timeline]")[0];

	if (!wrap) return;

	/* Timeline line animation */
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
					start: "top 80%",
					end: "bottom 65%",
					scrub: 0.9,
				},
			},
		);
	});

	/* Roadmap stages - slower animation */
	const stages = q(wrap, "[data-stage]");

	if (stages.length) {
		gsap.fromTo(
			stages,
			{
				opacity: 0,
				y: 50,
			},
			{
				opacity: 1,
				y: 0,
				duration: 1.3,
				stagger: 0.4,
				ease: "power2.out",
				scrollTrigger: {
					trigger: wrap,
					start: "top 82%",
					once: true,
				},
			},
		);
	}
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

/**
 * Why Work With Us
 *
 * Images alternate direction:
 * 01 -> left to right
 * 02 -> right to left
 * 03 -> left to right
 * 04 -> right to left
 *
 * Animation starts when each card enters the viewport.
 */
export function whyWorkWithUsAnimation(scope) {
	const pillars = q(scope, ".why-pillar");

	if (!pillars.length) return;

	pillars.forEach((pillar, index) => {
		const image = pillar.querySelector(".why-pillar-image");
		const content = pillar.querySelector(".why-pillar-content");

		const fromLeft = index % 2 === 0;

		/* IMAGE ANIMATION */
		if (image) {
			gsap.fromTo(
				image,
				{
					x: fromLeft ? -120 : 120,
					opacity: 0,
				},
				{
					x: 0,
					opacity: 1,
					duration: 2,
					ease: "power3.out",
					scrollTrigger: {
						trigger: pillar,
						start: "top 85%",
						once: true,
					},
				},
			);
		}

		/* CONTENT ANIMATION */
		if (content) {
			gsap.fromTo(
				content,
				{
					x: fromLeft ? 50 : -50,
					opacity: 0,
				},
				{
					x: 0,
					opacity: 1,
					duration: 0.95,
					delay: 0.15,
					ease: "power3.out",
					scrollTrigger: {
						trigger: pillar,
						start: "top 85%",
						once: true,
					},
				},
			);
		}
	});
}

/**
 * Doctors / Founders
 *
 * Cards alternate from left and right.
 *
 * 01 -> left to right
 * 02 -> right to left
 * 03 -> left to right
 * 04 -> right to left
 */
export function doctorsAnimation(scope) {
	/*
	 * Supports both:
	 * .doctors-section
	 * .founders-section
	 */
	const sections = q(
		scope,
		".doctors-section, .founders-section",
	);

	if (!sections.length) return;

	sections.forEach((section) => {
		/*
		 * Supports both:
		 * .doctor-card
		 * .founder-card
		 */
		const cards = q(
			section,
			".doctor-card, .founder-card",
		);

		if (!cards.length) return;

		cards.forEach((card, index) => {
			const fromLeft = index % 2 === 0;

			gsap.fromTo(
				card,
				{
					x: fromLeft ? -80 : 80,
					opacity: 0,
				},
				{
					x: 0,
					opacity: 1,
					duration: 2,
					delay: index * 0.15,
					ease: "power3.out",
					scrollTrigger: {
						trigger: card,
						start: "top 80%",
						once: true,
					},
				},
			);
		});
	});
}

/** Initialize all page animations. */
export function initPageAnimations(scope) {
	heroIntro(scope);
	revealOnScroll(scope);
	staggerOnScroll(scope);
	imageReveal(scope);
	drawTimeline(scope);
	sectionReveal(scope);
	whyWorkWithUsAnimation(scope);
	doctorsAnimation(scope);

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