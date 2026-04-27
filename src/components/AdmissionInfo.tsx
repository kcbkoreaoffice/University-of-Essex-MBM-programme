import { Check, ClipboardList, BookOpen, GraduationCap, DollarSign, Send } from 'lucide-react';
import { STUDENT_BENEFITS, ADMISSION_STEPS } from '../constants';

export function AdmissionRequirements() {
  return (
    <section id="admission" className="py-24 bg-gray-50">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <span className="text-essex-purple font-bold tracking-widest uppercase text-sm mb-4 block">Admission Requirements</span>
            <h2 className="heading-lg mb-8">전공과 경력의 제한을 낮춘 <br />유연한 입학 기준</h2>
            <div className="space-y-6">
              {[
                '학사 학위 소지자 (졸업 예정자 포함)',
                '전공 무관 (경영 비전공자 적극 환영)',
                '직장 경력 무관 (사회 초년생 가능)',
                '영어 능력 B2 이상 (Aptis 6.5 또는 IELTS 6.5)',
              ].map((item) => (
                <div key={item} className="flex items-center p-5 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-6 h-6 bg-essex-purple/10 rounded-full flex items-center justify-center mr-4">
                    <Check className="w-4 h-4 text-essex-purple" />
                  </div>
                  <span className="font-semibold text-essex-navy">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="p-10 bg-white rounded-[3rem] shadow-xl border border-gray-100 h-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <ClipboardList className="mr-3 text-essex-purple" />
                Aptis Test 안내
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                KCB는 한국 내 <span className="text-essex-purple font-bold underline">Aptis 공식 시험 센터</span>를 운영하고 있습니다. 
                영어 성적 준비 단계부터 입학까지 전 과정을 전문적으로 지원합니다.
              </p>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <p className="text-sm font-bold text-essex-navy mb-2">시험 응시 및 입학 상담</p>
                <p className="text-2xl font-bold text-essex-purple">010-5701-2600</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TuitionAndBenefits() {
  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Tuition */}
          <div>
             <span className="text-essex-purple font-bold tracking-widest uppercase text-sm mb-4 block">Tuition & Application</span>
             <h2 className="heading-lg mb-8">등록금 및 지원 절차</h2>
             <div className="bg-essex-navy text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden mb-12">
               <DollarSign className="absolute -right-6 -bottom-6 w-48 h-48 text-white/5" />
               <p className="text-lg opacity-70 mb-2">총 등록금</p>
               <div className="flex items-baseline space-x-4 mb-4">
                 <span className="text-5xl font-black">SGD 20,000</span>
                 <span className="text-xl opacity-60">한화 약 2,200만원</span>
               </div>
               <p className="text-sm opacity-70">* 입학금, 교재비 및 기타 제반 비용 일체 포함</p>
             </div>
             
             <div className="space-y-6">
               <p className="text-lg font-bold text-essex-navy">지원 절차 (5단계)</p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {['서류 제출', 'Aptis/IELTS 제출', '심사 및 합격 통보', '등록금 납부', '학번 부여 및 개강'].map((step, idx) => (
                   <div key={step} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl">
                     <span className="w-8 h-8 flex items-center justify-center bg-essex-purple text-white rounded-lg font-bold text-xs">{idx + 1}</span>
                     <span className="font-semibold text-gray-700">{step}</span>
                   </div>
                 ))}
               </div>
             </div>
          </div>

          {/* Benefits */}
          <div className="flex flex-col justify-center">
            <div className="bg-gray-50 p-12 rounded-[3.5rem] border border-gray-100">
              <h3 className="heading-md mb-8">디지털 학습 혜택</h3>
              <div className="grid grid-cols-1 gap-6">
                {STUDENT_BENEFITS.map((benefit) => (
                  <div key={benefit} className="flex items-center space-x-5 group">
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center group-hover:bg-essex-purple transition-colors">
                      <Check className="w-6 h-6 text-essex-purple group-hover:text-white" />
                    </div>
                    <span className="text-lg font-medium text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-essex-navy text-white pt-24 pb-12">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand */}
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold mb-6">
              University of Essex <span className="text-essex-purple">MBM</span>
            </h2>
            <p className="text-white/60 mb-8 max-w-xs leading-relaxed">
              by Kensington College of Business <br />
              영국 명문 국립대학 본교 정식 석사 학위 과정을 국내에서 가장 효율적으로 준비하세요.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <p className="font-bold mb-6 text-essex-purple uppercase tracking-widest text-xs">University</p>
              <ul className="space-y-4 text-sm text-white/70">
                <li><a href="#why-essex" className="hover:text-white">학위 소개</a></li>
                <li><a href="#why-mbm" className="hover:text-white">왜 MBM인가?</a></li>
                <li><a href="#subjects" className="hover:text-white">과목 소개</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-6 text-essex-purple uppercase tracking-widest text-xs">Admission</p>
              <ul className="space-y-4 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">입학 자격</a></li>
                <li><a href="#" className="hover:text-white">Aptis Test</a></li>
                <li><a href="#" className="hover:text-white">상담 신청</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Box */}
          <div className="lg:col-span-4">
            <div id="contact" className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <p className="font-bold mb-6 flex items-center">
                <Send className="mr-2 w-5 h-5 text-essex-purple" />
                입학 문의 및 상담
              </p>
              <div className="space-y-6">
                <div>
                  <p className="text-xs opacity-50 mb-1 font-semibold">Phone</p>
                  <p className="text-xl font-bold">010-5701-2600</p>
                </div>
                <div>
                  <p className="text-xs opacity-50 mb-1 font-semibold">Email</p>
                  <p className="font-medium">kcbkoreaoffice@gmail.com</p>
                </div>
                <div>
                  <p className="text-xs opacity-50 mb-1 font-semibold">KakaoTalk</p>
                  <p className="font-medium">@영국켄싱턴대학</p>
                </div>
                <div>
                  <p className="text-xs opacity-50 mb-1 font-semibold">Office</p>
                  <p className="text-sm">한국과학기술회관 2관 9층</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between text-sm text-white/40">
          <p>KCB x University of Essex © 2026 Kensington College of Business. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a href="#" className="hover:text-white">개인정보처리방침</a>
            <a href="#" className="hover:text-white">입학 약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
