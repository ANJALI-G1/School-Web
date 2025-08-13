import { motion } from 'framer-motion';
import { FaSchool, FaTrophy, FaHandsHelping } from 'react-icons/fa';
import { GiAchievement } from 'react-icons/gi';

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
    <div className="min-h-screen bg-gray-50 font-roboto overflow-x-hidden">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">About Our School</h1>
            <p className="text-xl max-w-3xl mx-auto font-roboto">Discover our legacy of excellence in education</p>
          </motion.div>
        </div>
      </section>

      <main className="px-6 md:px-8 py-12">
        {/* History Section */}
        <Section
          title="Our History"
          heading="A Legacy of Excellence"
          text="Manchanda Shishu Vikas Public School was established in 1995 with a vision to provide quality education and holistic development to children. Over the years, the school has grown into a renowned institution, known for its academic rigor, co-curricular activities, and commitment to nurturing young minds."
          image="https://res.cloudinary.com/dzudkzhh4/image/upload/v1753762168/bdef66d1-a1f9-4b89-b7a9-77ad3b5f8dd2.png"
          reverse={false}
        />

        {/* Principal's Message */}
        <Section
          title="Principal's Message"
          heading="Message from Principal"
          text="At Manchanda Shishu Vikas Public School, we are dedicated to providing a nurturing and stimulating environment where every child can flourish. Our commitment to academic excellence, coupled with a focus on character development, ensures that our students are well-prepared for the challenges of tomorrow."
          image="https://res.cloudinary.com/dzudkzhh4/image/upload/v1753762168/bdef66d1-a1f9-4b89-b7a9-77ad3b5f8dd2.png"
          reverse={true}
          signature={
            <div className="mt-8 flex flex-col items-end">
              <div className="transform rotate-2 origin-right">
                <span className="text-2xl font-bold text-blue-900 font-[cursive]">Sunita Manchanda</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="inline-block ml-2 text-blue-900"
                >
                  <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                  <path d="M2 2l7.586 7.586"></path>
                  <circle cx="11" cy="11" r="2"></circle>
                </svg>
              </div>
              <div className="w-32 h-px bg-blue-900 mt-1"></div>
              <p className="text-sm text-gray-500 mt-1">Principal</p>
            </div>
          }
        />

        {/* Achievements Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 font-playfair">Our Achievements</h2>
                <div className="w-20 h-1 bg-blue-900 mx-auto"></div>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievementData.map((item, index) => (
                  <motion.div 
                    variants={itemVariants} 
                    key={index}
                    whileHover={{ y: -5 }}
                  >
                    <AchievementCard {...item} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 font-playfair">Our Mission & Vision</h2>
                <div className="w-20 h-1 bg-blue-900 mx-auto"></div>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <MissionCard 
                  icon={<img src='./cap.png' className='size-30 bg-white'/>} 
                  title="Educational Mission" 
                  description="To provide a nurturing and stimulating learning environment that empowers students to achieve academic excellence while developing strong character and lifelong learning skills."
                />
                <MissionCard 
                  icon={<img src='./community.png' className='size-30 bg-white'/>} 
                  title="Community Mission" 
                  description="To foster strong relationships with parents and the community, creating partnerships that support student success and contribute to the betterment of society."
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 font-playfair">Our Core Values</h2>
                <div className="w-20 h-1 bg-blue-900 mx-auto"></div>
              </motion.div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <ValueCard 
                  title="Excellence" 
                  description="We strive for the highest standards in all aspects of education" 
                />
                <ValueCard 
                  title="Integrity" 
                  description="We uphold honesty and strong moral principles in all our actions" 
                />
                <ValueCard 
                  title="Respect" 
                  description="We value diversity and treat everyone with dignity" 
                />
                <ValueCard 
                  title="Innovation" 
                  description="We embrace creativity and new approaches to learning" 
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

// Section Component
const Section = ({ title, heading, text, image, reverse, signature }) => (
  <section className={`py-16 ${reverse ? 'bg-gray-100' : 'bg-white'}`}>
    <div className="max-w-7xl mx-auto px-6">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}
      >
        <motion.div 
          variants={itemVariants}
          className={`flex-1 ${reverse ? 'md:pl-12' : 'md:pr-12'}`}
        >
          <h2 className="text-xl font-semibold text-blue-900 mb-2 font-roboto">{title}</h2>
          <h3 className="text-3xl font-bold text-gray-800 mb-6 font-playfair">{heading}</h3>
          <p className="text-gray-600 leading-relaxed mb-6 font-roboto">{text}</p>
          {signature || (
            <button className="bg-blue-900 hover:bg-blue-950 text-white px-6 py-3 font-roboto transition">
              Learn More
            </button>
          )}
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="flex-1"
        >
          <div className="rounded-sm overflow-hidden shadow-sm aspect-video">
            <img 
              src={image}
              alt={heading}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// Achievement Card
const AchievementCard = ({ title, description, image }) => (
  <div className="bg-white rounded-sm shadow-sm overflow-hidden h-full flex flex-col transition-all hover:shadow-md">
    <div className="h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className=" p-2 rounded-sm">
          <img src='./award.png' className='size-7'/>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 font-playfair">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4 flex-1 font-roboto">{description}</p>
      
    </div>
  </div>
);

// Mission Card
const MissionCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:shadow-md transition-all h-full">
    <div className="flex items-start gap-4">
      <div className=" p-3 rounded-sm">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-3 font-playfair">{title}</h3>
        <p className="text-gray-600 font-roboto">{description}</p>
      </div>
    </div>
  </div>
);

// Value Card
const ValueCard = ({ title, description }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 hover:shadow-md transition-all text-center"
  >
    <div className=" w-5 h-5 rounded-sm flex items-center justify-center mx-auto mb-4">
      <img src='./trophy.png'/>
    </div>
    <h4 className="text-xl font-bold text-gray-800 mb-2 font-playfair">{title}</h4>
    <p className="text-gray-600 font-roboto">{description}</p>
  </motion.div>
);

const achievementData = [
  {
    title: "100% Class 5 Results",
    description: "Our students consistently achieve outstanding results in Class 5 examinations, reflecting our commitment to academic excellence.",
    image: "https://res.cloudinary.com/dzudkzhh4/image/upload/v1753762168/bdef66d1-a1f9-4b89-b7a9-77ad3b5f8dd2.png"
  },
  {
    title: "Zonal Drawing Winner",
    description: "A student won first place in the Zonal Drawing Competition, showcasing the school's focus on nurturing artistic talent.",
    image: "https://res.cloudinary.com/dzudkzhh4/image/upload/v1753762168/bdef66d1-a1f9-4b89-b7a9-77ad3b5f8dd2.png"
  },
  {
    title: "Community Engagement",
    description: "The school actively participates in various cultural and academic events, providing students with opportunities to showcase their talents.",
    image: "https://res.cloudinary.com/dzudkzhh4/image/upload/v1753762168/bdef66d1-a1f9-4b89-b7a9-77ad3b5f8dd2.png"
  }
];

export default AboutUs;