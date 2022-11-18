import React from "react";
import { Link } from "react-scroll";
import App from "./App";
import { HiArrowNarrowRight } from "react-icons/hi";
import Navbar from "./components/Navbar"

const Decello = () => {
  
  return (
    <div>
      <Navbar/>
      <div name="skills" className="w-full h-screen bg-[#000000] pt-60 lg:pt-10 text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <br/>
          <br/>
          <p className="text-4xl font-bold inline border-b-4 border-[#8F805F] ">
            Case Decello
          </p>
          <p className="py-4">
            In mijn 5de semester heb ik de minor Smart Mobile gevolgd. Tijdens
            dit project heb ik gewerkt aan een PWA met een aantal groepsgenoten.
            <br />
            <br />
            Door Covid zijn de tijden veranderd en mogen we niet dicht bij
            elkaar staan ​​of zitten. Dat maakt het voor Sounding Bodies
            moeilijk om hun werk te doen. Zij willen graag mensen bij elkaar
            brengen of beter laten voelen door de app te gebruiken en het
            grotere doel is om bij te dragen aan de positieve gezondheid van
            iedereen.
            <br />
            <br />
            Onze probleemstelling gaat als volgt: Door Covid zijn de tijden
            veranderd en mogen we niet dicht bij elkaar staan ​​of zitten. Dat
            maakt het voor Sounding Bodies moeilijk om hun werk te doen. Zij
            willen graag mensen bij elkaar brengen of beter laten voelen door de
            app te gebruiken en het grotere doel is om bij te dragen aan de
            positieve gezondheid van iedereen.

            Uit deze probleemstelling is een deliverable gerealiseerd: (zie de link naar het PWA design.)
          </p>
        </div>
        <a href="https://www.figma.com/file/659DqAy7A14djZfNG7VFeB/PWA-FINAL?t=twy1zFmbKFKsfWfA-6" target="_blank" className="text-[#FFFFFF] border-2 px-6 py-3 my-2 flex items-center hover:bg-[#8F805F] hover:border-[#8F805F] ease-in duration-300">
          <Link to="work" smooth={true} duration={500}>
            PWA Design
          </Link>
          <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3" />
          </span>
        </a>
        <a
          href="https://mustafamaalin.nl/"
          className="text-[#FFFFFF] border-2 px-6 py-3 my-2 flex items-center hover:bg-[#8F805F] hover:border-[#8F805F] ease-in duration-300"
        >
          Terug naar Homepage
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

export default Decello;
