import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useScrolled } from '../hooks/useScroll';

export default function ScrollToTop() {
  const visible = useScrolled(600);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="fixed bottom-7 right-7 z-40 w-11 h-11 flex items-center justify-center bg-ink text-ivory hover:bg-emerald transition-colors duration-300"
        >
          <ArrowUp size={17} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
