import React from "react";
import { Link } from "react-scroll";
import App from "./App";
import { HiArrowNarrowRight } from "react-icons/hi";
import Navbar from "./components/Navbar"

const Nettt = () => {
  return (
    <div>
      <Navbar/>
      <div name="skills" className="w-full h-screen bg-[#000000] pt-60 lg:pt-10 text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
        <br/>
          <br/>
          <br/>
          <br/>
          <p className="text-4xl font-bold inline border-b-4 border-[#8F805F] ">
            Case Nettt Interactieve Media (stage)
          </p>
          <p className="py-4">
            Nettt Interactieve Media is op zoek naar een vernieuwde website die
            hun digitale representatie versterkt in de huidige markt.
            <br />
            <br />
            Aan mij dus de taak om een website met bijpassende mediaproducten te
            ontwikkelen. De website moet voldoen aan de standaard
            functionaliteiten van Nettt Interactieve Media. Het eindproduct moet
            gemaakt worden op basis van een huidig CMS-systeem: Statamic. Naast
            het realiseren van deze bovenstaande mediaproducten is het ook
            belangrijk om UI en UX-onderzoek te doen, zodat de behoefte bij de
            doelgroep kan meten en mijn mediaproducten hierdoor kan valideren.

            Uit deze probleemstelling is een deliverable gerealiseerd: (zie de link naar de website.)
          </p>
        </div>
        <a href="https://mustafa.nettt.nl" target="_blank" className="text-[#FFFFFF] border-2 px-6 py-3 my-2 flex items-center hover:bg-[#8F805F] hover:border-[#8F805F] ease-in duration-300">
          <Link to="work" smooth={true} duration={500}>
            Website Nettt Interactieve Media(high fidelity prototype)
          </Link>
          <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3" />
          </span>
        </a>
        <a
          href="https://mustafamaalin.nl/#skills"
          className="text-[#FFFFFF] border-2 px-6 py-3 my-2 flex items-center hover:bg-[#8F805F] hover:border-[#8F805F] ease-in duration-300"
        >
          <Link to="work" smooth={true} duration={500}>
            Terug naar Homepage
          </Link>
          <span href="https://mustafamaalin.nl/" className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3" />
          </span>
        </a>
        <br/>
          <br/>
      </div>
    </div>
    </div>
  );
};

export default Nettt;
