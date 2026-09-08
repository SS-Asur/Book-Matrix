import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ConsultationCTA() {
  const handleNav = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-28 lg:py-36 bg-emerald text-ivory overflow-hidden">
      <svg
        className="absolute -right-24 -top-24 w-[420px] h-[420px] opacity-[0.12] pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="99" stroke="#F6F2E8" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="70" stroke="#F6F2E8" strokeWidth="0.5" />
        <path d="M20 140 L60 100 L90 120 L140 40 L180 70" stroke="#C9A566" strokeWidth="1.2" />
      </svg>

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-[38ch]"
        >
          <p className="label-tag mb-6 !text-brass-light">Get Started</p>
          <h2 className="font-display text-[34px] sm:text-[44px] leading-[1.15] mb-6">
            Let's get your books in order
          </h2>
          <p className="text-[15.5px] text-ivory/70 leading-relaxed mb-9">
            Tell us about your business: we'll follow up within one business day.
          </p>
          <button onClick={handleNav} className="btn-on-dark group">
            Book My Free Consultation
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
