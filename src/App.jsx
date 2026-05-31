import React from "react";
import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
      </main>
    </>
  );
}
