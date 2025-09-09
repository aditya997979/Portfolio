import { motion } from 'framer-motion';

export default function Navbar() {
	return (
		<motion.nav
			className="fixed inset-x-0 top-4 z-50 mx-auto w-[min(92%,1100px)] rounded-full border border-foreground/10 bg-white/60 px-5 py-3 backdrop-blur"
			initial={{ y: -20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6 }}
		>
			<ul className="flex items-center justify-center gap-6 text-sm">
				<li><a href="#about" className="hover:text-accent">About</a></li>
				<li><a href="#projects" className="hover:text-accent">Projects</a></li>
				<li><a href="#contact" className="hover:text-accent">Connect</a></li>
			</ul>
		</motion.nav>
	);
}



