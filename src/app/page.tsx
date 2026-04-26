import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PromoCardsRow from "@/components/PromoCardsRow";
import TrustStrip from "@/components/TrustStrip";
import BrandMarquee from "@/components/BrandMarquee";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import FeaturedCollection from "@/components/FeaturedCollection";
import LookbookSection from "@/components/LookbookSection";
import CatalogBanner from "@/components/CatalogBanner";
import PricingTable from "@/components/PricingTable";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileBottomBar from "@/components/MobileBottomBar";
import LoadingScreen from "@/components/LoadingScreen";
import BackToTop from "@/components/BackToTop";
import ScrollAnimate from "@/components/ScrollAnimate";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <AnnouncementBar />
      <Navbar />
      <main className="pb-16 md:pb-0">
        <HeroSection />
        <PromoCardsRow />
        <TrustStrip />

        <ScrollAnimate animation="fade-up">
          <AboutSection />
        </ScrollAnimate>

        <BrandMarquee />

        <ScrollAnimate animation="fade-up">
          <ProductsSection />
        </ScrollAnimate>

        <ScrollAnimate animation="fade-up">
          <FeaturedCollection />
        </ScrollAnimate>

        <ScrollAnimate animation="fade-up">
          <LookbookSection />
        </ScrollAnimate>

        <ScrollAnimate animation="fade-up">
          <CatalogBanner />
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
      <MobileBottomBar />
    </>
  );
}
