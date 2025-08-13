import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: <FaFacebook />, url: "https://facebook.com" },
    { icon: <FaInstagram />, url: "https://instagram.com" },
    { icon: <FaTwitter />, url: "https://twitter.com" },
    { icon: <FaYoutube />, url: "https://youtube.com" },
  ];

  const navLinks = [
    { label: "About", path: "/about" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
    { label: "Privacy Policy", path: "/privacy" },
  ];

  return (
    <motion.footer 
      className="bg-blue-950  border-t border-blue-900/20 dark:border-gray-700 text-gray-300 px-6 py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* School Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Manchanda Shishu Vikas Public School</h3>
            <p className="text-sm">Providing quality education since 1995</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <a 
                    href={link.path} 
                    className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  aria-label={`${social.url.split('//')[1]} link`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center sm:text-left">
            © {currentYear} Manchanda Shishu Vikas Public School. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Designed with ❤️ for our students
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;