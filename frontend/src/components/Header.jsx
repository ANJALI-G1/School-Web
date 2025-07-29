import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation items
  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About Us", path: "#about" },
    { name: "Gallery", path: "#gallery" },
    { name: "Contact Us", path: "#contact" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7eef3] px-10 py-3 bg-white">
      <motion.div 
        initial="hidden"
        animate="show"
        className="container mx-auto flex items-center justify-between w-full"
      >
        {/* Logo/Brand */}
        <motion.div 
          className="flex items-center gap-4 text-[#0e151b]"
          whileHover={{ scale: 1.05 }}
        >
          <motion.img
            src="https://res.cloudinary.com/dzudkzhh4/image/upload/v1753687477/49be662b-2cef-4aae-8c35-373892ce19df.png"
            alt="School Logo"
            className="w-10 h-10 rounded-full object-cover"
            whileHover={{ rotate: 10 }}
          />
          <motion.h2 className="text-[#0e151b] text-lg font-bold leading-tight tracking-[-0.015em]">
            Manchanda Shishu Vikas Public School
          </motion.h2>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:flex flex-1 justify-end gap-8"
          variants={containerVariants}
        >
          <div className="flex items-center gap-9">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.path}
                className="text-[#0e151b] text-sm font-medium leading-normal relative"
                variants={itemVariants}
                whileHover={{ 
                  color: "#1990e5",
                }}
              >
                {item.name}
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1990e5]"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>
    
        </motion.nav>

        {/* Mobile Navigation Toggle */}
        <motion.div 
          className="md:hidden z-50"
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? (
            <FaTimes 
              size={24} 
              className="text-[#0e151b] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FaBars 
              size={24} 
              className="text-[#0e151b] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </motion.div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-white pt-24 px-6 flex flex-col items-center space-y-8"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.path}
                className="text-lg font-medium text-[#0e151b] hover:text-[#1990e5]"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </motion.div>
    </header>
  );
};

export default Header;