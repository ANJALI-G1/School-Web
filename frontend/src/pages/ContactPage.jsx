import { motion } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';
import { useState } from "react";
import { MdLocationOn, MdPhone, MdEmail, MdCheckCircle } from "react-icons/md";
import { div } from "motion/react-client";

const ContactPage = () => {
    const [state, handleSubmit] = useForm('xyzpjbjv');
    const [submitted, setSubmitted] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.8 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    };



    return (
        <div className="bg-gray-50 font-['Plus_Jakarta_Sans',_sans-serif] overflow-x-hidden">


            {/* Hero Section */}
            <section className="relative bg-blue-900 text-white py-20">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">Contact Us</h1>
                        <p className="text-xl max-w-3xl mx-auto font-roboto">We'd love to hear from you. Reach out for admissions or any inquiries.</p>
                    </motion.div>
                </div>
            </section>
            <motion.div
                initial="hidden"
                animate="show"
                variants={containerVariants}
                className="max-w-7xl mx-auto px-4 py-8 md:px-6 "
            >
                {/* Header */}
                {/* <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 font-playfair">Contact Us</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto font-roboto">
                        We'd love to hear from you. Reach out for admissions or any inquiries.
                    </p>
                </motion.div> */}


                {/* contact info */}

                <motion.div variants={itemVariants} className="mb-12">
                    <h2 className="text-2xl  text-gray-800 mb-6 font-playfair font-semibold">Contact Information</h2>
                    <div className="bg-white rounded-sm shadow-md overflow-hidden">
                        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 gap-2">
                            <div className="p-6 flex items-start gap-4">
                                <div className=" w-16 h-16 rounded-full flex items-center justify-center">
                                    <img src="./location.png" alt="Location" className="" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-500 mb-1">Address</h3>
                                    <p className="text-gray-700">
                                        11, Street Number 14, near Sarojini Park, Shastri Nagar, Geeta Colony, Delhi, 110031
                                    </p>
                                </div>
                            </div>
                            <div className="p-6 flex items-start gap-4">
                                <div className=" w-16 h-16 rounded-full flex items-center justify-center">
                                    <img src="./phone.png" alt="Phone" className="" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-500 mb-1">Phone Number</h3>
                                    <p className="text-gray-700">+91 44456221</p>
                                </div>
                            </div>
                            <div className="p-6 flex items-start gap-4">
                                <div className="w-16 h-16 rounded-full flex items-center justify-center">
                                    <img src="./email2.png" alt="Email" className=" rounded-full" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-500 mb-1">Email ID</h3>
                                    <p className="text-gray-700">Manchanda@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-12">
                    <h2 className="text-2xl  text-gray-800 mb-6 font-playfair font-semibold">Our Location</h2>
                    <div className=" overflow-hidden shadow-lg">
                        <iframe

                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5196538542264!2d77.27610469999999!3d28.644155200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfca4c488f755%3A0xe8e45160fd7cfe!2s11%2C%20Street%20Number%2014%2C%20near%20Sarojini%20Park%2C%20Shastri%20Nagar%2C%20Geeta%20Colony%2C%20Delhi%2C%20110031!5e0!3m2!1sen!2sin!4v1753767084279!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-sm"
                        ></iframe>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <h2 className="text-2xl  text-gray-800 mb-6 font-playfair font-semibold">Admission Enquiry</h2>

                    {!submitted ? (
                        <motion.div
                            id="enquiry-form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-sm shadow-md p-6 md:p-8"
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                            Parent's Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-blue-950  outline-none transition"
                                        />
                                        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
                                    </div>
                                    <div>
                                        <label htmlFor="age" className="block text-gray-700 font-medium mb-2">
                                            Child's Age <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="age"
                                            type="number"
                                            name="age"
                                            min="2"
                                            max="12"
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-blue-950  outline-none transition"
                                        />
                                        <ValidationError prefix="Age" field="age" errors={state.errors} className="text-red-500 text-sm mt-1" />
                                    </div>
                                    <div>
                                        <label htmlFor="class" className="block text-gray-700 font-medium mb-2">
                                            Class Interested In <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            id="class"
                                            name="class"
                                            required
                                            className="w-full px-4 py-2 border border-gray-300  focus:ring-2 focus:ring-blue-900 focus:border-blue-950 outline-none transition"
                                        >
                                            <option value="">Select a class</option>
                                            <option value="Playway">Playway</option>
                                            <option value="Nursery">Nursery</option>
                                            <option value="KG">KG</option>
                                            <option value="Class 1">Class 1</option>
                                            <option value="Class 2">Class 2</option>
                                            <option value="Class 3">Class 3</option>
                                            <option value="Class 4">Class 4</option>
                                            <option value="Class 5">Class 5</option>
                                        </select>
                                        <ValidationError prefix="Class" field="class" errors={state.errors} className="text-red-500 text-sm mt-1" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            name="phone"
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 r focus:ring-2 focus:ring-blue-900 focus:border-blue-950 outline-none transition"
                                        />
                                        <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 text-sm mt-1" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-2 border border-gray-300  focus:ring-2 focus:ring-blue-900 focus:border-blue-950 outline-none transition"
                                        />
                                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-blue-950  outline-none transition"
                                    ></textarea>
                                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="pt-2">
                                    <motion.button
                                        type="submit"
                                        disabled={state.submitting}
                                        onClick={() => setSubmitted(true)}
                                        className="w-full md:w-auto px-8 py-3 bg-blue-900 text-white font-medium  hover:bg-blue-950 transition"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {state.submitting ? 'Submitting...' : 'Submit'}
                                    </motion.button>

                                </div>
                            </form>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white rounded-xl shadow-md p-8 text-center"
                        >
                            <div className="flex justify-center mb-4">
                                <MdCheckCircle className="text-green-500 text-6xl" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                            <p className="text-gray-600 mb-6">
                                Your enquiry has been submitted successfully. We'll get back to you soon.
                            </p>
                            <motion.button
                                onClick={() => {
                                    setSubmitted(false);
                                    setTimeout(() => {
                                        const formElement = document.getElementById('enquiry-form');
                                        if (formElement) {
                                            window.scrollTo({
                                                top: formElement.offsetTop - 100,
                                                behavior: 'smooth'
                                            });
                                        }
                                    }, 50);
                                }}
                                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Submit Another Enquiry
                            </motion.button>
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>
        </div>

    );
};

export default ContactPage;



