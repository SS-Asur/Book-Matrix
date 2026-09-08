import { motion } from 'framer-motion';

export default function ServiceCard({ service, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className={`group relative flex flex-col justify-between p-8 min-h-[220px] transition-colors duration-300 border border-ivory-rule ${
        service.featured ? 'bg-ink text-ivory' : 'bg-transparent hover:bg-ivory-dim'
      }`}
    >
      <div className="flex items-start justify-between">
        <span className={`font-display text-3xl ${service.featured ? 'text-brass-light' : 'text-brass'}`}>
          {service.index}
        </span>
      </div>
      <div className="mt-8">
        <h3 className={`font-display text-xl mb-3 ${service.featured ? 'text-ivory' : 'text-ink'}`}>
          {service.title}
        </h3>
        <p className={`text-[14px] leading-relaxed ${service.featured ? 'text-ivory/70' : 'text-ink/60'}`}>
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}
