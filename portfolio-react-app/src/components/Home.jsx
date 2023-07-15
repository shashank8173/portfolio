import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import Typed from 'react-typed';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-300'>Hi, My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Shashank Singh Chauhan</h1>
        {/* <Typed
                    className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'
                    strings={['Shashank Singh Chauhan']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                /> */}
        {/* <h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0]'>Fullstack Developer</h2> */}
        <Typed
                    className='text-4xl sm:text-5xl font-bold text-[#8892b0]'
                    strings={['Fullstack Developer']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
        <p className='text-[#8892b0] py-4 max-w-[700px]'>focussed on building responsive web applications, testing using manual and automation tools and working towards my goal to make the world a better place using tech.
         Bachler's technology(B.Tech) in CS, currently looking for an full time opportunity in IT sector to kickstart my career.</p>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-300'>
            <Link to="work" smooth={true} duration={400}>
          View Projects 
        </Link>
            
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>
            </span>
            </button>
        </div>
        </div>
    </div>
  )
}   

export default Home