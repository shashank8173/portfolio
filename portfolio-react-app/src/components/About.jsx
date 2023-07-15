import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center items-center w-full h-full'>
            <div className=' w-full grid grid-cols-2 gap-8'> 
                <div className='sm:text-left pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-300'>About</p>
                </div>
                <div>

                </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                  <div className='sm:text-left text-1xl'>
                    <div className='py-2'><p className='text-center border-b-2 border-pink-200 inline'>Education</p></div>
                    <p className='text-left'>B.Tech - Computer Science - Malout Institute Of Management And Information Technology ,IKG Punjab Technical University - (2019 - 2023)</p>
                    <p className='text-left py-6'>12th - BK Inter College - Mau,Uttar Pradesh, India. - (2017-2018)</p>
                    <p className='text-left py-6'>10th - Assumption Public School - Sidhaupur,Gorakhpur,Uttar Pradesh, India. - (2015-2016)</p>
                    <div className='py-2'><p className='text-center border-b-2 border-pink-200 inline'>6th Month Training</p></div>
                    <p className='py-2 font-bold'>Full Stack Developer - OpportunityM (February 2023 - June 2023)</p>
                    <p>Worked on a range of technology stacks such as C++, HTML, CSS,Tailwindcss, JavaScript, React,Node.JS ,Express.JS and MongoDB .</p>
                  </div>
                  <div>
                    <p>I am a full stack web developer. I have a strong background in both front-end and back-end
                      development. I specialize in building dynamic and user-friendly web applications.
                      On the front-end, I'm skilled in HTML, CSS, and JavaScript, and I'm proficient in frameworks like
                      React.</p>
                  </div>

                </div>
        </div>
    </div>
  )
}

export default About