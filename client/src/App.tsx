import { motion, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import SectionDivider from './components/SectionDivider';
import About from './components/About';
import Projects from './components/Projects';

export default function App() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.2 });
	const [showEmailOptions, setShowEmailOptions] = useState(false);
	const emailDropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (emailDropdownRef.current && !emailDropdownRef.current.contains(event.target as Node)) {
				setShowEmailOptions(false);
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div className="min-h-screen bg-background text-foreground">
			<Navbar />
			<motion.div className="fixed left-0 right-0 top-0 z-50 h-1 bg-accent" style={{ scaleX }} />
			<Hero />
			<SectionDivider />
			<About />
			<SectionDivider />
			<Projects />
			<SectionDivider />
			<section id="contact" className="px-6 py-24">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="mb-8 text-3xl font-bold">Connect With Me</h2>
					<motion.div
						className="flex items-center justify-center gap-6 text-3xl"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.6 }}
					>
						<a href="https://github.com/aditya997979" target="_blank" rel="noreferrer noopener" aria-label="GitHub" title="GitHub" className="rounded-full border border-foreground/10 p-3 transition hover:bg-foreground/5 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8"><path d="M12 2C6.477 2 2 6.486 2 12.021c0 4.425 2.865 8.182 6.84 9.504.5.092.682-.217.682-.484 0-.238-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.468-1.11-1.468-.908-.62.069-.607.069-.607 1.004.071 1.532 1.032 1.532 1.032.892 1.534 2.341 1.091 2.91.835.091-.647.35-1.09.636-1.34-2.221-.253-4.555-1.114-4.555-4.955 0-1.094.39-1.99 1.029-2.69-.103-.253-.446-1.273.098-2.654 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.296 2.748-1.026 2.748-1.026.545 1.381.202 2.401.099 2.654.64.7 1.028 1.596 1.028 2.69 0 3.85-2.337 4.699-4.565 4.947.36.31.68.922.68 1.859 0 1.34-.012 2.42-.012 2.75 0 .269.18.58.688.481A10.026 10.026 0 0 0 22 12.02C22 6.486 17.523 2 12 2Z"/></svg>
						</a>
						<a href="https://www.linkedin.com/in/aditya-patro-72994425b/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" title="LinkedIn" className="rounded-full border border-foreground/10 p-3 transition hover:bg-foreground/5 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8"><path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.983 2.12 4.983 3.5zM.246 8.5h4.508V23H.246V8.5zM8.982 8.5h4.32v1.981h.062c.602-1.137 2.074-2.336 4.27-2.336 4.565 0 5.407 3.005 5.407 6.914V23h-4.7v-6.404c0-1.528-.028-3.492-2.128-3.492-2.131 0-2.459 1.664-2.459 3.385V23H8.982V8.5z"/></svg>
						</a>
						<div className="relative" ref={emailDropdownRef}>
							<button 
								onClick={() => setShowEmailOptions(!showEmailOptions)}
								aria-label="Email Options" 
								title="Email Options" 
								className="rounded-full border border-foreground/10 p-3 transition hover:bg-foreground/5 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
							>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8"><path d="M1.5 5.25A2.25 2.25 0 0 1 3.75 3h16.5A2.25 2.25 0 0 1 22.5 5.25v13.5A2.25 2.25 0 0 1 20.25 21H3.75A2.25 2.25 0 0 1 1.5 18.75V5.25Zm3.38-.75a.75.75 0 0 0-.53 1.28l6.15 5.943a.75.75 0 0 0 1.04 0l6.15-5.944a.75.75 0 0 0-.51-1.279H4.88Z"/></svg>
							</button>
							
							{showEmailOptions && (
								<motion.div
									initial={{ opacity: 0, y: 10, scale: 0.95 }}
									animate={{ opacity: 1, y: 0, scale: 1 }}
									exit={{ opacity: 0, y: 10, scale: 0.95 }}
									className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white/90 backdrop-blur border border-foreground/10 rounded-lg shadow-lg p-2 min-w-[200px] z-50"
								>
									<a 
										href="mailto:adityapatro01@gmail.com" 
										className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-foreground/5 transition-colors text-sm"
										onClick={() => setShowEmailOptions(false)}
									>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M1.5 5.25A2.25 2.25 0 0 1 3.75 3h16.5A2.25 2.25 0 0 1 22.5 5.25v13.5A2.25 2.25 0 0 1 20.25 21H3.75A2.25 2.25 0 0 1 1.5 18.75V5.25Zm3.38-.75a.75.75 0 0 0-.53 1.28l6.15 5.943a.75.75 0 0 0 1.04 0l6.15-5.944a.75.75 0 0 0-.51-1.279H4.88Z"/></svg>
										Open Email Client
									</a>
									<button 
										onClick={() => {
											navigator.clipboard.writeText('adityapatro01@gmail.com');
											alert('Email copied to clipboard!');
											setShowEmailOptions(false);
										}}
										className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-foreground/5 transition-colors text-sm w-full text-left"
									>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.75a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.016 12.516 9 11.25 9h-1.875A1.875 1.875 0 0 1 7.5 7.125V3.375ZM7.5 12.375c0-1.036.84-1.875 1.875-1.875h.75a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.035-.984 1.875-2.25 1.875h-1.875A1.875 1.875 0 0 1 7.5 15.75v-3.375ZM16.5 3.375c0-1.036.84-1.875 1.875-1.875h.75a3.75 3.75 0 0 1 3.75 3.75v1.875C22.5 8.016 21.516 9 20.25 9h-1.875A1.875 1.875 0 0 1 16.5 7.125V3.375ZM16.5 12.375c0-1.036.84-1.875 1.875-1.875h.75a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.035-.984 1.875-2.25 1.875h-1.875A1.875 1.875 0 0 1 16.5 15.75v-3.375Z"/></svg>
										Copy Email Address
									</button>
								</motion.div>
							)}
						</div>
					</motion.div>
				</div>
			</section>
			<footer className="py-10 text-center text-sm text-foreground/60">
				<div>© Aditya Patro</div>
			</footer>
		</div>
	);
}


