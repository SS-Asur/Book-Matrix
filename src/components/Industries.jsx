import { motion } from 'framer-motion';
import { industries, clients } from '../data/industries';

export default function Industries() {
  return (
    <section className="py-24 lg:py-28 bg-ivory-dim" style={{paddingBottom:0}}>
      {/* Industries Content */}
      <div className="container-page">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <p className="label-tag mb-5">Industries</p>

            <h2 className="font-display text-[30px] sm:text-[36px] leading-[1.15] text-ink">
              Trusted by growing companies
            </h2>

            <p className="mt-5 text-[15.5px] text-ink/60 leading-relaxed max-w-[42ch]">
              Managing clean books across global markets.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {industries.map((ind, i) => (
              <motion.div
                key={ind}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                }}
                className="flex items-center gap-3 py-2.5 border-b border-ivory-rule"
              >
                <span className="font-display text-brass text-sm">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <span className="text-[14px] text-ink/75">
                  {ind}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Clients — Bottom of Section */}
      <div className="mt-24 lg:mt-28 border-y border-ivory-rule overflow-hidden">
        <div className="flex marquee-track w-max py-7">
          {[...clients, ...clients].map((name, i) => (
            <span
              key={i}
              className="mx-8 text-[16px] whitespace-nowrap text-black font-display"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}