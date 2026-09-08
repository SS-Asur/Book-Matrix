import { motion } from 'framer-motion';
import { services } from '../data/services';
import ServiceCard from './ServiceCard';

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container-page">
        <div className="max-w-[54ch] mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="label-tag mb-5"
          >
            Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-[32px] sm:text-[40px] leading-[1.15] text-ink"
          >
            Everything your finance function needs, in one place
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-[15.5px] text-ink/60 leading-relaxed"
          >
            From day-to-day bookkeeping to boardroom-level strategy: pick one service or hand us the whole ledger.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-ivory-rule">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
