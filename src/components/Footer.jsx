export default function Footer() {
  const handleNav = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink text-ivory">
      <div className="container-page py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <p className="font-display text-xl mb-4">Book Matrix</p>
          <p className="text-[13.5px] text-ivory/55 leading-relaxed max-w-[32ch]">
            Cloud-based bookkeeping, tax, and CFO services for growing businesses: accurate, compliant, and built around your industry.
          </p>
        </div>

        <FooterColumn
          title="Company"
          links={[
            { label: 'About Us', href: '#about' },
            { label: 'Our Team', href: '#team' },
            { label: 'Contact', href: '#contact' },
          ]}
          onNav={handleNav}
        />

        <FooterColumn
          title="Services"
          links={[
            { label: 'Bookkeeping', href: '#services' },
            { label: 'Tax Filing', href: '#services' },
            { label: 'Virtual CFO', href: '#services' },
          ]}
          onNav={handleNav}
        />

        <div>
          <p className="text-[13px] font-semibold text-ivory/90 mb-4">Get in Touch</p>
          <ul className="space-y-2.5 text-[13.5px] text-ivory/55">
            <li>
              <a href="mailto:book@techmatrixinnovations.com" className="hover:text-brass-light transition-colors">
                book@techmatrixinnovations.com
              </a>
            </li>
            <li>
              <a href="tel:+9779865707511" className="hover:text-brass-light transition-colors">
                +977 986-5707511
              </a>
            </li>
            <li>Narephat, Kathmandu, Nepal</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12.5px] text-ivory/40">
          <p>© 2026 Book Matrix. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-ivory/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ivory/70 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links, onNav }) {
  return (
    <div>
      <p className="text-[13px] font-semibold text-ivory/90 mb-4">{title}</p>
      <ul className="space-y-2.5 text-[13.5px] text-ivory/55">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              onClick={(e) => { e.preventDefault(); onNav(link.href); }}
              className="hover:text-brass-light transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
