import { 
  Building2, 
  BookOpen, 
  FileText, 
  CreditCard, 
  Headphones,
  Award,
  Globe,
  Users,
  Briefcase,
  Cpu,
  Microscope,
  Scale,
  FlaskConical,
  CheckCircle2,
  Calendar,
  Clock,
  Laptop,
  Check
} from 'lucide-react';

export const NAV_LINKS = [
  { name: '대학소개', href: '#why-essex' },
  { name: 'MBM 소개', href: '#why-mbm' },
  { name: '커리큘럼', href: '#curriculum' },
  { name: '입학안내', href: '#admission' },
  { name: '상담신청', href: '#contact' },
];

export const QUICK_MENU = [
  { name: 'University of Essex', icon: Building2, href: '#' },
  { name: 'MBM 소개', icon: BookOpen, href: '#' },
  { name: '커리큘럼', icon: FileText, href: '#' },
  { name: '등록금 안내', icon: CreditCard, href: '#' },
  { name: '상담 신청', icon: Headphones, href: '#' },
];

export const ESSEX_STATS = [
  { label: '영국 12위', sub: 'Guardian University Guide 2026', icon: Award },
  { label: '세계 Top 200', sub: 'QS World University Rankings', icon: Globe },
  { label: '140개국+', sub: '글로벌 학생 네트워크', icon: Users },
  { label: '89%', sub: '졸업생 취업 또는 진학', icon: Briefcase },
];

export const ACADEMIC_STRENGTHS = [
  { title: 'Business & Economics', rank: '세계 Top 175', icon: Building2 },
  { title: 'Economics', rank: '영국 Top 10', icon: Briefcase },
  { title: 'Law', rank: '세계 Top 100', icon: Scale },
  { title: 'AI / Data / Robotics', rank: 'Research Power 강점', icon: Cpu },
  { title: 'Biology', rank: '영국 1위', icon: Microscope },
];

export const WHY_MBM_FEATURES = [
  '경영 비전공자 지원 가능',
  '실무 경험 없이 시작 가능',
  '커리어 시작 및 전환에 적합',
  'MBA 또는 박사 과정 진학 기반',
];

export const CURRICULUM_MODULES = [
  'Academic Writing',
  'Marketing Management',
  'Human Resource Management',
  'Financial Management',
  'Operations Management',
  'IT Management',
  'Business Strategy',
  'Research Methods',
];

export const COST_COMPARISON = [
  {
    name: 'Essex MBM',
    period: '1년',
    cost: '약 2,200만원',
    note: '추가 체류비 없음',
    highlight: true,
  },
  {
    name: '국내 대학원',
    period: '2~3년',
    cost: '5,000만원 이상',
    note: '교재비, 논문비 등 별도',
    highlight: false,
  },
  {
    name: '해외 유학',
    period: '1~2년',
    cost: '1억원 이상',
    note: '항공료, 주거비, 생활비 등',
    highlight: false,
  },
];

export const ADMISSION_STEPS = [
  { title: '입학 단계', desc: '서류 제출 / Aptis 또는 IELTS / 등록금 납부' },
  { title: '학습 단계', desc: '12개월 / 8개 모듈 / 과제 평가' },
  { title: '졸업 단계', desc: '논문 제출 / 최종 심사 / 학위 수여' },
];

export const STUDENT_BENEFITS = [
  'Microsoft 365 제공',
  'KCB 학번 및 이메일 발급',
  'University of Essex 공식 이메일 발급',
  'Essex 온라인 도서관 이용',
  '글로벌 학술 DB 및 E-book 이용',
];
