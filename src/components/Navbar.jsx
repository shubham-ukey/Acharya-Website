import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";

export const navLinks = [
	{ to: "/", label: "Home" },
	{ to: "/about", label: "About" },
	{ to: "/services", label: "Services" },
	{ to: "/insights", label: "Insights" },
	{ to: "/support-us", label: "Support Us" },
	{ to: "/contact", label: "Contact" },
];

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const { pathname } = useLocation();

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();

		window.addEventListener("scroll", onScroll, { passive: true });

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	useEffect(() => {
		document.body.style.overflow = "";

		const onKey = (e) => {
			if (e.key === "Escape") {
				setOpen(false);
			}
		};

		window.addEventListener("keydown", onKey);

		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onKey);
		};
	}, []);

	const solid = scrolled || open;

	const linkCls = ({ isActive }) =>
		`relative py-2 text-sm font-medium transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-gold after:transition-all after:duration-300 ${
			isActive
				? "text-forest after:w-full"
				: "text-charcoal/70 after:w-0 hover:text-forest hover:after:w-full"
		}`;

	return (
		<header
			className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
				solid
					? "border-b border-forest/10 bg-ivory/95 shadow-soft backdrop-blur-md"
					: "bg-ivory/95 shadow-soft backdrop-blur-md lg:bg-transparent lg:shadow-none lg:backdrop-blur-none"
			}`}
		>
			<div
				className={`container-x flex items-center justify-between transition-all duration-300 ${
					scrolled ? "h-16" : "h-20"
				}`}
			>
				<Logo />

				{/* Desktop Navigation */}
				<nav
					aria-label="Primary"
					className="hidden items-center gap-8 lg:flex"
				>
					{navLinks.map((l) => (
						<NavLink
							key={l.to}
							to={l.to}
							end={l.to === "/"}
							className={linkCls}
						>
							{l.label}
						</NavLink>
					))}
				</nav>

				{/* Desktop Consultation */}
				<div className="hidden lg:block">
					<Button to="/contact" className="!px-5 !py-3">
						Consultation
					</Button>
				</div>

				{/* Mobile Menu Button */}
				<button
					type="button"
					className="inline-flex h-11 w-11 items-center justify-center rounded-full text-forest transition-colors hover:bg-forest/10 lg:hidden"
					aria-label={open ? "Close menu" : "Open menu"}
					aria-expanded={open}
					aria-controls="mobile-menu"
					onClick={() => setOpen((v) => !v)}
				>
					{open ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{/* Mobile Expandable Menu */}
			<div
				id="mobile-menu"
				className={`overflow-hidden border-t border-forest/10 bg-ivory transition-all duration-300 lg:hidden ${
					open
						? "max-h-[500px] opacity-100"
						: "max-h-0 opacity-0"
				}`}
			>
				<div className="container-x py-5">
					<nav
						aria-label="Mobile"
						className="flex flex-col"
					>
						{navLinks.map((l) => (
							<NavLink
								key={l.to}
								to={l.to}
								end={l.to === "/"}
								className={({ isActive }) =>
									`border-b border-forest/10 py-3.5 text-lg font-medium transition-colors ${
										isActive
											? "text-forest"
											: "text-charcoal/75 hover:text-forest"
									}`
								}
							>
								{l.label}
							</NavLink>
						))}
					</nav>

					<Button
						to="/contact"
						className="mt-5 w-full !py-3.5"
					>
						Consultation
					</Button>
				</div>
			</div>
		</header>
	);
}

