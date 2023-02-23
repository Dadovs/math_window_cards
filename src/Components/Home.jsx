import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-r from-white to-blue-500'>
      
      {/* Conatainer */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-gray-700'>Math is fun - let's play!</p>
            <h1 className='text-4xl sm:text-6xl font-bold text-black'>M2 ML (Math League)</h1>
            <h2 className='text-4xl sm:text-4xl font-bold text-gray-600'>Malagasang II Elementary School</h2>
            <p className='text-gray-900 py-4 max-w-[700px]'>Make math fun for your kids with our simple math game! Designed for elementary pupils, our game includes addition, subtraction, multiplication, and division to improve their math skills. Try it now and see your kids develop a love for math while having fun!</p>
            <div>
                <button className='text-black group border-2 border-black px-6 py-3 my-2 flex items-center hover:bg-red-400'><a href="/a1">Get Started</a>
                <span className='group-hover:rotate-180 duration-300'><HiArrowNarrowRight className='ml-4' /></span>
                
                </button>
            </div>
        </div>

    </div>
  );
}

export default Home;