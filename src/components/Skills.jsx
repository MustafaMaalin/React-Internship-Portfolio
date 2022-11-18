import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Statamic from '../assets/statamic.png';
import Php from '../assets/php.png';


const Skills = () => {
  return (
    <div id='skills' name='skills' className='w-full h-screen bg-[#000000] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#8F805F] '>Skills</p>
              <p className='py-4'>Dit zijn de technologieën waarmee ik projecten heb gebouwd. Mijn doel is om tijdens mijn afstudeerstage meer aandacht te schenken aan deze technologieën. </p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-lg hover:shadow-[#8F805F] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-lg hover:shadow-[#8F805F] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-lg hover:shadow-[#8F805F] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-lg hover:shadow-[#8F805F] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-lg hover:shadow-[#8F805F] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-lg hover:shadow-[#8F805F] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Statamic} alt="HTML icon" />
                  <p className='my-4'>STATAMIC</p>
              </div>
              <div className='shadow-lg hover:shadow-[#8F805F] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-lg hover:shadow-[#8F805F] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Php} alt="HTML icon" />
                  <p className='my-4'>PHP</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;