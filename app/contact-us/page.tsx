import ContactHero from "../src/components/ContactHero/page";
import ContactContent from "../src/components/ContactContent/page";
import ContactMap from "../src/components/ContactMap/page";

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-gray-50">
      <ContactHero />
      <ContactContent />
      <ContactMap />
    </main>
  );
}