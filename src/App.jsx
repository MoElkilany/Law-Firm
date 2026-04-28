import { colors } from './styles/tokens';
import { Navbar, Footer } from './components/layout';
import { Hero, About, Services, WhyUs, Testimonials, CTA, Contact } from './components/sections';

export default function App() {
  return (
    <div style={{ background: colors.navy, minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}