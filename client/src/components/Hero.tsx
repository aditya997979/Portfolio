import { motion } from 'framer-motion';

export default function Hero() {
	return (
		<section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6 py-20">
			<motion.div
				className="pointer-events-none absolute inset-0 -z-10"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.4 }}
			>
				<div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
				<div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-muted/50 blur-3xl" />
			</motion.div>



			<div className="relative z-10 mx-auto max-w-4xl text-center">
				<motion.h1
					className="mb-6 text-5xl font-extrabold tracking-tight md:text-6xl"
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8 }}
				>
					Aditya Patro
				</motion.h1>
				<motion.p
					className="mx-auto mb-10 max-w-2xl text-lg text-foreground/70"
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.1, duration: 0.8 }}
				>
					A curious mind exploring technology, design, and creativity through code.
				</motion.p>
				<motion.div
					className="flex items-center justify-center gap-4"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.8 }}
				>
					<a
						href="#projects"
						className="rounded-full bg-foreground px-6 py-3 text-background transition hover:opacity-90"
					>
						View Work
					</a>
					<a
						href="#contact"
						className="rounded-full border border-foreground/20 px-6 py-3 text-foreground transition hover:bg-foreground/5"
					>
						Connect
					</a>
				</motion.div>
			</div>
		</section>
	);
}


