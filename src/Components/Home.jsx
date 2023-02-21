import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-r from-blue-900 to-red-500'>
      
      {/* Conatainer */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-gray-200'>Math is fun - let's play!</p>
            <h1 className='text-4xl sm:text-6xl font-bold text-[#dde2f2]'>MATH WINDOW CARDS ONLINE</h1>
            <h2 className='text-4xl sm:text-6xl font-bold text-[#b7bbca]'>M2ES GAME</h2>
            <p className='text-[#b1b1be] py-4 max-w-[700px]'>Make math fun for your kids with our simple math game! Designed for elementary students, our game includes addition, subtraction, multiplication, and division to improve their math skills. Try it now and see your kids develop a love for math while having fun!</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600'>Get Started
                <span className='group-hover:rotate-180 duration-300'><HiArrowNarrowRight className='ml-4' /></span>
                </button>
            </div>
        </div>

    </div>
  );
}

export default Home;