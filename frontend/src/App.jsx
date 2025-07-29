import Header from "./components/Header"

import { motion } from "motion/react"
import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPage"
import AboutUs from "./pages/AboutUs"
const App = () => {
  return (
    <div>
      <Header/>
      <HomePage/>
      <ContactPage/>
      <AboutUs/>
    </div>
  )
}
export default App