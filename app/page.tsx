import React from 'react'
import About from "./about/page";
import Contact from "./contact/page";
import Home from "./home/page";
// import Projects from "./project/page";
import Services from "./services/page";

export default function HomePage (){
   return(
    <>
    <main className=''>
    <Home/>
      <About/>
      <Services/>
      {/* <Projects/> */}
      <Contact/>
    </main>
    </>
   )
}