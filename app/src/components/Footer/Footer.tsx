import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary-900 to-primary-950 text-white py-12 px-4 border-t border-primary-800">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center gap-8 mb-8">
          <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-primary-300 hover:-translate-y-1 transition-all duration-300">
            <Facebook size={20} />
          </a>
          <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-primary-300 hover:-translate-y-1 transition-all duration-300">
            <Twitter size={20} />
          </a>
          <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-primary-300 hover:-translate-y-1 transition-all duration-300">
            <Linkedin size={20} />
          </a>
          <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-primary-300 hover:-translate-y-1 transition-all duration-300">
            <Instagram size={20} />
          </a>
        </div>
        <p className="text-primary-100/60 text-sm">
          © {new Date().getFullYear()} Sambhav Export. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
