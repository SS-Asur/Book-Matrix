import { motion } from 'framer-motion';

export default function TeamMember({ person, i }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.65,
        delay: i * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink">
        <img
          src={person.image}
          alt={person.name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

        {/* brass glow */}
        <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-brass/30 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

        {/* Content on image */}
        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
            <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.16em] text-white/60">
              {person.role}
            </p>

            <h3 className="font-display text-2xl leading-tight text-white">
              {person.name}
            </h3>

            {/* Credentials */}
            <ul className="mt-4 flex flex-wrap gap-2 opacity-80 transition-opacity duration-500 group-hover:opacity-100">
              {person.credentials.map((credential) => (
                <li
                  key={credential}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-medium tracking-wide text-white backdrop-blur-md"
                >
                  {credential}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Hover border */}
        <div className="absolute inset-0 rounded-2xl border border-transparent transition-colors duration-500 group-hover:border-brass/60" />
      </div>

    </motion.article>
  );
}