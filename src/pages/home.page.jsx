import React from 'react'
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Card from "@/components/projectsC"
import VisionMission from '@/components/VaM'
import Footer from "@/components/footer"


export default function homepage() {
  return (
    <div>

          <Hero/>
          <About/>
            <Card/>
            <VisionMission/>

    </div>
  )
}
