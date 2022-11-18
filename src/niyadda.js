import React from "react";
import Navbar from "./components/Navbar";
import { Link } from "react-scroll";
import App from "./App";
import { HiArrowNarrowRight } from "react-icons/hi";


const Niyadda = () => {
  return (
    <div>
      <Navbar />
    <div name="skills" className="w-full h-screen bg-[#000000] pt-60 lg:pt-10 text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <p className="text-4xl font-bold inline border-b-4 border-[#8F805F] ">
            Case Niyadda Digital Agency
          </p>
          <p className="py-4">
            Niyadda Digital Agency is een opkomende bedrijf opgericht door Mustafa
            Maalin(ik) en Kalid Warsame. Ons doel is om betaalbare, schone en
            mooie websites, applicaties en corporate branding te maken voor de
            mensen in Somalië. Om uw producten de best mogelijke indruk te geven
            doorlopen wij het proces van top tot teen om uw website zo goed
            mogelijk te laten opvallen. Geïnspireerd door moderne ontwerpen en
            het feit dat we enthousiast zijn om nieuwe manieren van programmeren
            te leren, ontstaat een interactief samenspel waarin functionaliteit
            en originaliteit op een volkomen natuurlijke manier worden
            geïntegreerd in een sterk totaalconcept.
            <br />
            <br />
            In de link hieronder kunt u meer informatie vinden over het proces die ik doorlopen heb om antwoord te geven op de volgende hoofdvraagstuk: <br />
            <br />

           <span className=" font-bold"> Hoe kan Niyadda Digital Agency hun markt uitbreiden met een goedkope oplossing voor kleinere bedrijven in Somalië, zodat ook de kleinere bedrijven kunnen profiteren van digitale vertegenwoordiging?</span>
          </p>
        </div>
        <div className="pb-20 bg-black">
        <a target="_blank" href="https://www.notion.so/mustafamaalin/Leeswijzer-Individueel-Project-dbe76a6e326c4299bee012fc750739be" className="text-[#FFFFFF] border-2 px-6 py-3 my-2 flex items-center bg-black hover:bg-[#8F805F] hover:border-[#8F805F] ease-in duration-300">
          <Link to="work" smooth={true} duration={500}>
          View Work(notion Niyadda)
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
          <br/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Niyadda;
