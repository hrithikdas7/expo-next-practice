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
    <div className="bg-linear-to-r from-primary-600  to-green-700 text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
        <div className="flex gap-6">
          <a
            href="mailto:info@sambhavexporter.com"
            className="flex items-center gap-2 hover:text-green-100"
          >
            <Mail size={16} />
            <span className="hidden sm:inline">info@sambhavexporter.com</span>
          </a>
          <a
            href="tel:+919850492837"
            className="flex items-center gap-2 hover:text-green-100"
          >
            <Phone size={16} />
            <span className="hidden sm:inline">+91-9850492837</span>
          </a>
        </div>
        <div className="flex gap-3">
          <a href="#" className="hover:text-green-100">
            <Facebook size={16} />
          </a>
          <a href="#" className="hover:text-green-100">
            <Twitter size={16} />
          </a>
          <a href="#" className="hover:text-green-100">
            <Linkedin size={16} />
          </a>
          <a href="#" className="hover:text-green-100">
            <Instagram size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
