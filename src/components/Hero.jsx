import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, TrendingUp } from 'lucide-react';
import LedgerPanel from './LedgerPanel';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-[-10%] h-[500px] w-[500px] rounded-full bg-brass/10 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[350px] w-[350px] rounded-full bg-purple/5 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-rule to-transparent" />
      </div>

      <div className="container-page relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* LEFT */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            {/* Eyebrow */}
            <motion.div variants={item}>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-brass/20 bg-brass-soft px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-brass" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brass">
                  Cloud Accounting & Advisory
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={item}
              className="font-display text-[44px] leading-[1.05] tracking-[-0.035em] text-ink sm:text-[56px] lg:text-[68px] xl:text-[74px]"
            >
              Numbers you can trust.
              <span className="block">Decisions you can make.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={item}
              className="mt-7 max-w-[55ch] text-[16px] leading-[1.75] text-ink-muted sm:text-[17px]"
            >
              Book Matrix takes care of your bookkeeping, tax, payroll, and
              financial reporting so you can spend less time managing numbers
              and more time growing your business.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={item}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#contact"
                className="btn-primary group rounded-xl px-7 py-4 shadow-lg shadow-primary/10"
              >
                Book a Free Consultation
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href="#services"
                className="btn-secondary rounded-xl px-7 py-4"
              >
                Explore Our Services
              </a>
            </motion.div>

            {/* Trust points */}
            <motion.div
              variants={item}
              className="mt-9 flex flex-wrap gap-x-7 gap-y-3 border-t border-ink-rule pt-6"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brass" />
                <span className="text-[12px] font-medium text-ink-muted">
                  Certified professionals
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-brass" />
                <span className="text-[12px] font-medium text-ink-muted">
                  Secure & confidential
                </span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-brass" />
                <span className="text-[12px] font-medium text-ink-muted">
                  Growth-focused advice
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            {/* Main dashboard */}
            <div className="relative z-10 rounded-3xl border border-ink-rule bg-white p-2 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
              <div className="overflow-hidden rounded-2xl">
                <LedgerPanel />
              </div>
            </div>

            {/* Floating card - top right */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="absolute -right-4 -top-7 z-20 hidden rounded-2xl border border-ink-rule bg-white px-5 py-4 shadow-xl sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-soft">
                  <CheckCircle2 size={18} className="text-emerald" />
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-ink-muted">
                    Books
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-ink">
                    Up to date
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating card - bottom left */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="absolute -bottom-6 -left-5 z-20 hidden rounded-2xl border border-ink-rule bg-white px-5 py-4 shadow-xl sm:block"
            >
              <p className="text-[10px] font-medium uppercase tracking-wider text-ink-muted">
                Financial clarity
              </p>
              <div className="mt-1 flex items-end gap-2">
                <span className="font-display text-2xl font-semibold text-ink">
                  100%
                </span>
                <span className="mb-1 text-[11px] font-medium text-emerald">
                  organized
                </span>
              </div>
            </motion.div>

            {/* Decorative circles */}
            <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full border border-primary/10" />
            <div className="absolute -bottom-6 -right-6 h-20 w-20 rounded-full border border-primary/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}