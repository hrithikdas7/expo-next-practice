import BannerSlider from "./src/components/BannerSlider/page";
import AboutSection from "./src/components/AboutSection/page";
import ProductsPreview from "./src/components/ProductsPreview/page";
import WhyChooseUs from "./src/components/whyChoose/page";
import OurPillarsAndContact from "./src/components/Ourpillars/page";
import Certifications from "./src/components/certifications/page";

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
