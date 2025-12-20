import ContactHero from "../src/components/ContactHero/ContactHero";
import ContactContent from "../src/components/ContactContent/ContactContent";
import ContactMap from "../src/components/ContactMap/ContactMap";

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-gray-50">
      <ContactHero />
      <ContactContent />
      <ContactMap />
    </main>
  );
}