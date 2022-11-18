import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#000000] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#8F805F]">
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className="max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold  ">
              <p>
              Hallo, ik ben Mustafa, <br className="sm:opacity-0 lg:opacity-100"></br>   leuk je te ontmoeten. Kijk gerust eens rond
              </p>
            </div>
            <div>
                <p>Mijn passie gaat minder over elke vorm van development en meer over workflow en communicatie. Ik ben gedreven om het leven beter te maken, en ik ben gefascineerd door hoe technologie kan worden gebruikt om dat te bereiken.</p>
            </div>
          </div>
        </div>
      </div>

  );
};

export default About;
