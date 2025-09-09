import { motion } from 'framer-motion';

const projects = [
	{
		id: 1,
		title: 'Job Tracker (MERN + Tailwind)',
		desc:
			'Job tracking app with auth, CRUD, and file uploads (MongoDB Atlas). Responsive UI and fast flows.',
		img: '/thumbnails/job-tracker.svg',
	},
	{
		id: 2,
		title: 'Azure CI/CD Pipeline',
		desc:
			'Automated build/test/deploy with Azure DevOps; App Service deploys with env configs for reliability.',
		img: '/thumbnails/azure-cicd.svg',
	},
	{
		id: 3,
		title: 'Portfolio Website (React + TypeScript)',
		desc:
			'Responsive portfolio with React, TypeScript, Tailwind, animations. Served by Node.js + Express.',
		img: '/thumbnails/portfolio.svg',
	},
	{
		id: 4,
		title: 'Quiz Website (HTML/CSS/JS + Java)',
		desc:
			'Quiz platform with JS frontend and Java backend; dynamic questions and auto-scoring.',
		img: '/thumbnails/quiz.svg',
	},
];

export default function Projects() {
	return (
		<section id="projects" className="px-6 py-24">
			<div className="mx-auto max-w-6xl">
				<h2 className="mb-10 text-3xl font-bold">Projects</h2>
				<div className="grid grid-cols-4 gap-6">
					{projects.map((p, idx) => (
						<motion.article
							key={p.id}
							className="group rounded-2xl border border-foreground/10 bg-white/50 p-5 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.35)] backdrop-blur transition hover:-translate-y-1"
							initial={{ y: 20, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.5, delay: idx * 0.05 }}
						>
							<div className="mb-3 aspect-[16/10] w-full overflow-hidden rounded-xl bg-muted">
								<img src={p.img} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
							</div>
							<h3 className="mb-1 text-lg font-semibold">{p.title}</h3>
							<p className="text-sm text-foreground/70">{p.desc}</p>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}


