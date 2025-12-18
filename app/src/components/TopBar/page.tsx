import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-gradient-to-r from-primary-800 to-primary-700 text-white py-2.5 px-4 border-b border-primary-600/30">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
        <div className="flex gap-6">
          <a
            href="mailto:info@sambhavexporter.com"
            className="flex items-center gap-2 hover:text-primary-100 transition-colors font-medium"
          >
            <Mail size={16} />
            <span className="hidden sm:inline">info@sambhavexporter.com</span>
          </a>
          <a
            href="tel:+919850492837"
            className="flex items-center gap-2 hover:text-primary-100 transition-colors font-medium"
          >
            <Phone size={16} />
            <span className="hidden sm:inline">+91-9850492837</span>
          </a>
        </div>
        <div className="flex gap-3">
          <a href="#" className="hover:text-primary-100 transition-colors hover:scale-110 transition-transform">
            <Facebook size={16} />
          </a>
          <a href="#" className="hover:text-primary-100 transition-colors hover:scale-110 transition-transform">
            <Twitter size={16} />
          </a>
          <a href="#" className="hover:text-primary-100 transition-colors hover:scale-110 transition-transform">
            <Linkedin size={16} />
          </a>
          <a href="#" className="hover:text-primary-100 transition-colors hover:scale-110 transition-transform">
            <Instagram size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
