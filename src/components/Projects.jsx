import React from "react";
import img1 from '../assets/projects/img1.png'
import img2 from '../assets/projects/img2.png'
import img3 from '../assets/projects/img3.png'
import Fade from 'react-reveal/Fade';

const Projects = () => {
  
  return (
    <>
    <Fade bottom>
    <div className="md:px-10 px-7 my-8" id="projects">
      <h1 className="text-green-400 font-semibold text-3xl mt-16">
        Featured projects
      </h1>
      <p className="my-3 text-white md:w-3/4 leading-[2]">
        I have worked on many projects over the course of being a Web Developer,
        here are a few of my live, real-world projects
      </p>
      {/* featured projects */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        
            <div
              className="flex flex-col shadow-sm md:w-[343px] bg-[#31313F] p-4 rounded"
            >
                <img className="rounded" src={img1} />
              
              <h3 className="text-green-400 font-semibold text-lg">
              LensCraft
              </h3>
              <p className=" text-white mt-1">
                 E-Learning Photography Application
              </p>
              <div className="mt-5 flex justify-between">
               <a 
               target="blank"
               href='https://twelve-assignment-42702.web.app/'>
               <button className="btn transition-all duration-500 text-green-400 py-2 px-2 rounded hover:bg-white hover:text-green-400">
                  Live Preview
                </button>
               </a>
                <a
                target="blank"
                href='https://github.com/jobayer-hossen/twelve-assignment-clinte'
                >
                <button className="btn transition-all duration-500 text-green-400 py-2 px-2 rounded hover:bg-white hover:text-green-400">
                 gitHub Code
                </button>
                </a>
              </div>
            </div>
         
            <div
              className="flex flex-col shadow-sm md:w-[343px] bg-[#31313F] p-4 rounded"
            >
                <img className="rounded" src={img2} />
              
              <h3 className="text-green-400 font-semibold text-lg">
              RoboLand
              </h3>
              <p className=" text-white mt-1">
                 Online Toy Selling Shop Application
              </p>
              <div className="mt-5 flex justify-between">
              <a 
               target="blank"
               href='https://eleventh-assignment-4ef0d.web.app/'>
               <button className="btn transition-all duration-500 text-green-400 py-2 px-2 rounded hover:bg-white hover:text-green-400">
                  Live Preview
                </button>
               </a>
               <a
                target="blank"
                href='https://github.com/jobayer-hossen/eleventh-clinte'
                >
                <button className="btn transition-all duration-500 text-green-400 py-2 px-2 rounded hover:bg-white hover:text-green-400">
                 gitHub Code
                </button>
                </a>
              </div>
            </div>


            <div
              className="flex flex-col shadow-sm md:w-[343px] bg-[#31313F] p-4 rounded"
            >
                <img className="rounded" src={img3} />
              
              <h3 className="text-green-400 font-semibold text-lg">
              Turkish Delight
              </h3>
              <p className=" text-white mt-1">
                Turkish Chef Recipes Application
              </p>
              <div className="mt-5 flex justify-between">
              <a 
               target="blank"
               href='https://turkish-delight-988ad.web.app/'>
               <button className="btn transition-all duration-500 text-green-400 py-2 px-2 rounded hover:bg-white hover:text-green-400">
                  Live Preview
                </button>
               </a>
               <a
                target="blank"
                href='https://github.com/jobayer-hossen/tenth-clinte'
                >
                <button className="btn transition-all duration-500 text-green-400 py-2 px-2 rounded hover:bg-white hover:text-green-400">
                 gitHub Code
                </button>
                </a>
              </div>
            </div>
      </div>




    </div>
    </Fade>
    </>
  );
};

export default Projects;
