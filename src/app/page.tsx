"use client";

import { useState } from "react";
import BackgroundVideo from "@/components/BackgroundVideo";
import Preloader from "@/components/Preloader";
import Hero from "@/components/sections/Hero";
import Stepper from "@/components/sections/Stepper";
import Transformations from "@/components/sections/Transformations";
import Offer from "@/components/sections/Offer";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [isReady, setIsReady] = useState(false);

  return (
    <main className="relative">
      <Preloader onComplete={() => setIsReady(true)} />
      <BackgroundVideo />
      <Hero isReady={isReady} />
      <Stepper />
      <Transformations />
      <Offer />
      <Testimonials />
      <Footer />
    </main>
  );
}
