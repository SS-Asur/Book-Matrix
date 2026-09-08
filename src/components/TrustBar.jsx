import { motion } from 'framer-motion';
import { Cloud, ShieldCheck, Layers, Timer } from 'lucide-react';

const items = [
  { icon: Cloud, label: 'Cloud-Based Bookkeeping' },
  { icon: ShieldCheck, label: 'ACCA Certified Professionals' },
  { icon: Layers, label: 'Xero · QuickBooks' },
  { icon: Timer, label: 'Typical Response Time — 1 Day' },
];

export default function TrustBar() {
  return (
    <section className="rule-line rule-line-dark bg-ink text-ivory">
      <div className="container-page grid grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`flex items-center gap-3 py-7 px-2 sm:px-4 ${
              i !== 0 ? 'lg:border-l lg:border-ivory/10' : ''
            } ${i % 2 !== 0 ? 'border-l border-ivory/10 lg:border-l-0' : ''}`}
          >
            <it.icon size={20} className="text-brass-light shrink-0" />
            <span className="text-[13px] sm:text-[13.5px] font-medium text-ivory/85 leading-snug">
              {it.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
