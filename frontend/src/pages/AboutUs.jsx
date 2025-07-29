import { FaSchool, FaTrophy, FaPalette, FaHandsHelping } from 'react-icons/fa';
import { GiAchievement } from 'react-icons/gi';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-['Plus_Jakarta_Sans',_sans-serif] overflow-x-hidden">
      <main className="px-6 md:px-20 py-10 max-w-[1600px] mx-auto">
        {/* Page Title */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#0e151b] tracking-tight">About Our School</h1>
        </motion.div>

        {/* History Section */}
        <Section
          title="Our History"
          heading="A Legacy of Excellence"
          text="  Manchanda Shishu Vikas Public School was established in 1995 with a vision to provide quality education and holistic development to children. Over the years,
                    the school has grown into a renowned institution, known for its academic rigor, co-curricular activities, and commitment to nurturing young minds. Our values
                    are rooted in fostering a love for learning, promoting creativity, and instilling a sense of responsibility in our students. We believe in creating a supportive
                    and inclusive environment where every child can thrive and reach their full potential."
          image="https://res.cloudinary.com/dzudkzhh4/image/upload/v1753762168/bdef66d1-a1f9-4b89-b7a9-77ad3b5f8dd2.png"
        />

        {/* Principal's Message */}
        <Section
          title="Principal's Message"
          heading="Message from Principal"
          text=" At Manchanda Shishu Vikas Public School, we are dedicated to providing a nurturing and stimulating environment where every child can flourish. Our commitment
                    to academic excellence, coupled with a focus on character development, ensures that our students are well-prepared for the challenges of tomorrow. We believe in
                    fostering a love for learning, encouraging creativity, and instilling values that will guide our students throughout their lives.."
          image="https://res.cloudinary.com/dzudkzhh4/image/upload/v1753762168/bdef66d1-a1f9-4b89-b7a9-77ad3b5f8dd2.png"
        />

        {/* Achievements */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-[#0e151b] text-center mb-8">
            Achievements
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievementData.map((item, index) => (
              <motion.div variants={itemVariants} key={index}>
                <AchievementCard {...item} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Mission */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-12 bg-white rounded-lg shadow-md p-6"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-[#0e151b] text-center mb-8">
            Our Mission
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-6">
            <MissionCard 
              icon={<FaSchool className="text-blue-500 text-2xl" />} 
              title="Educational Mission" 
              description="To provide a nurturing and stimulating learning environment..."
            />
            <MissionCard 
              icon={<FaHandsHelping className="text-blue-500 text-2xl" />} 
              title="Community Mission" 
              description="To foster strong relationships with parents and the community..."
            />
          </div>
        </motion.section>
      </main>
    </div>
  );
};

const Section = ({ title, heading, text, image }) => (
  <motion.section 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={containerVariants}
    className="mb-16"
  >
    <motion.h2 variants={itemVariants} className="text-2xl font-bold text-[#0e151b] px-4 pb-2">
      {title}
    </motion.h2>
    <div className="flex flex-col md:flex-row gap-8 p-4">
      <motion.div variants={itemVariants} className="flex-1">
        <h3 className="text-xl font-semibold text-[#0e151b] mb-3">{heading}</h3>
        <p className="text-[#4e7997] text-base leading-relaxed">{text}</p>
      </motion.div>
      <motion.div 
        variants={itemVariants}
        className="flex-1 flex justify-end" // Added flex and justify-end here
      >
        <div className="w-full max-w-[500px] h-64 md:h-80 bg-gray-200 rounded-lg overflow-hidden shadow-sm">
          {/* Added max-w-[500px] to limit width on larger screens */}
          <img 
            src={image}
            alt={heading}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  </motion.section>
);
const MissionCard = ({ icon, title, description }) => (
  <motion.div 
    variants={itemVariants}
    whileHover={{ y: -4 }}
    className="flex-1 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 shadow-sm"
  >
    <div className="flex items-center gap-3 mb-4">
      
      <h3 className="text-xl font-semibold text-[#0e151b]">{title}</h3>
    </div>
    <p className="text-[#4e7997] text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const AchievementCard = ({ icon, title, description, image }) => (
  <motion.div 
    whileHover={{ scale: 1.03 }}
    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
  >
    <div className="h-48 bg-gray-200 overflow-hidden">
      <motion.img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
        initial={{ opacity: 0.8 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      />
    </div>
    <div className="p-4">
      <div className="flex items-center gap-3 mb-2">
       
        <h3 className="text-lg font-semibold text-[#0e151b]">{title}</h3>
      </div>
      <p className="text-[#4e7997] text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const achievementData = [
  {
    title: "100% Class 5 Results",
    description: " Our students consistently achieve outstanding results in Class 5 examinations, reflecting our commitment to academic excellence.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5eVRwptUe_xSl1tCdUANqa7rWKZ2pHTricYnvXWOdYFwIrSAKqwagMZCtWPEqlSWVsYH-kQnmxIquJuG8m8EBetnbk_YxR8NbRFXC4bNzvQ7qm-xLuhPQ7Uwuv-ltni88Oa54-gFDKbg5N3WDAYVGnvRIgdhYSzwOD697GwhmXIA3p4Ucze4kJhb3xqc7ztv75duHF-gQcFBb7e6S0KlDYwAhvgVNVEqMJnNYbSp1voTUEsImTYR4YclOTGMcx0z-LgWCLr0paSg"
  },
  {
    title: "Zonal Drawing Winner",
    description: " A student won first place in the Zonal Drawing Competition, showcasing the school's focus on nurturing artistic talent.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJOagvgNKOanxvKpRc8GtNaLj5dVJVVf2Yaqv3X4tmE2Wt_jjU0UZN3BZLPhOwoCwVmDU2QmOEOLCeMEYBIQQOXGB1BOKQc7BGRnyoauDk1EO8Ej0JHTQ_oLRkL1ET9aoAqF3dnSvZ_gBnROJ4jo9pU1sfPYeTNEGf5ABlRQiEi6JF5sVI4pMrCeXRYU0dEkUBI5dlCCipta1LEPfXYcXGwXOLDBhsT1isqo7evuYRrpewcj-BYRF4P6odaPUCxP8hHVMUKOc9hMw"
  },
  {
    title: "Community Engagement",
    description: "The school actively participates in various cultural and academic events, providing students with opportunities to showcase their talents and learn from divers experiences",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX1ZszkHZ80uAsmDi212Tn9Fp6Qvp8MNG_2WAEFa2JDRYYOzvbfg4TsD15eifsvOEPXDlk0uBRdwDEl02phuobGluaKvQWtxlCGODL4h3cxGjaqDDOBWe5DNQ23sAJ1uhTRDvYgSgDg6Cpy2N45QgQKJ6rxBJB3h2cX754CFBMcs6UlU--DM4wntEVvVkTb4_9TLEUhLfwoTzWOXt4WAOGB-IILUN_-9GxohBEmn-ZwAKwMZyrSnp-pR8gXqfayIaTTx6LXcAe5-o"
  }
];

export default AboutUs;
