import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-ivory-dim">
      <div className="container-page grid lg:grid-cols-[0.8fr_1.2fr] gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="label-tag mb-5">Contact</p>
          <h2 className="font-display text-[32px] sm:text-[38px] leading-[1.15] text-ink mb-8">
            Get In Touch
          </h2>

          <div className="space-y-6">
            <a href="mailto:book@techmatrixinnovations.com" className="flex items-start gap-4 group">
              <Mail size={18} className="mt-0.5 text-brass shrink-0" />
              <span className="text-[14.5px] text-ink/75 group-hover:text-ink transition-colors">
                book@techmatrixinnovations.com
              </span>
            </a>
            <a href="tel:+9779865707511" className="flex items-start gap-4 group">
              <Phone size={18} className="mt-0.5 text-brass shrink-0" />
              <span className="text-[14.5px] text-ink/75 group-hover:text-ink transition-colors">
                +977 986-5707511
              </span>
            </a>
            <div className="flex items-start gap-4">
              <MapPin size={18} className="mt-0.5 text-brass shrink-0" />
              <span className="text-[14.5px] text-ink/75">
                Narephat, Kathmandu, Nepal
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-charcoal/10 bg-white/60 p-7 shadow-panel md:p-9"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
