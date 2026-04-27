import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-4 pb-8 overflow-hidden">
      <div className="section-container">
        <div className="relative h-[480px] md:h-[580px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 group">
          {/* Background Gradient - Soft Navy + Deep Purple */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0E1129] to-[#2D1B69] transition-transform duration-1000 group-hover:scale-105" />
          
          {/* Subtle light effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(106,60,226,0.15)_0%,transparent_70%)]" />

          {/* Content */}
          <div className="relative z-20 h-full flex flex-col justify-center px-10 md:px-20 text-white">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-[11px] font-bold tracking-[0.2em] text-cyan-400 bg-white/5 backdrop-blur-md rounded-full border border-white/10 uppercase">
                University of Essex, UK
              </span>
              <h1 className="text-4xl md:text-6xl font-black mb-4 leading-[1.1] italic tracking-tighter">
                Master of Business <br />
                <span className="text-white">Management</span>
              </h1>
              <p className="text-xl md:text-2xl font-light text-slate-200 mb-10 leading-relaxed">
                국내에서 완성하는 <span className="font-bold border-b-2 border-essex-purple">1년 영국 정식 석사</span> 학위
              </p>
              
              <div className="flex flex-wrap items-center gap-6">
                <motion.a
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className="px-10 py-4 bg-white text-essex-navy rounded-2xl font-bold text-base shadow-2xl hover:shadow-essex-purple/40 transition-all flex items-center group/btn"
                >
                  무료 상담 신청하기
                  <ChevronRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </motion.a>
                
                <div className="hidden sm:flex gap-8 ml-4 border-l border-white/20 pl-8">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider opacity-60 font-bold">Entry Level</span>
                    <span className="font-bold text-sm">경력 없이 지원 가능</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider opacity-60 font-bold">Degree Status</span>
                    <span className="font-bold text-sm">온라인 표기 없음</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Stats Overlay (Optional design touch) */}
          <div className="absolute bottom-10 right-10 hidden lg:flex gap-8">
            <div className="text-right text-white">
              <p className="text-3xl font-bold">1 Year</p>
              <p className="text-xs opacity-70">Duration</p>
            </div>
            <div className="text-right text-white">
              <p className="text-3xl font-bold">In Korea</p>
              <p className="text-xs opacity-70">Study Mode</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
