import Navbar from "./src/components/NavBar/page";
import BannerSlider from "./src/components/BannerSlider/page";
import AboutSection from "./src/components/AboutSection/page";
import ProductsPreview from "./src/components/ProductsPreview/page";
import Footer from "./src/components/Footer/page";

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
        <Footer />
      </main>
    </div>
  );
}
