import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-green-700 to-green-800 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:text-green-200">
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-green-200">
            <Twitter size={24} />
          </a>
          <a href="#" className="hover:text-green-200">
            <Linkedin size={24} />
          </a>
          <a href="#" className="hover:text-green-200">
            <Instagram size={24} />
          </a>
        </div>
        <p className="text-green-100">
          © 2024 Sambhav Exporter. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
