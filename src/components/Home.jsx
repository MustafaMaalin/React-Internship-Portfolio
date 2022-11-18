import React from 'react'
import{HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className=' w-full h-screen bg-[#000000]'>

    {/* container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className='text-[#FFFFFF]'>Hi, mijn naam is </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#8F805F]'>Mustafa Maalin</h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-[#FFFFFF]'>Ik ben een front-end-developer</h2>
        <p className='text-[#FFFFFF] py-4 max-w-[700px]'>Ik ben een front-end-developer die graag bijzondere digitale ervaringen bouwt en ontwerpt. Momenteel ben ik op zoek naar een afstudeerstage</p>
        <div>
            <button className='text-[#FFFFFF] border-2 px-6 py-3 my-2 flex items-center hover:bg-[#8F805F] hover:border-[#8F805F]'>
            <Link to='work' smooth={true} duration={500}>
            View Work
            </Link>
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3' />
                </span>
            </button>
        </div>
        </div>
    </div>
  )
}

export default Home