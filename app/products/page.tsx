import ProductsHero from "../src/components/ProductsHero/page";
import ProductsIntro from "../src/components/ProductsIntro/page";
import ProductsCategory from "../src/components/ProductsCategory/page";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <ProductsHero />
      <ProductsIntro />
      <ProductsCategory />
    </main>
  );
}