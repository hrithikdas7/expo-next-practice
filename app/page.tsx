import Navbar from "./src/components/NavBar/page";
import BannerSlider from "./src/components/BannerSlider/page";
import AboutSection from "./src/components/AboutSection/page";
import ProductsPreview from "./src/components/ProductsPreview/page";
import Footer from "./src/components/Footer/page";
import WhyChooseUs from "./src/components/whyChoose/page";
import OurPillarsAndContact from "./src/components/Ourpillars/page";
import Certifications from "./src/components/certifications/page";
import ContactCTA from "./src/components/Cta/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content - Add padding for fixed navbar */}
      <main className="pt-20">

        {/* Hero Slider */}
        <BannerSlider />

        {/* About Section */}
        <AboutSection />

        {/* Products Preview */}
        <ProductsPreview />

        {/* Footer */}

        <WhyChooseUs />
        <OurPillarsAndContact />
        <Certifications />
        <ContactCTA />
        <Footer />
      </main>
    </div>
  );
}
