import React from 'react';
import work5 from '../assets/upcoming.jpg';
import work2 from '../assets/gorosha.jpg';
import work1 from '../assets/todo1.jpg';
import upcoming from '../assets/upcoming.jpg';
import garage from '../assets/bharatMarat.jpg';
import work4 from '../assets/worknet.jpg';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-300'>
            Projects
          </p>
          <p className='py-6'>Some of my academic and personal projects</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Causal Learing */}
          <div
            style={{ backgroundImage: `url(${work1})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            
            {/* Hover Effects */}
            <div className='px-2 opacity-0 group-hover:opacity-100'>
              <span className='text-1xl font-bold text-white tracking-wider'>
              Every day updating important notes  digitally
              </span>
              <div className='pt-8 text-center'>
                
                <a href='https://github.com/shashank8173/Todo.git'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Details
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Deep Learning */}
          <div
            style={{ backgroundImage: `url(${work2})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='px-2 opacity-0 group-hover:opacity-100'>
              <span className='text-1xl font-bold text-white tracking-wider'>
              Ecommerce website 
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/shashank8173/Gorcosha.git'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Details
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* IOT */}
          <div
            style={{ backgroundImage: `url(${garage})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='px-2 opacity-0 group-hover:opacity-100'>
              <span className='text-1xl font-bold text-white tracking-wider'>
              Frotend Ecommerce website.
              </span>
              <div className='pt-8 text-center'>
              <a href='https://github.com/shashank8173/flipkart-clone.git'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Details
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*  App */}
          <div
            style={{ backgroundImage: `url(${work4})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='px-2 opacity-0 group-hover:opacity-100'>
              <span className='text-1xl font-bold text-white tracking-wider'>
               Worknet Jobhunt website,by using this website students search jobs according their qualification.
              </span>
              <div className='pt-8 text-center'>
              <a href='https://github.com/shashank8173/Worknet_jobhunt.git'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Details
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Work Item */}
          <div
            style={{ backgroundImage: `url(${work5})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='px-2 opacity-0 group-hover:opacity-100'>
              <span className='text-1xl font-bold text-white tracking-wider'>
              Upcoming projects.
              </span>
              <div className='pt-8 text-center'>
              <a href='#'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Details
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Work Item */}
          <div
            style={{ backgroundImage: `url(${upcoming})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='px-2 opacity-0 group-hover:opacity-100'>
              <span className='text-1xl font-bold text-white tracking-wider'>
                Upcoming Projects
              </span>
              <div className='pt-8 text-center'>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;