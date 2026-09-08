import { motion } from 'framer-motion';

const points = [
  'Accurate financial records, maintained on a consistent schedule',
  'Cloud-based accounting in Xero and QuickBooks',
  'Compliance handled ahead of deadlines, not after them',
  'Strategic financial insight from ACCA-led professionals',
  'Support that scales from bookkeeping to full CFO oversight',
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-ink text-ivory">
      <div className="container-page grid lg:grid-cols-2 gap-16 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="label-tag mb-6">About Book Matrix</p>
          <h2 className="font-display text-[30px] sm:text-[38px] lg:text-[44px] leading-[1.2] text-ivory">
            Bookkeeping built for businesses that plan to outgrow their spreadsheets.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="text-[15.5px] text-ivory/65 leading-relaxed max-w-[48ch]">
            Book Matrix provides cloud-based bookkeeping, tax, payroll, reporting, and Virtual CFO support for growing businesses, building long-term relationships around clean, current numbers rather than one-off filings.
          </p>

          <ul className="mt-9 space-y-4">
            {points.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-3 pb-4 border-b border-ivory/10 text-[14.5px] text-ivory/80"
              >
                <span className="mt-2 w-1.5 h-1.5 bg-brass shrink-0" />
                {p}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
