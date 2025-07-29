import { div } from "motion/react-client"
import { motion } from "motion/react"

const HeroSection = () => {
  return (
    <div className=" max-w-8xl items-center mx-auto">
        <div className="min-h-[90%] bg-cover bg-center" style={{backgroundImage:"url(https://res.cloudinary.com/dzudkzhh4/image/upload/v1753691283/14de7553-1daa-4d68-b98d-6901047b57cb.png)"}}>
        <div className="min-h-screen  bg-black/40 flex flex-col justify-center items-center text-white gap-2">
            <h1 className="text-3xl md:text-4xl text-center">Welcome to Manchanda Shishu Vikas</h1>
            <h1 className="text-3xl md:text-4xl text-center">Public School</h1>
            <p className="text-center">From Playway to Class 5 - Where Devotion meets Discipline</p>
            <div className="flex gap-4 m-3 items-center">
                <motion.button className=" bg-blue-500 px-4 py-2 rounded-md">View Gallery</motion.button>
                <motion.button className=" bg-blue-500 px-4 py-2 rounded-md">Contact Us</motion.button>
            </div>

           
        </div>
        
       </div>
    </div>
  )
}
export default HeroSection