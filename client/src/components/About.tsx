import { motion } from 'framer-motion';

export default function About() {
	return (
		<section id="about" className="px-6 py-24">
			<div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
				<motion.div
					initial={{ x: -20, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.7 }}
					className="prose prose-zinc max-w-none dark:prose-invert"
				>
					<h2 className="text-3xl font-bold">About</h2>
					<p>
						Hi, I’m <strong>Aditya Patro</strong> — a Computer Science and Technology student passionate about building
						reliable, user‑friendly products. I work across the <strong>MERN stack</strong>, Azure cloud, and data‑driven
						solutions. Recent work includes a <strong>Quiz Portal</strong> and a <strong>Travel Hostel Management System</strong>.
						I’ve also earned wins in quizzes, competitions, and cultural events. Friendly, curious, and always shipping.
					</p>
				</motion.div>
				<motion.div
					initial={{ x: 20, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.7 }}
					className="rounded-2xl border border-foreground/10 bg-white/40 p-6 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.4)] backdrop-blur"
				>
					<ul className="grid grid-cols-2 gap-4 text-sm">
						<li>React (MERN)</li>
						<li>Node.js & Express</li>
						<li>MongoDB & SQL</li>
						<li>JavaScript</li>
						<li>REST & GraphQL</li>
						<li>Azure Cloud</li>
						<li>Python</li>
						<li>C</li>
						<li>SQL</li>
						<li>HTML</li>
						<li>Docker</li>
						<li>Kubernetes</li>
						<li>CI/CD</li>
						<li>DevOps</li>						
					</ul>
				</motion.div>
			</div>
		</section>
	);
}


