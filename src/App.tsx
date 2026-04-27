import Header from './components/Header';
import Hero from './components/Hero';
import QuickMenu from './components/QuickMenu';
import NoticeBar from './components/NoticeBar';
import { 
  WhyEssex, 
  AcademicStrengths, 
  WhyMBM, 
  ProgramOverview, 
  Curriculum, 
  CoreBenefits, 
  CostComparison, 
  Roadmap, 
  LearningMethod, 
  TrustSection, 
  FinalCTA 
} from './components/MainSections';
import { 
  AdmissionRequirements, 
  TuitionAndBenefits, 
  Footer 
} from './components/AdmissionInfo';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-essex-purple/20 selection:text-essex-purple">
      <Header />
      <main>
        <Hero />
        <QuickMenu />
        <NoticeBar />
        
        <WhyEssex />
        <AcademicStrengths />
        <WhyMBM />
        <ProgramOverview />
        <Curriculum />
        <CoreBenefits />
        <CostComparison />
        <Roadmap />
        <LearningMethod />
        <AdmissionRequirements />
        <TuitionAndBenefits />
        <TrustSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

