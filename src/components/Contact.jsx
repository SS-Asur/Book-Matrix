import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight, Clock } from 'lucide-react';

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'book@techmatrixinnovations.com',
    href: 'mailto:book@techmatrixinnovations.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+977 986-5707511',
    href: 'tel:+9779865707511',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Narephat, Kathmandu, Nepal',
    href: null,
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Sun – Fri · 9:00 AM – 6:00 PM',
    href: null,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ivory-dim py-24 lg:py-32"
    >
      {/* Soft background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-brass/5 blur-3xl" />
      </div>

      <div className="container-page relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-2xl lg:mb-20"
        >
          <p className="label-tag mb-5">Contact</p>
          <h2 className="font-display text-[34px] leading-[1.12] tracking-[-0.03em] text-ink sm:text-[42px] lg:text-[48px]">
            Let’s start a
            <span className="mt-1 block text-brass">conversation</span>
          </h2>
          <p className="mt-6 max-w-[42ch] text-[16px] leading-relaxed text-ink/60">
            Whether you need ongoing bookkeeping or a one-time cleanup — we’re
            here to help. Reach out and we’ll respond within one business day.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item, i) => {
            const Icon = item.icon;

            const content = (
              <>
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brass/10 text-brass transition-colors duration-300 group-hover:bg-brass group-hover:text-white">
                  <Icon size={18} strokeWidth={1.75} />
                </div>

                <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/40">
                  {item.label}
                </p>

                {/* Long email now wraps safely */}
                <p className="break-all font-display text-[15px] leading-snug text-ink sm:text-[16px]">
                  {item.value}
                </p>

                {item.href && (
                  <div className="mt-4 flex items-center gap-1.5 text-[12.5px] font-medium text-brass opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span>Get in touch</span>
                    <ArrowUpRight size={13} />
                  </div>
                )}
              </>
            );

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="group relative flex h-full flex-col rounded-2xl border border-ivory-rule bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brass/30 hover:bg-white hover:shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="group relative flex h-full flex-col rounded-2xl border border-ivory-rule bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brass/30 hover:bg-white hover:shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
                    {content}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-14 flex flex-col items-start justify-between gap-5 rounded-2xl border border-ivory-rule bg-white/50 px-7 py-6 sm:flex-row sm:items-center lg:mt-16"
        >
          <div>
            <p className="font-display text-[18px] text-ink">
              Prefer a quick call?
            </p>
            <p className="mt-1 text-[14px] text-ink/55">
              Available during business hours for a free consultation.
            </p>
          </div>

          <a
            href="tel:+9779865707511"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[13.5px] font-medium text-ivory transition-colors duration-300 hover:bg-brass"
          >
            <Phone size={14} />
            Call us now
          </a>
        </motion.div>
      </div>
    </section>
  );
}