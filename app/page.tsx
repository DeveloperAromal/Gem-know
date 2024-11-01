import CustomHeader from "./components/includes/CustomHeader"
import Hero from "./components/screens/Hero"
import About from "./components/screens/About"
import Founder from "./components/screens/Founder"
import Mission from "./components/screens/Mission"
import Achievements from "./components/screens/Achivements"
import Specialites from "./components/screens/Speciality"
import Testimonial from "./components/screens/Testimonial"
import Map from "./components/screens/Map"
import Contact from "./components/screens/Contact"
import Footer from "./components/screens/Footer"

export default function LandingPage(){
  return(
    <main>
      <CustomHeader />
      <Hero />
      <About />
      <Founder />
      <Mission />
      <Achievements />
      <Specialites />
      <Testimonial />
      <Map />
      <Contact />
      <Footer />
    </main>
  )
}