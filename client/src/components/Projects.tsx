import { motion } from 'framer-motion';

const projects = [
	{
		id: 1,
		title: 'Job Tracker',
		desc:
			'Job tracking app with auth, CRUD, and file uploads (MongoDB Atlas). Responsive UI and fast flows.',
		img: '/thumbnails/job-tracker.svg',
		url: 'https://job-tracker-aditya.vercel.app/login',
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
		title: 'Portfolio Website',
		desc:
			'Responsive portfolio with React, TypeScript, Tailwind, animations. Served by Node.js + Express.',
		img: '/thumbnails/portfolio.svg',
		url: 'https://aditya-patro.vercel.app/',
	},
	{
		id: 4,
		title: 'Quiz Website',
		desc:
			'Quiz platform with JS frontend and Java backend; dynamic questions and auto-scoring.',
		img: '/thumbnails/quiz.svg',
	},
];

export default function Projects() {
	return (
		<section id="projects" className="px-4 py-16 sm:px-6 sm:py-24">
			<div className="mx-auto max-w-6xl">
				<h2 className="mb-8 text-2xl font-bold sm:mb-10 sm:text-3xl">Projects</h2>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{projects.map((p, idx) => (
						<motion.article
							key={p.id}
							className="group rounded-2xl border border-foreground/10 bg-white/50 p-4 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.35)] backdrop-blur transition hover:-translate-y-1 sm:p-5"
							initial={{ y: 20, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.5, delay: idx * 0.05 }}
						>
							{p.url ? (
								<a href={p.url} target="_blank" rel="noopener noreferrer" className="block focus:outline-none focus:ring-2 focus:ring-accent/60 rounded-xl">
									<div className="mb-3 aspect-[16/10] w-full overflow-hidden rounded-xl bg-muted">
										<img src={p.img} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
									</div>
									<h3 className="mb-1 text-base font-semibold sm:text-lg">{p.title}</h3>
									<p className="text-sm text-foreground/70">{p.desc}</p>
								</a>
							) : (
								<>
									<div className="mb-3 aspect-[16/10] w-full overflow-hidden rounded-xl bg-muted">
										<img src={p.img} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
									</div>
									<h3 className="mb-1 text-base font-semibold sm:text-lg">{p.title}</h3>
									<p className="text-sm text-foreground/70">{p.desc}</p>
								</>
							)}
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}


