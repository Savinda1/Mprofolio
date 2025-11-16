import { Button } from "@/components/ui/button"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skill"
import Projects from "./components/Projects"
import Footer from "./components/footer"
export default function App() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Footer/>

    </div>
  )
}
