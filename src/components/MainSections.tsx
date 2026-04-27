import { motion } from 'motion/react';
import { 
  ESSEX_STATS, 
  ACADEMIC_STRENGTHS, 
  WHY_MBM_FEATURES, 
  CURRICULUM_MODULES,
  COST_COMPARISON,
} from '../constants';
import { 
  CheckCircle2, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Award, 
  GraduationCap,
  Laptop,
  Users
} from 'lucide-react';

export function WhyEssex() {
  return (
    <section id="why-essex" className="py-24 bg-white">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2">
            <span className="text-essex-purple font-bold tracking-widest uppercase text-sm mb-4 block">Global University</span>
            <h2 className="heading-lg mb-6">영국 명문 연구 중심 대학, <br />University of Essex</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              University of Essex는 글로벌 연구 역량과 실무 중심 교육을 바탕으로 세계적인 평가를 받고 있는 영국 국립대학입니다. 
              연구의 수월성과 혁신적인 교육 방식으로 글로벌 리더를 양성합니다.
            </p>
          </div>
          <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ESSEX_STATS.map((stat) => (
              <div key={stat.label} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-essex-purple/40 hover:shadow-lg transition-all group">
                <stat.icon className="w-10 h-10 text-essex-purple mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-essex-navy mb-1">{stat.label}</h3>
                <p className="text-sm text-gray-500">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AcademicStrengths() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="section-container text-center mb-16">
        <span className="text-essex-purple font-bold tracking-widest uppercase text-sm mb-4 block">Academic Excellence</span>
        <h2 className="heading-lg mb-4">비즈니스부터 AI까지, 다양한 분야에서 인정받는 Essex의 경쟁력</h2>
      </div>
      <div className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {ACADEMIC_STRENGTHS.map((field) => (
            <div key={field.title} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-essex-navy/5 rounded-2xl flex items-center justify-center mb-6">
                <field.icon className="w-8 h-8 text-essex-navy" />
              </div>
              <h3 className="text-[17px] font-bold text-essex-navy mb-2 h-12 flex items-center">{field.title}</h3>
              <p className="text-sm font-semibold text-essex-purple">{field.rank}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyMBM() {
  return (
    <section id="why-mbm" className="py-24 bg-white overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-8">
            <div>
              <span className="text-essex-purple font-bold tracking-widest uppercase text-sm mb-4 block">Why MBM</span>
              <h2 className="heading-lg mb-6">경영 비전공자와 커리어 전환자를 위한 명확한 해답</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                MBM은 경영학 전공자가 아니어도 비즈니스 전반을 체계적으로 학습할 수 있도록 설계된 석사 과정입니다. 
                실무 경험이 부족한 지원자도 경영 기초부터 전략적 사고까지 단계적으로 학습할 수 있습니다.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_MBM_FEATURES.map((feature) => (
                <div key={feature} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-essex-purple flex-shrink-0" />
                  <span className="text-[15px] font-semibold text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" 
                alt="Students studying"
                className="w-full h-[450px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-essex-navy/5 rounded-[3rem] -z-10 translate-x-4 translate-y-4" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Curriculum() {
  return (
    <section id="curriculum" className="py-24 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-essex-purple font-bold tracking-widest uppercase text-sm mb-4 block">Curriculum</span>
          <h2 className="heading-lg">8 Core Modules</h2>
          <p className="text-sub">글로벌 비즈니스의 핵심 역량을 완성하는 체계적인 과정</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CURRICULUM_MODULES.map((module, idx) => (
            <motion.div
              key={module}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 group"
            >
              <div className="text-essex-purple/20 font-black text-4xl mb-4 group-hover:text-essex-purple/40 transition-colors">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <h3 className="text-lg font-bold text-essex-navy">{module}</h3>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 p-10 bg-essex-navy rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between shadow-2xl">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Management Report / Dissertation</h3>
            <p className="text-white/70">지도교수 배정 후 밀착 지도를 통한 학술 논문 작성 및 제출</p>
          </div>
          <div className="flex -space-x-4">
             <div className="w-12 h-12 rounded-full border-2 border-essex-navy bg-gray-200" />
             <div className="w-12 h-12 rounded-full border-2 border-essex-navy bg-gray-300" />
             <div className="w-12 h-12 rounded-full border-2 border-essex-navy bg-gray-400" />
             <div className="w-12 h-12 rounded-full border-2 border-essex-navy bg-essex-purple flex items-center justify-center text-xs font-bold">+10</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CostComparison() {
  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-essex-purple font-bold tracking-widest uppercase text-sm mb-4 block">Cost Comparison</span>
          <h2 className="heading-lg">압도적인 시간과 비용 효율, Essex MBM</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {COST_COMPARISON.map((item) => (
            <div 
              key={item.name} 
              className={`p-10 rounded-[2.5rem] border ${item.highlight ? 'bg-essex-navy text-white ring-4 ring-essex-purple/20' : 'bg-gray-50 border-gray-100 text-gray-900'} relative`}
            >
              {item.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-essex-purple text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  Most Efficiency
                </div>
              )}
              <h3 className="text-2xl font-bold mb-6">{item.name}</h3>
              <div className="space-y-6">
                <div className={`p-6 rounded-2xl ${item.highlight ? 'bg-white/10' : 'bg-white shadow-sm'}`}>
                  <p className="text-sm opacity-60 mb-1">학업 기간</p>
                  <p className="text-2xl font-bold">{item.period}</p>
                </div>
                <div className={`p-6 rounded-2xl ${item.highlight ? 'bg-white/10' : 'bg-white shadow-sm'}`}>
                  <p className="text-sm opacity-60 mb-1">예상 비용 (학비)</p>
                  <p className="text-2xl font-bold text-essex-purple">{item.cost}</p>
                </div>
                <ul className="space-y-3 pt-4">
                  <li className="flex items-center text-sm">
                    <Check className={`w-4 h-4 mr-3 ${item.highlight ? 'text-essex-purple' : 'text-essex-navy'}`} />
                    {item.note}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center text-gray-500 font-medium">
          * 해외 유학 대비 비용 부담을 줄이고, 직장 병행이 가능한 현실적인 석사 과정입니다.
        </div>
      </div>
    </section>
  );
}

export function Roadmap() {
  return (
    <section className="py-24 bg-essex-navy text-white overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-essex-purple via-transparent to-transparent" />
      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <span className="text-essex-purple font-bold tracking-widest uppercase text-sm mb-4 block">1-Year Roadmap</span>
          <h2 className="heading-lg !text-white">체계적인 1년 학사 일정</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { period: 'Sep – Nov', modules: 'Academic Writing / Marketing Management' },
            { period: 'Dec – Feb', modules: 'Human Resource / Financial Management' },
            { period: 'Mar – May', modules: 'Operations Management / IT Management' },
            { period: 'Jun – Aug', modules: 'Business Strategy / Research Methods' },
            { period: 'Final', modules: 'Dissertation (최종 논문 심사 및 제출)', highlight: true },
          ].map((item, idx) => (
            <div key={item.period} className={`p-8 rounded-3xl border ${item.highlight ? 'bg-essex-purple border-essex-purple' : 'bg-white/5 border-white/10'}`}>
              <div className="text-sm font-bold opacity-60 mb-4">{String(idx + 1).padStart(2, '0')}</div>
              <h3 className="text-xl font-bold mb-4">{item.period}</h3>
              <p className="text-sm opacity-80 leading-relaxed">{item.modules}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LearningMethod() {
  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-essex-purple font-bold tracking-widest uppercase text-sm mb-4 block">Learning Method</span>
          <h2 className="heading-lg">일과 삶, 그리고 학업의 균형을 위한 설계</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="p-12 bg-gray-50 rounded-[3rem] border border-gray-100 flex flex-col items-start hover:shadow-xl transition-shadow">
            <div className="p-4 bg-essex-purple/10 rounded-2xl mb-8">
              <Laptop className="w-10 h-10 text-essex-purple" />
            </div>
            <h3 className="text-3xl font-bold text-essex-navy mb-6">Online Learning</h3>
            <ul className="space-y-5 text-lg text-gray-600">
              <li className="flex items-start">
                <Check className="w-6 h-6 mr-4 text-essex-purple flex-shrink-0" />
                <span>평일 저녁 실시간 온라인 수업</span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 mr-4 text-essex-purple flex-shrink-0" />
                <span>주 1~2회, 19:00~22:00</span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 mr-4 text-essex-purple flex-shrink-0" />
                <span>직장 및 일상과 병행 가능</span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 mr-4 text-essex-purple flex-shrink-0" />
                <span>토론, Q&A, 그룹 프로젝트 중심</span>
              </li>
            </ul>
          </div>
          <div className="p-12 bg-essex-navy text-white rounded-[3rem] flex flex-col items-start hover:shadow-xl transition-shadow">
            <div className="p-4 bg-white/10 rounded-2xl mb-8">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-6">Offline Workshop</h3>
            <ul className="space-y-5 text-lg text-white/80">
              <li className="flex items-start">
                <Check className="w-6 h-6 mr-4 text-essex-purple flex-shrink-0" />
                <span>과목별 주말 오프라인 특강</span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 mr-4 text-essex-purple flex-shrink-0" />
                <span>본교 교수진 직접 방한 (하이브리드 병행)</span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 mr-4 text-essex-purple flex-shrink-0" />
                <span>동기 및 교수진 강력한 네트워킹</span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 mr-4 text-essex-purple flex-shrink-0" />
                <span>집중형 특강으로 학습 효율 극대화</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustSection() {
  return (
    <section className="py-24 bg-essex-navy text-white">
      <div className="section-container text-center mb-20">
        <span className="text-essex-purple font-bold tracking-widest uppercase text-sm mb-4 block">Trust & Quality</span>
        <h2 className="heading-lg !text-white">믿을 수 있는 파트너십으로 완성하는 영국 석사</h2>
      </div>
      <div className="section-container grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'Official Partnership', desc: 'University of Essex 공식 파트너십 기반으로 영국 본교와 동일한 학사 운영', icon: ShieldCheck },
          { title: 'Quality Assurance', desc: '영국 고등교육 기준(QAA)에 부합하는 철저한 교육 품질 관리 및 평가', icon: Award },
          { title: 'Global Recognition', desc: '글로벌 기업 HR 및 해외 유수 대학 박사 진학에 활용 가능한 공신력 있는 학위', icon: GraduationCap },
        ].map((item) => (
          <div key={item.title} className="p-10 bg-white/5 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-colors">
            <item.icon className="w-12 h-12 text-essex-purple mb-8" />
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-white/60 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CoreBenefits() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-essex-purple font-bold tracking-widest uppercase text-sm mb-4 block">Core Benefits</span>
          <h2 className="heading-lg">Online 표기 없는 정식 석사 학위</h2>
          <p className="text-sub">글로벌 커리어의 경쟁력을 입증하는 가장 확실한 방법</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: '정식 석사 학위', desc: 'University of Essex 본교 정식 석사 학위 수여' },
            { title: 'No "Online"', desc: '졸업장에 ‘Online’ 표기 없는 정식 학위' },
            { title: 'Global Recognition', desc: '글로벌 기업 및 국내외 HR에서 공식 인정' },
            { title: 'PhD Pathway', desc: '국내외 명문 대학 박사(PhD) 과정 진학 가능' },
          ].map((item, idx) => (
            <div key={idx} className="p-10 bg-white rounded-[2.5rem] shadow-xl border-b-4 border-essex-purple flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-essex-purple text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-essex-purple/20">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-essex-navy mb-4 h-12 flex items-center">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProgramOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-essex-purple font-bold tracking-widest uppercase text-sm mb-4 block">Program Overview</span>
          <h2 className="heading-lg">Master of Business Management</h2>
          <p className="text-sub">글로벌 비즈니스의 미래를 설계하는 통합 경영 석사 과정</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 p-12 bg-gray-50 rounded-[3rem] border border-gray-100 shadow-sm">
             <p className="text-xl text-essex-navy leading-relaxed mb-8">
               MBM은 마케팅, 인사, 재무, 운영, IT, 전략, 연구방법론 등 경영 전반을 아우르는 통합 석사 과정입니다. 
               이론적 이해와 실무 적용 능력을 함께 기르는 것을 목표로 합니다.
             </p>
             <div className="h-px bg-gray-200 mb-8" />
             <p className="text-gray-500 font-medium">영국 본교 교수진과 국내외 전문가들이 함께하는 고품격 세션</p>
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            {[
              { label: '1 Year', sub: 'Duration' },
              { label: '8 Modules', sub: 'Core Modules' },
              { label: 'Dissertation', sub: 'Final Paper' },
              { label: "Master's Degree", sub: 'Accreditation' },
            ].map((badge) => (
              <div key={badge.label} className="bg-essex-purple/5 p-6 rounded-3xl text-center border border-essex-purple/10">
                <p className="text-essex-purple font-bold text-lg mb-1">{badge.label}</p>
                <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-widest">{badge.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className="bg-gray-50 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-essex-purple font-bold tracking-widest uppercase text-sm mb-4 block">Global Master Programme</span>
            <h2 className="heading-lg mb-8">국내에서 완성하는 영국 정식 석사 학위</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              시간과 비용의 부담은 줄이고, 글로벌 커리어의 가능성은 넓히세요. <br />
              University of Essex MBM은 여러분의 새로운 도전을 응원합니다.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="btn-primary"
              >
                무료 상담 신청하기
              </motion.a>
              <a href="#admission" className="btn-secondary">
                입학 안내 문의하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


