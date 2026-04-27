import { QUICK_MENU } from '../constants';
import { motion } from 'motion/react';
import { Mail, Phone } from 'lucide-react';

export default function QuickMenu() {
  return (
    <section className="py-8">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Contact Info (Left) */}
          <div className="lg:col-span-4 bg-essex-navy text-white p-8 rounded-3xl shadow-xl">
            <div className="space-y-4">
              <p className="text-sm font-medium text-essex-purple tracking-widest uppercase">입학문의</p>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/10 rounded-xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold">010-5701-2600</p>
                  <p className="text-xs text-gray-400">평일 09:00 - 18:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/10 rounded-xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-lg font-medium">kcbkoreaoffice@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Icon Navigation (Right) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-5 gap-4">
            {QUICK_MENU.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-xl hover:border-essex-purple/20 transition-all group"
              >
                <div className="p-4 bg-white rounded-2xl mb-4 group-hover:bg-essex-purple group-hover:text-white transition-colors shadow-sm">
                  <item.icon className="w-8 h-8 text-essex-purple group-hover:text-white transition-colors" />
                </div>
                <span className="text-[14px] font-bold text-gray-700">{item.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
