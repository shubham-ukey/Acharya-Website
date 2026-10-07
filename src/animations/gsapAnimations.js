import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =========================================
   SETTINGS
========================================= */

/**
 * true  -> scroll up karne par animation reverse hoga,
 *          neeche aane par dobara chalega
 * false -> animation sirf ek baar chalega
 */
const REPLAY = true;

const EASE = "power3.out";
const EASE_SOFT = "expo.out";

const q = (scope, sel) => gsap.utils.toArray(sel, scope);

const isDesktop = () =>
	typeof window !== "undefined" && window.innerWidth >= 1024;

/** Common ScrollTrigger config */
const trigger = (el, start = "top 88%", extra = {}) => ({
	trigger: el,
	start,
	once: !REPLAY,
	toggleActions: "play none none reverse",
	...extra,
});

/* =========================================
   HERO
========================================= */

/** Opening sequence: label, headline words, copy, buttons, artwork. */
export function heroIntro(scope) {
	if (
		!q(scope, "[data-word]").length &&
		!q(scope, "[data-hero-art]").length
	) {
		return;
	}

	const tl = gsap.timeline({ defaults: { ease: EASE_SOFT } });

	const label = q(scope, "[data-hero-label]");
	const words = q(scope, "[data-word]");
	const fade = q(scope, "[data-hero-fade]");
	const art = q(scope, "[data-hero-art]");
	const artInner = q(scope, "[data-hero-art-inner]");

	if (art.length) {
		tl.from(art, { opacity: 0, duration: 1.4 }, 0);
	}

	if (artInner.length) {
		tl.from(artInner, { scale: 1.15, duration: 2.2 }, 0);
	}

	if (label.length) {
		tl.from(label, { opacity: 0, y: 14, duration: 0.9 }, 0.2);
	}

	if (words.length) {
		tl.from(
			words,
			{ yPercent: 115, duration: 1.1, stagger: 0.07 },
			label.length ? "-=0.55" : 0.2,
		);
	}

	if (fade.length) {
		tl.from(
			fade,
			{
				opacity: 0,
				y: 20,
				duration: 0.9,
				stagger: 0.1,
				clearProps: "transform,opacity",
			},
			"-=0.6",
		);
	}

	/* Intro khatam hone ke baad scroll effect (conflict se bachne ke liye) */
	tl.add(() => {
		const hero = art[0]?.closest("section");

		if (!hero) return;

		/* Background image scroll par halka zoom + neeche drift */
		if (artInner.length) {
			gsap.to(artInner, {
				scale: 1.1,
				yPercent: 4,
				ease: "none",
				scrollTrigger: {
					trigger: hero,
					start: "top top",
					end: "bottom top",
					scrub: true,
				},
			});
		}

		/* Hero text scroll par halka upar jaake fade hota hai (desktop) */
		const content = hero.querySelector(".container-x");

		if (content && isDesktop()) {
			gsap.to(content, {
				yPercent: -8,
				opacity: 0.2,
				ease: "none",
				scrollTrigger: {
					trigger: hero,
					start: "40% top",
					end: "bottom top",
					scrub: true,
				},
			});
		}
	});
}

/* =========================================
   GENERIC SCROLL REVEALS
========================================= */

/**
 * [data-reveal]
 * Optional:
 *   data-reveal="left" | "right" | "up" (default up)
 *   data-reveal-delay="0.2"
 */
export function revealOnScroll(scope) {
	q(scope, "[data-reveal]").forEach((el) => {
		const dir = el.getAttribute("data-reveal");
		const delay = parseFloat(el.getAttribute("data-reveal-delay")) || 0;
		const dist = isDesktop() ? 50 : 24;

		const from = { opacity: 0 };

		if (dir === "left") from.x = -dist;
		else if (dir === "right") from.x = dist;
		else from.y = dist;

		gsap.fromTo(el, from, {
			opacity: 1,
			x: 0,
			y: 0,
			duration: 1.1,
			delay,
			ease: EASE_SOFT,
			clearProps: "transform,opacity",
			scrollTrigger: trigger(el, "top 88%"),
		});
	});
}

/** Children of [data-stagger] enter one after another. */
export function staggerOnScroll(scope) {
	q(scope, "[data-stagger]").forEach((parent) => {
		const kids = Array.from(parent.children);

		if (!kids.length) return;

		gsap.fromTo(
			kids,
			{ opacity: 0, y: 36 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				stagger: { each: 0.12, from: "start" },
				ease: EASE_SOFT,
				clearProps: "transform,opacity",
				scrollTrigger: trigger(parent, "top 85%"),
			},
		);
	});
}

/** Images wipe open + inner image slowly zooms out. */
export function imageReveal(scope) {
	q(scope, "[data-image-reveal]").forEach((el) => {
		const img = el.querySelector("img, svg, [data-art]") || el.firstElementChild;

		const tl = gsap.timeline({
			scrollTrigger: trigger(el, "top 85%"),
		});

		tl.fromTo(
			el,
			{ clipPath: "inset(0 0 100% 0)" },
			{
				clipPath: "inset(0 0 0% 0)",
				duration: 1.3,
				ease: "power4.inOut",
				clearProps: "clipPath",
			},
		);

		if (img) {
			tl.fromTo(
				img,
				{ scale: 1.25 },
				{ scale: 1, duration: 1.8, ease: EASE_SOFT },
				0,
			);
		}
	});
}

/** Optional section reveal. */
export function sectionReveal(scope) {
	q(scope, "[data-section-reveal]").forEach((el) => {
		gsap.fromTo(
			el,
			{ opacity: 0, y: 40 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: EASE_SOFT,
				clearProps: "transform,opacity",
				scrollTrigger: trigger(el, "top 90%"),
			},
		);
	});
}

/* =========================================
   PARALLAX + PROGRESS
========================================= */

/**
 * [data-parallax="0.15"]
 * Element scroll ke saath halka upar-neeche move hota hai.
 * Parent par overflow-hidden rakho (image wrapper me).
 */
export function parallax(scope) {
	if (!isDesktop()) return;

	q(scope, "[data-parallax]").forEach((el) => {
		const amt = parseFloat(el.getAttribute("data-parallax")) || 0.12;

		gsap.set(el, { scale: 1 + amt * 2 + 0.04 });

		gsap.fromTo(
			el,
			{ yPercent: -amt * 100 },
			{
				yPercent: amt * 100,
				ease: "none",
				scrollTrigger: {
					trigger: el.parentElement,
					start: "top bottom",
					end: "bottom top",
					scrub: true,
				},
			},
		);
	});
}

/** Top par progress bar: <div data-scroll-progress className="fixed ... origin-left scale-x-0" /> */
export function scrollProgress(scope) {
	const bar = document.querySelector("[data-scroll-progress]");

	if (!bar) return;

	gsap.fromTo(
		bar,
		{ scaleX: 0 },
		{
			scaleX: 1,
			ease: "none",
			transformOrigin: "left center",
			scrollTrigger: {
				trigger: document.documentElement,
				start: "top top",
				end: "bottom bottom",
				scrub: 0.3,
			},
		},
	);
}

/* =========================================
   ROADMAP TIMELINE
========================================= */

/**
 * Line scroll ke saath draw hoti hai.
 * Stages ek ke baad ek smoothly aate hain.
 */
export function drawTimeline(scope) {
	const wrap = q(scope, "[data-timeline]")[0];

	if (!wrap) return;

	const stages = q(wrap, "[data-stage]");
	const lines = q(wrap, "[data-line]");

	/* 1. PROGRESS FILL */
	lines.forEach((line) => {
		const vertical = line.hasAttribute("data-vertical");

		gsap.fromTo(
			line,
			vertical
				? { scaleY: 0, transformOrigin: "top center" }
				: { scaleX: 0, transformOrigin: "left center" },
			{
				...(vertical ? { scaleY: 1 } : { scaleX: 1 }),
				ease: "none",
				scrollTrigger: {
					trigger: wrap,
					start: "top 65%",
					end: "bottom 60%",
					scrub: 0.6,
				},
			},
		);
	});

	/* 2. STAGES ACTIVATE JAB LINE PAHUNCHE */
	stages.forEach((stage) => {
		const dot = stage.querySelector("[data-stage-dot]");
		const body = stage.querySelector("[data-stage-body]") || stage;

		/* Starting state: dim */
		gsap.set(body, { opacity: 0.35, y: 16 });

		if (dot) {
			gsap.set(dot, { scale: 0.8, backgroundColor: "transparent" });
		}

		const activate = () => {
			gsap.to(body, {
				opacity: 1,
				y: 0,
				duration: 0.7,
				ease: "power3.out",
				overwrite: true,
			});

			if (dot) {
				gsap.to(dot, {
					scale: 1.15,
					backgroundColor: "#b8923a", // apna gold/forest color yahan daalo
					duration: 0.5,
					ease: "back.out(2)",
					overwrite: true,
				});
			}

			stage.classList.add("is-active");
		};

		const deactivate = () => {
			gsap.to(body, {
				opacity: 0.35,
				y: 16,
				duration: 0.5,
				ease: "power2.out",
				overwrite: true,
			});

			if (dot) {
				gsap.to(dot, {
					scale: 0.8,
					backgroundColor: "transparent",
					duration: 0.4,
					overwrite: true,
				});
			}

			stage.classList.remove("is-active");
		};

		ScrollTrigger.create({
			trigger: stage,
			start: "top 65%", // line ke start point ke saath match
			onEnter: activate,
			onLeaveBack: deactivate,
		});
	});
}
/* =========================================
   WHY WORK WITH US
========================================= */

/**
 * Har pillar apne scroll position par chalta hai.
 * Image alternate side se aati hai, content ke children stagger hote hain,
 * aur image ke andar halka parallax chalta hai.
 */
export function whyWorkWithUsAnimation(scope) {
	const pillars = q(scope, ".why-pillar");

	if (!pillars.length) return;

	const dist = isDesktop() ? 100 : 30;

	pillars.forEach((pillar, index) => {
		const image = pillar.querySelector(".why-pillar-image");
		const content = pillar.querySelector(".why-pillar-content");
		const img = pillar.querySelector(".why-pillar-image img");
		const fromLeft = index % 2 === 0;

		const tl = gsap.timeline({
			scrollTrigger: trigger(pillar, "top 82%"),
		});

		if (image) {
			tl.fromTo(
				image,
				{ x: fromLeft ? -dist : dist, opacity: 0 },
				{
					x: 0,
					opacity: 1,
					duration: 1.4,
					ease: EASE_SOFT,
					clearProps: "transform,opacity",
				},
				0,
			);
		}

		if (content) {
			tl.fromTo(
				Array.from(content.children),
				{ y: 28, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 1,
					stagger: 0.12,
					ease: EASE_SOFT,
					clearProps: "transform,opacity",
				},
				0.2,
			);
		}

		/* Image ke andar scroll parallax (desktop) */
		if (img && isDesktop()) {
			gsap.fromTo(
				img,
				{ yPercent: -6, scale: 1.12 },
				{
					yPercent: 6,
					scale: 1.12,
					ease: "none",
					scrollTrigger: {
						trigger: pillar,
						start: "top bottom",
						end: "bottom top",
						scrub: true,
					},
				},
			);
		}
	});
}

/* =========================================
   DOCTORS / FOUNDERS
========================================= */

/** Cards viewport me aate hi, ek ke baad ek, alternate side se. */
export function doctorsAnimation(scope) {
	const sections = q(scope, ".doctors-section, .founders-section");

	if (!sections.length) return;

	const dist = isDesktop() ? 70 : 24;

	sections.forEach((section) => {
		const cards = q(section, ".doctor-card, .founder-card");

		cards.forEach((card, index) => {
			const fromLeft = index % 2 === 0;

			gsap.fromTo(
				card,
				{ x: fromLeft ? -dist : dist, y: 20, opacity: 0 },
				{
					x: 0,
					y: 0,
					opacity: 1,
					duration: 1.3,
					ease: EASE_SOFT,
					clearProps: "transform,opacity",
					scrollTrigger: trigger(card, "top 85%"),
				},
			);
		});
	});
}

/* =========================================
   INIT + HOOK
========================================= */

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
	parallax(scope);
	scrollProgress(scope);

	/* Images load hone ke baad positions dobara calculate ho */
	ScrollTrigger.refresh();

	const onLoad = () => ScrollTrigger.refresh();
	window.addEventListener("load", onLoad, { once: true });
}

/**
 * Scopes GSAP work to a container, cleans up on unmount,
 * and only runs when the visitor has NOT requested reduced motion.
 */
export function useGsapScope(setup = initPageAnimations, deps = []) {
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
		{ opacity: 0, y: 14 },
		{
			opacity: 1,
			y: 0,
			duration: 0.6,
			ease: "power2.out",
			clearProps: "transform,opacity",
		},
	);
}

export { gsap, ScrollTrigger };