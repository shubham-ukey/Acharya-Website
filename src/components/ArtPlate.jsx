/**
 * ArtPlate — original "specimen plate" illustrations (botanical + laboratory motifs).
 * These stand in for photography and can be swapped for real images in the data files at any time.
 */
const TONES = {
	light: {
		bg: "rgb(var(--c-sage-soft))",
		ink: "rgb(var(--c-forest))",
		accent: "rgb(var(--c-gold))",
	},
	sage: {
		bg: "rgb(var(--c-sage) / 0.35)",
		ink: "rgb(var(--c-forest-deep))",
		accent: "rgb(var(--c-forest))",
	},
	paper: {
		bg: "rgb(var(--c-ivory-deep))",
		ink: "rgb(var(--c-forest))",
		accent: "rgb(var(--c-gold))",
	},
	dark: {
		bg: "rgb(var(--c-forest))",
		ink: "rgb(var(--c-ivory))",
		accent: "rgb(var(--c-gold))",
	},
};

const LEAF = "M0 0 C 18 -26 62 -30 92 0 C 62 30 18 26 0 0Z";

function Leaf({ x, y, r, s = 1 }) {
	return (
		<g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
			<path
				d={LEAF}
				fill="currentColor"
				fillOpacity="0.08"
				stroke="currentColor"
				strokeWidth="1.2"
			/>
			<path d="M0 0 L88 0" stroke="currentColor" strokeWidth="0.9" />
			{[18, 34, 50, 66].map((v) => (
				<g key={v} stroke="currentColor" strokeWidth="0.6" opacity="0.7">
					<path d={`M${v} 0 L${v + 12} -${14 - v / 12}`} />
					<path d={`M${v} 0 L${v + 12} ${14 - v / 12}`} />
				</g>
			))}
		</g>
	);
}

function Ruler() {
	return (
		<g stroke="currentColor" opacity="0.55" strokeWidth="1">
			{Array.from({ length: 26 }).map((_, i) => (
				<line
					key={i}
					x1="22"
					x2={i % 5 === 0 ? 40 : 31}
					y1={60 + i * 15}
					y2={60 + i * 15}
				/>
			))}
		</g>
	);
}

function Sprig() {
	const leaves = [
		[200, 405, -20, 1.0],
		[200, 405, -160, 1.0],
		[203, 340, -32, 0.92],
		[203, 340, -148, 0.92],
		[207, 275, -24, 0.8],
		[207, 275, -156, 0.8],
		[209, 215, -36, 0.66],
		[209, 215, -144, 0.66],
		[211, 165, -28, 0.5],
		[211, 165, -152, 0.5],
	];
	return (
		<>
			<Ruler />
			<path
				d="M200 470 C 200 380 198 300 208 215 C 214 165 208 120 212 78"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
			/>
			{leaves.map(([x, y, r, s], i) => (
				<Leaf key={i} x={x} y={y} r={r} s={s} />
			))}
			<g
				stroke="currentColor"
				strokeWidth="1"
				fill="currentColor"
				fillOpacity="0.12"
			>
				{[
					[212, 66],
					[206, 78],
					[218, 80],
					[212, 92],
					[206, 54],
					[219, 56],
				].map(([cx, cy], i) => (
					<circle key={i} cx={cx} cy={cy} r="4.5" />
				))}
			</g>
			<g
				style={{ color: "var(--accent)" }}
				fill="none"
				stroke="currentColor"
				strokeWidth="1"
			>
				<path d="M290 250 L338 250 L360 232" />
				<circle cx="290" cy="250" r="3.5" fill="currentColor" />
			</g>
			<g fill="currentColor" fontFamily="Manrope, sans-serif">
				<text x="322" y="222" fontSize="10" fontStyle="italic" opacity="0.85">
					Ocimum tenuiflorum
				</text>
				<text x="60" y="478" fontSize="9" letterSpacing="1.5" opacity="0.7">
					FIG. 1 SPECIMEN PLATE
				</text>
			</g>
		</>
	);
}

function Rings() {
	const pts = [
		[200, 100],
		[318, 172],
		[292, 330],
		[130, 372],
		[92, 206],
		[246, 218],
	];
	return (
		<>
			<g fill="none" stroke="currentColor" strokeWidth="1">
				{[44, 84, 124, 164, 204].map((r, i) => (
					<circle
						key={r}
						cx="200"
						cy="250"
						r={r}
						strokeDasharray={i % 2 ? "2 5" : undefined}
						opacity={1 - i * 0.14}
					/>
				))}
				<line x1="200" y1="30" x2="200" y2="470" opacity="0.35" />
				<line x1="-20" y1="250" x2="420" y2="250" opacity="0.35" />
			</g>
			<g style={{ color: "var(--accent)" }}>
				<path
					d="M200 86 A164 164 0 0 1 364 250"
					fill="none"
					stroke="currentColor"
					strokeWidth="2.4"
					strokeLinecap="round"
				/>
			</g>
			<g fill="currentColor">
				{pts.map(([x, y], i) => (
					<circle
						key={i}
						cx={x}
						cy={y}
						r={i === 5 ? 5 : 3.2}
						fillOpacity={i === 5 ? 1 : 0.65}
					/>
				))}
				<text
					x="222"
					y="236"
					fontSize="10"
					fontFamily="Manrope, sans-serif"
					opacity="0.85"
				>
					n = 240
				</text>
				<text
					x="60"
					y="478"
					fontSize="9"
					letterSpacing="1.5"
					fontFamily="Manrope, sans-serif"
					opacity="0.7"
				>
					FIG. 2 STUDY POPULATION
				</text>
			</g>
		</>
	);
}

function hex(cx, cy, r) {
	return Array.from({ length: 6 }).map((_, i) => {
		const a = (Math.PI / 3) * i + Math.PI / 6;
		return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
	});
}

function Molecule() {
	const r = 62;
	const a = hex(170, 250, r);
	const b = hex(170 + r * Math.sqrt(3), 250, r);
	const poly = (p) => p.map((q) => q.join(",")).join(" ");
	return (
		<>
			<g
				fill="none"
				stroke="currentColor"
				strokeWidth="1.6"
				strokeLinejoin="round"
			>
				<polygon points={poly(a)} />
				<polygon points={poly(b)} opacity="0.55" />
				<path
					d={`M${a[0][0]} ${a[0][1]} L${a[0][0] + 44} ${a[0][1] - 26} L${a[0][0] + 88} ${a[0][1] - 4}`}
				/>
				<path d={`M${a[3][0]} ${a[3][1]} L${a[3][0] - 44} ${a[3][1] + 26}`} />
				<path d={`M${a[4][0]} ${a[4][1]} L${a[4][0] - 46} ${a[4][1] - 14}`} />
			</g>
			<g style={{ color: "var(--accent)" }} fill="currentColor">
				{[a[0], a[3], a[4]].map(([x, y], i) => (
					<circle key={i} cx={x} cy={y} r="4.5" />
				))}
			</g>
			<g fill="currentColor" fontFamily="Manrope, sans-serif">
				<text x={a[3][0] - 78} y={a[3][1] + 42} fontSize="12" fontWeight="600">
					HO
				</text>
				<text x={a[4][0] - 84} y={a[4][1] - 16} fontSize="12" fontWeight="600">
					OCH₃
				</text>
				<text x="60" y="400" fontSize="11" opacity="0.85">
					C₁₀H₁₂O₂
				</text>
				<text x="60" y="478" fontSize="9" letterSpacing="1.5" opacity="0.7">
					FIG. 3 COMPOUND OF INTEREST
				</text>
			</g>
			<g stroke="currentColor" opacity="0.3" strokeDasharray="2 5">
				<line x1="60" y1="420" x2="340" y2="420" />
			</g>
		</>
	);
}

function Lattice() {
	const pts = [
		[70, 380],
		[120, 366],
		[170, 340],
		[220, 292],
		[270, 236],
		[320, 190],
		[360, 160],
	];
	const line = pts.map((p) => p.join(",")).join(" ");
	return (
		<>
			<g stroke="currentColor" opacity="0.18">
				{Array.from({ length: 8 }).map((_, i) => (
					<line
						key={`h${i}`}
						x1="60"
						x2="350"
						y1={100 + i * 40}
						y2={100 + i * 40}
					/>
				))}
				{Array.from({ length: 8 }).map((_, i) => (
					<line
						key={`v${i}`}
						y1="100"
						y2="380"
						x1={70 + i * 40}
						x2={70 + i * 40}
					/>
				))}
			</g>
			<g stroke="currentColor" strokeWidth="1.4" fill="none">
				<path d="M60 100 V390 H350" />
			</g>
			<path
				d={`M70 400 L120 386 L170 362 L220 318 L270 266 L320 224 L360 196 L360 124 L320 154 L270 202 L220 258 L170 314 L120 346 L70 360Z`}
				fill="var(--accent)"
				fillOpacity="0.16"
			/>
			<polyline
				points={line}
				fill="none"
				stroke="currentColor"
				strokeWidth="2.2"
				strokeLinejoin="round"
				strokeLinecap="round"
			/>
			<g fill="currentColor">
				{pts.map(([x, y], i) => (
					<circle key={i} cx={x} cy={y} r="4" />
				))}
			</g>
			<g fill="currentColor" fontFamily="Manrope, sans-serif">
				<text x="270" y="118" fontSize="11" opacity="0.85">
					p &lt; 0.05
				</text>
				<text x="60" y="478" fontSize="9" letterSpacing="1.5" opacity="0.7">
					FIG. 4 OUTCOME OVER TIME
				</text>
			</g>
		</>
	);
}

const VARIANTS = {
	sprig: Sprig,
	rings: Rings,
	molecule: Molecule,
	lattice: Lattice,
};

export default function ArtPlate({
	variant = "sprig",
	tone = "light",
	className = "",
	label,
}) {
	const t = TONES[tone] || TONES.light;
	const Art = VARIANTS[variant] || Sprig;
	return (
		<svg
			viewBox="0 0 400 500"
			preserveAspectRatio="xMidYMid slice"
			role="img"
			aria-label={label || "Botanical and scientific illustration"}
			className={`h-full w-full ${className}`}
			style={{ color: t.ink, "--accent": t.accent, background: t.bg }}
		>
			<Art />
		</svg>
	);
}
