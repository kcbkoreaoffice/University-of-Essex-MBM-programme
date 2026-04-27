import { NAV_LINKS } from '../constants';
import { motion } from 'motion/react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 h-20 px-8 flex items-center justify-between shadow-sm">
      <div className="section-container flex items-center justify-between w-full">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-extrabold tracking-tighter text-essex-purple">
              UNIVERSITY OF ESSEX <span className="font-light text-slate-400 ml-1">MBM</span>
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-slate-600 hover:text-essex-purple transition-colors uppercase tracking-tight"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden xl:flex flex-col items-end">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Enrollment Office</span>
            <span className="text-xs font-bold text-slate-600 tracking-tight">010-5701-2600</span>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-6 py-2.5 bg-essex-purple text-white rounded-full text-xs font-bold shadow-lg shadow-essex-purple/20 transition-all uppercase tracking-widest"
          >
            무료 상담
          </motion.a>
        </div>
      </div>
    </header>
  );
}
