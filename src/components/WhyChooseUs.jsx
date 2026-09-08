import { motion } from 'framer-motion';
import { whyChooseUs } from '../data/whyChooseUs';

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32" style={{paddingBottom:0}}>
      <div className="container-page">
        <div className="max-w-[56ch] mb-16">
          <p className="label-tag mb-5">Why Book Matrix</p>
          <h2 className="font-display text-[32px] sm:text-[40px] leading-[1.15] text-ink">
            Numbers you can trust. People you can reach.
          </h2>
          <p className="mt-5 text-[15.5px] text-ink/60 leading-relaxed">
            Certified expertise, modern cloud tools, and reporting built for decisions, not just compliance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {whyChooseUs.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-display text-2xl text-brass">{f.index}</span>
                <div className="flex-1 h-px bg-ivory-rule" />
              </div>
              <h3 className="font-display text-[19px] text-ink mb-2.5">{f.title}</h3>
              <p className="text-[14px] text-ink/60 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
