import React from 'react';
import Img from '../assets/Willie.png'
import circle from '../assets/circle.png'
import img2 from '../assets/25_182305.jpg'
import Type from './Type';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div className='md:px-10 px-7 my-14 md:h-screen bg-[#1a1a29]' id='home'>
            <div>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 w-full'>
                    {/* image & content */}
                    {/* text */}
                    <div className='text-white'>
                        <h6 className='text-3xl mt-12'>Hello, I'm</h6>
                        <h1 className='font-semibold md:text-5xl my-4 text-3xl'>Jobayer Hossen</h1>
                        <div className='text-2xl'>
                        <Type/>
                        </div>
                        <div className='mt-10'>
                            <a
                             target="_blank"
                             href='https://drive.google.com/file/d/1szYEjEX4e4YWLM7_w_gS3TMwjA9-QeM3/view'>
                            <button className='btn transition-all duration-500 text-green-400 py-2 px-4 rounded  hover:bg-green-200 hover:text-green-400'>Resume</button> 
                            </a>
                          
                        </div>
                    </div>
                    {/* img */}
                    <div className=''>
                        <img className='w-72 mx-auto rounded' src={img2} alt="" />
                    </div>
                </div>
            </div>
            <div className='h-24 bg-[#181824] w-full mx-auto absolute left-0 hidden md:block'>
            </div>
        </div>
    );
};

export default Home;