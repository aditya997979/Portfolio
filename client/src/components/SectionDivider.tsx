import { motion } from 'framer-motion';

export default function SectionDivider() {
	return (
		<motion.hr
			className="mx-auto my-10 h-px w-[min(92%,1100px)] border-0 bg-foreground/10"
			initial={{ scaleX: 0 }}
			whileInView={{ scaleX: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
		/>
	);
}



