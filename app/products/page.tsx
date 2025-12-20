import ProductsHero from "@/src/components/ProductsHero/component";
import ProductsIntro from "@/src/components/ProductsIntro/component";
import ProductsCategory from "@/src/components/ProductsCategory/component";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <ProductsHero />
      <ProductsIntro />
      <ProductsCategory />
    </main>
  );
}