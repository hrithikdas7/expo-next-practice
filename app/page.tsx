import BannerSlider from "./src/components/BannerSlider/BannerSlider";
import AboutSection from "./src/components/AboutSection/AboutSection";
import ProductsPreview from "./src/components/ProductsPreview/ProductsPreview";
import WhyChooseUs from "./src/components/whyChoose/WhyChooseUs";
import OurPillarsAndContact from "./src/components/Ourpillars/OurPillars";
import Certifications from "./src/components/certifications/Certifications";

export default function Home() {
  return (
    <>
      {/* Hero Slider */}
      <BannerSlider />

      {/* About Section */}
      <AboutSection />

      {/* Products Preview */}
      <ProductsPreview />

      <WhyChooseUs />
      <OurPillarsAndContact />
      <Certifications />
    </>
  );
}
