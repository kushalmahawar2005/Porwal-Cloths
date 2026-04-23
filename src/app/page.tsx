import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandMarquee from "@/components/BrandMarquee";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import PricingTable from "@/components/PricingTable";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import LoadingScreen from "@/components/LoadingScreen";
import BackToTop from "@/components/BackToTop";
import ScrollAnimate from "@/components/ScrollAnimate";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <HeroSection />
        <BrandMarquee />
        <StatsSection />

        <ScrollAnimate animation="fade-up">
          <AboutSection />
        </ScrollAnimate>

        <ScrollAnimate animation="fade-up">
          <ProductsSection />
        </ScrollAnimate>

        <ScrollAnimate animation="fade-up">
          <PricingTable />
        </ScrollAnimate>

        <ScrollAnimate animation="fade-up">
          <WhyUsSection />
        </ScrollAnimate>

        <ScrollAnimate animation="fade-in" duration={1000}>
          <TestimonialsCarousel />
        </ScrollAnimate>

        <ScrollAnimate animation="fade-up">
          <FAQSection />
        </ScrollAnimate>

        <ScrollAnimate animation="fade-up">
          <ContactSection />
        </ScrollAnimate>
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppFloat />
    </>
  );
}
