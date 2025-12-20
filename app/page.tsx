import BannerSlider from "@/src/components/BannerSlider/component";
import AboutSection from "@/src/components/AboutSection/component";
import ProductsPreview from "@/src/components/ProductsPreview/component";
import WhyChooseUs from "@/src/components/whyChoose/component";
import OurPillarsAndContact from "@/src/components/Ourpillars/component";
import Certifications from "@/src/components/certifications/component";

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
