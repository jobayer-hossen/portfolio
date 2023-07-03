import React from 'react';
import Fade from 'react-reveal/Fade';
import img2 from '../assets/25_182305.jpg'
import Type from './Type';


const Home = () => {
    return (
        <div className='md:px-10 px-7 my-14 md:h-screen bg-[#1a1a29]' id='home'>
            <div>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 w-full'>
                    {/* image & content */}
                    {/* text */}
                    <Fade left>
                    <div className='text-white'>
                        <h6 className='text-3xl mt-12'>Hello, I'm</h6>
                        <h1 className='font-semibold md:text-5xl my-4 text-3xl'>Jobayer Hossen</h1>
                        <div className='text-2xl'>
                        <Type/>
                        </div>
                        <div className='mt-20 mb-10'>
                            <a
                             target="_blank"
                             href='https://drive.google.com/file/d/1u0cxiEMTlyTU5S3sGW9J3scPDqWi3ZEQ/view'>
                            <button className='btn transition-all duration-500 text-green-400 py-2 px-4 rounded bg-green-200 '>Resume</button> 
                            </a>
                          
                        </div>
                    </div>
                    </Fade>
                    {/* img */}
                    <Fade right>
                    <div className=''>
                        <img className='w-72 mx-auto rounded mb-10' src="https://img.freepik.com/free-photo/businessman_144627-34865.jpg?w=360&t=st=1688383450~exp=1688384050~hmac=32ccd0008f7067875e8328944ba847b900ba4537fd226ef9b7add287c87019b7" alt="" />
                    </div>
                    </Fade>
                </div>
            </div>
            <div className='h-24 bg-[#181824] w-full mx-auto absolute left-0 hidden md:block'>
            </div>
        </div>
    );
};

export default Home;