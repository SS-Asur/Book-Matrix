import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Services from '../components/Services';
import Industries from '../components/Industries';
import WhyChooseUs from '../components/WhyChooseUs';
import Team from '../components/Team';
import Process from '../components/Process';
import About from '../components/About';
import ConsultationCTA from '../components/ConsultationCTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Industries />
        <WhyChooseUs />
        <Team />
        <Process />
        <About />
        <ConsultationCTA />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
