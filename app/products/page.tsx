import ProductsHero from "../src/components/ProductsHero/ProductsHero";
import ProductsIntro from "../src/components/ProductsIntro/ProductsIntro";
import ProductsCategory from "../src/components/ProductsCategory/ProductsCategory";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <ProductsHero />
      <ProductsIntro />
      <ProductsCategory />
    </main>
  );
}