import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm border-b border-gray-100 font-playfair">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with shortened name on mobile */}
          <div className="flex items-center gap-3">
            {/* <NavLink
              to="/"
              className="flex items-center gap-3 focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <motion.img
                src="https://res.cloudinary.com/dzudkzhh4/image/upload/v1753687477/49be662b-2cef-4aae-8c35-373892ce19df.png"
                alt="School Logo"
                className="w-10 h-10 rounded-full object-cover shadow-md"
                whileHover={{ scale: 1.05 }}
              />
              <div className="flex flex-col">
                <h2 className="text-gray-800 text-lg font-bold leading-tight hidden sm:block">
                  Manchanda Shishu Vikas Public School
                </h2>
                <h2 className="text-gray-800 text-lg font-bold leading-tight sm:hidden">
                  MSV Public School
                </h2>
              </div>
            </NavLink> */}

             <NavLink
            to="/"
            className="flex items-center gap-3 focus:outline-none group"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <img
                src="https://res.cloudinary.com/dzudkzhh4/image/upload/v1753687477/49be662b-2cef-4aae-8c35-373892ce19df.png"
                alt="School Logo"
                className="w-10 h-10 rounded-full object-cover shadow-md border-2 border-white"
              />
              <motion.div
                className="absolute -inset-1 bg-blue-900/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.div>
            <div className="flex flex-col">
              <h2 className="text-gray-800 text-lg font-bold leading-tight hidden sm:block">
                Manchanda Shishu Vikas Public School
              </h2>
              <h2 className="text-gray-800 text-lg font-bold leading-tight sm:hidden">
                MSV Public School
              </h2>
              <p className="text-xs text-gray-500 hidden sm:block">Where devotion meets discipline</p>
            </div>
          </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                <NavLink
                  to={item.path}
                  className={({ isActive }) => 
                    `text-sm font-medium transition-colors duration-200 ${
                      isActive 
                        ? "text-blue-900 font-semibold"
                        : "text-gray-600 hover:text-blue-900"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navUnderline"
                    className="absolute bottom-[-6px] left-0 right-0 h-0.5 bg-blue-900"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Nav Toggle */}
          <motion.button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-900 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              className="px-4 py-3 space-y-4"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={navItemVariants}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => 
                      `block px-3 py-2 rounded-md text-base font-medium ${
                        isActive
                          ? "bg-blue-50 text-blue-900"
                          : "text-gray-700 hover:bg-gray-50 hover:text-blue-900"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;