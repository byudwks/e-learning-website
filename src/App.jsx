import React from "react";
import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Courses from "./components/Courses";
import Testimoni from "./components/Testimoni";
import Faq from "./components/Faq";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Courses />
        <Testimoni />
        <Faq />
      </main>
    </>
  );
}
