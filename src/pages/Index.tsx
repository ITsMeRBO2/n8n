import PresentationLayout from '@/components/PresentationLayout';
import TitleSlide from '@/components/slides/TitleSlide';
import PlanSlide from '@/components/slides/PlanSlide';
import IntroductionSlide from '@/components/slides/IntroductionSlide';
import TechnicalAnalysisSlide from '@/components/slides/TechnicalAnalysisSlide';
import ComparativeStudySlide from '@/components/slides/ComparativeStudySlide';
import UseCasesSlide from '@/components/slides/UseCasesSlide';
import EconomicAspectsSlide from '@/components/slides/EconomicAspectsSlide';
import PerspectivesSlide from '@/components/slides/PerspectivesSlide';
import ConclusionSlide from '@/components/slides/ConclusionSlide';

const Index = () => {
  const slides = [
    <TitleSlide key="title" />,
    <PlanSlide key="plan" />,
    <IntroductionSlide key="introduction" />,
    <TechnicalAnalysisSlide key="technical" />,
    <ComparativeStudySlide key="comparative" />,
    <UseCasesSlide key="usecases" />,
    <EconomicAspectsSlide key="economic" />,
    <PerspectivesSlide key="perspectives" />,
    <ConclusionSlide key="conclusion" />
  ];

  return (
    <PresentationLayout autoPlay={false} autoPlayDelay={10000}>
      {slides}
    </PresentationLayout>
  );
};

export default Index;
