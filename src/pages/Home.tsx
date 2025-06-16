import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import BreakdownSection from '../components/BreakdownSection';
import DonateSection from '../components/DonateSection';
import EightActs from '../components/EightActs';
import DeclareEmergencyNow from '../components/DeclareEmergencyNow';
import LatestSection from '../components/LatestSection.tsx';
import DesignDeclaresNewsletter from '../components/DesignDeclaresNewsletter.tsx';
import SignatoriesPage from '../components/SignatoriesPage.tsx';
import SignatoriessPage from '../components/SignatoriessPage.tsx';
import FloatingDeclareBox from '../components/FloatingDeclareBox.tsx';
const Home = () => {
  return (
    <main>
       <div className="bg-black min-h-screen text-white">
      <ScrollProgress />
      <Hero />

      <BreakdownSection />
      <DonateSection />
      <EightActs />
      <DeclareEmergencyNow />
      <LatestSection />
      <DesignDeclaresNewsletter />
      <SignatoriesPage />
      <SignatoriessPage />
      <FloatingDeclareBox />
      </div>
       
      <Footer />
    </main>
  );
};

export default Home;
