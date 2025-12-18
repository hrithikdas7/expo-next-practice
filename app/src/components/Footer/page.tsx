import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:text-primary-200 transition-colors">
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-primary-200 transition-colors">
            <Twitter size={24} />
          </a>
          <a href="#" className="hover:text-primary-200 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="hover:text-primary-200 transition-colors">
            <Instagram size={24} />
          </a>
        </div>
        <p className="text-primary-100">
          © 2024 Sambhav Exporter. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
