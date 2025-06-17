import React from "react";
import About from "./about/page";
import Contact from "./contact/page";
import Home from "./home/page";
import Projects from "./project/page";
import Services from "./services/page";
import AnimationWrapper from "./components/ScrollAnimation/ScrollAnimation";

export default function HomePage() {
  return (
    <>
      <main className="">
        <AnimationWrapper>
          <Home />
        </AnimationWrapper>
        <AnimationWrapper>
        <About />
        </AnimationWrapper>
        <Services />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
