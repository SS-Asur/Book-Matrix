import { motion } from 'framer-motion';
import { process } from '../data/process';

export default function Process() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-page">
        <div className="max-w-[54ch] mb-20">
          <p className="label-tag mb-5">How It Works</p>
          <h2 className="font-display text-[32px] sm:text-[40px] leading-[1.15] text-ink">
            A clear path from first call to closed books
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[13px] left-0 right-0 h-px bg-ivory-rule" />
          <div className="lg:hidden absolute top-0 bottom-0 left-[13px] w-px bg-ivory-rule" />

          <div className="grid lg:grid-cols-4 gap-10 lg:gap-8">
            {process.map((step, i) => (
              <motion.div
                key={step.index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-10 lg:pl-0"
              >
                <span className="absolute left-0 top-0 flex h-[26px] w-[26px] items-center justify-center rounded-full border-2 border-brass bg-ivory text-[11px] font-semibold text-brass-deep lg:relative lg:mb-7">
                  {i + 1}
                </span>
                <h3 className="font-display text-[19px] text-ink mb-2">{step.title}</h3>
                <p className="text-[14px] text-ink/60 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
