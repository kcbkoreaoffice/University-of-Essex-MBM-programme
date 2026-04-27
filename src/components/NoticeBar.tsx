import { ArrowRight } from 'lucide-react';

export default function NoticeBar() {
  return (
    <div className="section-container my-4">
      <div className="bg-essex-purple text-white px-6 py-4 rounded-2xl flex flex-col md:flex-row items-center justify-between shadow-lg shadow-essex-purple/10">
        <div className="flex items-center space-x-4 mb-3 md:mb-0">
          <span className="bg-white text-essex-purple px-3 py-0.5 rounded-full text-xs font-bold uppercase">
            Notice
          </span>
          <p className="text-sm md:text-[15px] font-medium">
            2026년 9월 학기 MBM 신입생 모집 중입니다. (지원 마감: 2026년 8월 20일)
          </p>
        </div>
        <a href="#admission" className="flex items-center text-sm font-semibold hover:underline group">
          자세히 보기
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}
