import { motion } from 'framer-motion';
import { Check, Clock } from 'lucide-react';

const rows = [
  { label: 'General Ledger', status: 'Reconciled', kind: 'done' },
  { label: 'Bookkeeping', status: 'Bank feeds synced', kind: 'done' },
  { label: 'Accounts Payable', status: '12 bills processed', kind: 'done' },
  { label: 'Payroll', status: 'Run scheduled', kind: 'pending' },
  { label: 'VAT / Tax Filing', status: 'Due 15th', kind: 'pending' },
  { label: 'Management Report', status: 'Sent to client', kind: 'done' },
];

const barHeights = [38, 62, 46, 78, 54, 70, 88];

export default function LedgerPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      <div className="absolute -top-5 -left-5 w-full h-full border border-brass/40 rounded-sm hidden sm:block" />

      <div className="relative bg-ink text-ivory rounded-sm shadow-[0_40px_80px_-30px_rgba(22,21,15,0.55)] overflow-hidden">
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-ivory/10">
          <div>
            <p className="text-[10px] uppercase tracking-widest2 text-brass-light">Live Overview</p>
            <p className="font-display text-lg mt-1">Client Ledger — Sept</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-widest2 text-ivory/40">Net Position</p>
            <AnimatedNumber />
          </div>
        </div>

        <div className="px-6 py-5 border-b border-ivory/10">
          <div className="flex items-end gap-1.5 h-20">
            {barHeights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`flex-1 rounded-t-[1px] ${i === barHeights.length - 1 ? 'bg-brass' : 'bg-ivory/15'}`}
              />
            ))}
          </div>
        </div>

        <ul className="divide-y divide-ivory/10">
          {rows.map((row, i) => (
            <motion.li
              key={row.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
              className="flex items-center justify-between px-6 py-3.5 text-[13.5px]"
            >
              <span className="text-ivory/85">{row.label}</span>
              <span className={`inline-flex items-center gap-1.5 ${row.kind === 'done' ? 'text-emerald-light' : 'text-brass-light'}`}>
                {row.kind === 'done' ? <Check size={13} /> : <Clock size={13} />}
                {row.status}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function AnimatedNumber() {
  return (
    <p className="font-display text-2xl text-ivory tabular-nums">
      $1,248,930
    </p>
  );
}
