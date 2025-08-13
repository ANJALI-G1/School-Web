import { MdLocationOn, MdMail, MdPhone } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-gray-50 font-roboto">
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
                className="text-4xl md:text-6xl font-bold mb-4 leading-tight font-roboto"
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
                <Link 
                  to="/gallery" 
                  className="bg-blue-900 hover:bg-blue-950 px-6 py-3 text-lg font-medium transition-all transform hover:scale-105 shadow-lg text-white rounded-sm"
                >
                  View Gallery
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 text-lg font-medium transition-all transform hover:scale-105 shadow-lg text-white rounded-sm"
                >
                  Contact Us
                </Link>
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
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800 font-playfair">
              About Our School
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Manchanda Shishu Vikas Public School is dedicated to providing a nurturing and stimulating environment for children from Playway to Class 5. Our curriculum blends traditional values with modern teaching methods, fostering both academic excellence and personal growth.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe in holistic development, where each child's unique potential is recognized and nurtured through a blend of academic rigor and extracurricular activities.
            </p>
            <Link 
              to="/about" 
              className="inline-block bg-blue-900 hover:bg-blue-950 px-6 py-3 text-lg font-medium transition-all transform hover:scale-105 shadow-lg text-white rounded-sm"
            >
              Learn More
            </Link>
          </motion.div>
          <motion.div variants={fadeIn('left', 'spring', 0.4, 1)}>
            <div className="overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://res.cloudinary.com/dzudkzhh4/image/upload/v1753762168/bdef66d1-a1f9-4b89-b7a9-77ad3b5f8dd2.png"
                alt="School building"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-gray-100 px-4" id="gallery-preview">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeIn('down', 'spring', 0.2, 1)}
              className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800 font-playfair"
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
                <Link to="/gallery" key={item}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  >
                    <img
                      src="https://res.cloudinary.com/dzudkzhh4/image/upload/v1753762168/bdef66d1-a1f9-4b89-b7a9-77ad3b5f8dd2.png"
                      alt={`Gallery ${item}`}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                </Link>
              ))}
            </motion.div>

            <motion.div
              variants={fadeIn('up', 'spring', 0.8, 1)}
              className="text-center mt-12"
            >
              <Link 
                to="/gallery" 
                className="inline-block bg-blue-900 hover:bg-blue-950 px-6 py-3 text-lg font-medium transition-all transform hover:scale-105 shadow-lg text-white rounded-sm"
              >
                View Full Gallery
              </Link>
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
            className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800 font-playfair"
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
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {/* Phone Card */}
            <div className="bg-white p-8 rounded-sm border border-gray-200 hover:border-blue-900 transition-all shadow-sm hover:shadow-md">
              <div className=" w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto border-1 border-black p-3">
                <img src="./phone.png" className="bg-white"/>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">Phone</h3>
              <p className="text-gray-700 text-center">+91 98765 43210</p>
            </div>

            {/* Email Card */}
            <div className="bg-white p-8 rounded-sm border border-gray-200 hover:border-blue-900 transition-all shadow-sm hover:shadow-md">
              <div className=" w-16 h-16 rounded-full flex items-center justify-center mb-4 border-1 border-black p-2 mx-auto">
                <img src="./email2.png" className="bg-white rounded-full"/>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">Email</h3>
              <p className="text-gray-700 text-center">info@manchandaschool.edu</p>
            </div>

            {/* Address Card */}
            <div className="bg-white p-8 rounded-sm border border-gray-200 hover:border-blue-900 transition-all shadow-sm hover:shadow-md">
              <div className=" w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto border-1 border-black p-3">
                <img src="./location.png"/>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">Address</h3>
              <p className="text-gray-700 text-center">
                11, Street Number 14,<br />Near Sarojini Park,<br />Delhi 110031
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 'spring', 0.8, 1)}
            className="text-center mt-12"
          >
            <Link 
              to="/contact" 
              className="inline-block bg-blue-900 hover:bg-blue-950 px-6 py-3 text-lg font-medium transition-all transform hover:scale-105 shadow-lg text-white rounded-sm"
            >
              Admission Enquiry
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default HomePage;