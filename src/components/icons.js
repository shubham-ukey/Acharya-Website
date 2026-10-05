import { FileText, Users, Presentation, Sprout, Microscope, Leaf, HeartHandshake, Target, Lightbulb, ShieldCheck, FlaskConical, Search, Handshake, BadgeCheck, PackageCheck } from 'lucide-react';

/** Maps string keys used in data files to icon components. */
export const iconMap = { FileText, Users, Presentation, Sprout, Microscope, Leaf, HeartHandshake, Target, Lightbulb, ShieldCheck, FlaskConical, Search, Handshake, BadgeCheck, PackageCheck };
export const getIcon = (key) => iconMap[key] || Leaf;
