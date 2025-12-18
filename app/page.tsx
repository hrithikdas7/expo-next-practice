import TopBar from "./src/components/TopBar/page";
import Navbar from "./src/components/NavBar/page";
import BannerSlider from "./src/components/BannerSlider/page";
import AboutSection from "./src/components/AboutSection/page";
import ProductsPreview from "./src/components/ProductsPreview/page";
import Footer from "./src/components/Footer/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <TopBar />

      {/* Navigation */}
      <Navbar />

      {/* Hero Slider */}
      <BannerSlider />

      {/* About Section */}
      <AboutSection />

      {/* Products Preview */}
      <ProductsPreview />

      {/* Footer */}
      <Footer />
    </div>
  );
}
