import ContactHero from "@/src/components/ContactHero/component";
import ContactContent from "@/src/components/ContactContent/component";
import ContactMap from "@/src/components/ContactMap/component";

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-gray-50">
      <ContactHero />
      <ContactContent />
      <ContactMap />
    </main>
  );
}