"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Transformations from "@/components/Transformations";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Statistics from "@/components/Statistics";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Statistics />
        <Services />
        <Transformations />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
