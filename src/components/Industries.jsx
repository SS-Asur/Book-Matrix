import { motion } from 'framer-motion';
import { industries, clients } from '../data/industries';

export default function Industries() {
  return (
    <section className="relative overflow-hidden bg-ivory-dim">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brass/5 blur-3xl" />
      </div>

      {/* Main content */}
      <div className="container-page relative pt-24 pb-20 lg:pt-32 lg:pb-24">
        <div className="grid items-end gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          {/* Left – Intro */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="label-tag mb-5">Industries</p>

            <h2 className="font-display text-[34px] leading-[1.12] tracking-[-0.03em] text-ink sm:text-[42px] lg:text-[48px]">
              Built for ambitious
              <span className="mt-1 block text-brass">
                teams across industries
              </span>
            </h2>

            <p className="mt-6 max-w-[40ch] text-[16px] leading-relaxed text-ink/60">
              From fast-moving startups to established operators — we keep the
              numbers clean so you can focus on growth.
            </p>
          </motion.div>

          {/* Right – Industry cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {industries.map((ind, i) => (
              <motion.div
                key={ind}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex items-center gap-4 rounded-2xl border border-ivory-rule bg-white/60 px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brass/25 hover:bg-white hover:shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brass/10 font-display text-[13px] font-semibold text-brass transition-colors group-hover:bg-brass/15 group-hover:text-brass">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <span className="text-[15px] font-medium text-ink/80 transition-colors group-hover:text-ink">
                  {ind}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Client logo strip */}
      <div className="relative border-t border-ivory-rule bg-white/60">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ivory-dim to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ivory-dim to-transparent" />

        <div className="flex overflow-hidden py-10">
          <div className="flex w-max animate-marquee items-center gap-16">
            {[...clients, ...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="flex items-center gap-4 whitespace-nowrap"
              >
                {/* Larger logo */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border-ink/8 bg-white shadow-sm">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="h-full w-full object-contain p-2"
                  />
                </div>

                <span className="font-display text-[15px] tracking-wide text-ink/70">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}