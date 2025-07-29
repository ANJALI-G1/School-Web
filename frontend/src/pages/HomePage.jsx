import { MdLocationOn, MdMail, MdPhone } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="min-h-screen bg-cover bg-center bg-fixed" 
          style={{
            backgroundImage: "url(https://res.cloudinary.com/dzudkzhh4/image/upload/v1753691283/14de7553-1daa-4d68-b98d-6901047b57cb.png)"
          }}
        >
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <motion.div 
              initial="hidden"
              animate="show"
              variants={staggerContainer}
              className="max-w-4xl mx-auto text-center px-4 text-white"
            >
              <motion.h1 
                variants={fadeIn('down', 'spring', 0.2, 1)}
                className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
              >
                Welcome to Manchanda Shishu Vikas Public School
              </motion.h1>
              <motion.p 
                variants={fadeIn('down', 'spring', 0.4, 1)}
                className="text-xl md:text-2xl mb-8 font-medium"
              >
                Where Devotion meets Discipline
              </motion.p>
              <motion.div 
                variants={fadeIn('up', 'spring', 0.6, 1)}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-medium transition-all transform hover:scale-105 shadow-lg">
                  View Gallery
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg text-lg font-medium transition-all transform hover:scale-105">
                  Contact Us
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeIn('right', 'spring', 0.2, 1)}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              About Our School
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Manchanda Shishu Vikas Public School is dedicated to providing a nurturing and stimulating environment for children from Playway to Class 5. Our curriculum blends traditional values with modern teaching methods, fostering both academic excellence and personal growth.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe in holistic development, where each child's unique potential is recognized and nurtured through a blend of academic rigor and extracurricular activities.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105">
              Learn More
            </button>
          </motion.div>
          <motion.div variants={fadeIn('left', 'spring', 0.4, 1)}>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://res.cloudinary.com/dzudkzhh4/image/upload/v1753762168/bdef66d1-a1f9-4b89-b7a9-77ad3b5f8dd2.png" 
                alt="School building" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-gray-100 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeIn('down', 'spring', 0.2, 1)}
              className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800"
            >
              Our Gallery
            </motion.h2>
            <motion.p 
              variants={fadeIn('down', 'spring', 0.4, 1)}
              className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto"
            >
              Glimpses of our vibrant school life and activities
            </motion.p>
            
            <motion.div 
              variants={fadeIn('up', 'spring', 0.6, 1)}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[1, 2, 3, 4].map((item) => (
                <motion.div 
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
                >
                  <img 
                    src="https://res.cloudinary.com/dzudkzhh4/image/upload/v1753762168/bdef66d1-a1f9-4b89-b7a9-77ad3b5f8dd2.png" 
                    alt={`Gallery ${item}`}
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              variants={fadeIn('up', 'spring', 0.8, 1)}
              className="text-center mt-12"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105">
                View Full Gallery
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeIn('down', 'spring', 0.2, 1)}
            className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800"
          >
            Contact Us
          </motion.h2>
          <motion.p 
            variants={fadeIn('down', 'spring', 0.4, 1)}
            className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto"
          >
            We'd love to hear from you. Reach out for admissions or any inquiries.
          </motion.p>
          
          <motion.div 
            variants={fadeIn('up', 'spring', 0.6, 1)}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MdPhone size={24} className="text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Phone</h3>
              <p className="text-gray-600">+91 3494944</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MdMail size={24} className="text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Email</h3>
              <p className="text-gray-600">Manchanda@gmail.com</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MdLocationOn size={24} className="text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Address</h3>
              <p className="text-gray-600">
                11, Street Number 14, near Sarojini Park, Shastri Nagar, Geeta Colony, Delhi, 110031
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeIn('up', 'spring', 0.8, 1)}
            className="text-center mt-12"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105">
              Admission Enquiry
            </button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;