import React from "react";
import { Link } from "react-scroll";
import App from "./App";
import { HiArrowNarrowRight } from "react-icons/hi";
import Navbar from "./components/Navbar";

const MCH = () => {
  return (
    <div>
      <Navbar />
      <div
        name="skills"
        className="w-full h-screen bg-[#000000] pt-60 lg:pt-10 text-gray-300"
      >
        {/* Container */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-[#8F805F] ">
              Case Multicultural Healthcare (MCH)
            </p>
            <p className="py-4">
              Deze project is nog ongoing. Ik werk samen met een mijn partner
              bij niyadda aan een website + mediaproducten voor Multicultural
              healthcare.
              <br />
              <br />
              Het design is goedgekeurd en nu ben ik bezig met het bouwen van de
              website. Verder kun je ook de brochures en business cards bekijken
              die ik heb ontworpen.
              <br />
            </p>
          </div>
          <a
            href="https://www.figma.com/file/GDvxDip6c7E5kXkPlYNyuC/Multicultural-Healthcare-Wireframe?node-id=0%3A1&t=J3bU4Ys1gqs9Oaqm-1"
            target="_blank"
            className="text-[#FFFFFF] border-2 px-6 py-3 my-2 flex items-center hover:bg-[#8F805F] hover:border-[#8F805F] ease-in duration-300"
          >
            <Link to="work" smooth={true} duration={500}>
              MLH figma file (design)
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
            <span
              href="https://mustafamaalin.nl/"
              className="group-hover:rotate-90 duration-300"
            >
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </a>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default MCH;
