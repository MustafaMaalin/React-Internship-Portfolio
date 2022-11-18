import React from 'react';
import Niyadda from '../assets/niyadda.png';
import Rondom from '../assets/rondom.png';
import Nettt from '../assets/nettt.png';
import MLT from  '../assets/mlt.png';
import Decello from  '../assets/decello.png';
import { Link } from 'react-router-dom';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#000000]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#8F805F]'>
            Work
          </p>
          <p className='py-6'>Hieronder zie je een aantal cases waar ik aan gewerkt heb. Feel free to look en als je benieuwd bent naar meer kunt uw kijken naar de github link hier links(desktop).
          <br/>
          <br/>
           <a className=' lg:hidden hover:text-[#8F805F] ease-in duration-200' target='_blank' href='https://github.com/MustafaMaalin'>githubpagina mobile</a></p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Niyadda})` }}
            className='shadow-lg shadow-[#040c16] group container  flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 w-full hover:opacity-100  ease-in duration-300 '>
              {/* <span className='text-2xl pl-2 font-bold text-black tracking-wider'>
                Niyadda Digital Agency
              </span> */}
              <div className='pt-20 pb-2 text-center'>
                <a target='_blank' href='https://niyadda.com'>
                <Link to='/niyadda' className='text-center -lg px-4 py-3 m-2  bg-[#B19CD9] text-white font-bold text-lg'>
                 Case Niyadda
                  </Link>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Rondom})` }}
            className='shadow-lg shadow-[#040c16] group container  flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 w-full hover:opacity-100  ease-in duration-300 '>
            
              <div className='pt-20 pb-2 text-center'>
                <a target='_blank'>
                 
                <Link to='/rondom' className='text-center -lg px-4 py-3 m-2  bg-[#00AEEF] text-white font-bold text-lg'>
                 Case Rondom
                  </Link>
                </a>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div
            style={{ backgroundImage: `url(${Nettt})` }}
            className='shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 w-full group-hover:opacity-100 ease-in duration-300  '>
              <div className='pt-20 pb-2 text-center'>
                <a target='_blank' href='https://mustafa.nettt.nl'>
                <Link to='/nettt' className='text-center -lg px-4 py-3 m-2  bg-[#E70082] text-white font-bold text-lg'>
                 Case Nettt
                  </Link>
                </a>
              </div>
            </div>
          </div>
           {/* 3 */}
           <div
            style={{ backgroundImage: `url(${MLT})` }}
            className='shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 w-full group-hover:opacity-100 ease-in duration-300  '>
              <div className='pt-20 pb-2 text-center'>
                <a target='_blank' href='https://www.figma.com/file/GDvxDip6c7E5kXkPlYNyuC/Multicultural-Healthcare-Wireframe?node-id=0%3A1'>
                <Link to='/mch' className='text-center -lg px-4 py-3 m-2  bg-[#509E2F] text-white font-bold text-lg'>
                 Case Multicultural
                  </Link>
                  
                </a>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div
            style={{ backgroundImage: `url(${Decello})` }}
            className='shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 w-full group-hover:opacity-100  ease-in duration-300  '>
              <div className='pt-20 pb-2 text-center'>
                <a target='_blank' href='https://www.figma.com/file/GDvxDip6c7E5kXkPlYNyuC/Multicultural-Healthcare-Wireframe?node-id=0%3A1'>
                <Link to='/decello' className='text-center -lg px-4 py-3 m-2  bg-[#CFDBD5] text-white font-bold text-lg'>
                 Case Decello
                  </Link>
                  
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default Work;