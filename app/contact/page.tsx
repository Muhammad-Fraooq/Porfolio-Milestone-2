import ContactForm from "../components/ContactFrom/ContactFrom";
import React from "react";
import AnimationWrapper from "../components/ScrollAnimation/ScrollAnimation";

export default function ContactPage() {
  return (
    <div>
      <AnimationWrapper>
      <ContactForm />
      </AnimationWrapper>
    </div>
  );
}
