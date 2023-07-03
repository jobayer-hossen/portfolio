import React from 'react';
import Fade from 'react-reveal/Fade';


const Services = () => {
    return (
       <>
       <Fade bottom >
       <div className='gap-6 grid lg:grid-cols-3 sm:grid-cols-1 mx-auto'>
       
       <div className="overflow-hidden bg-green-200 rounded shadow-md text-slate-500 shadow-green-100">
        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">
            Expertise
            </h3>
           
          </header>
         <p>HTML</p>
         <p>CSS</p>
         <p>TailwindCSS</p>
         <p>React JS</p>
         <p>Bootstrap</p>
         <p>Firebase</p>
        </div>
      </div>
       <div className="overflow-hidden bg-green-200 rounded shadow-md text-slate-500 shadow-green-100">
        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">
            Comfortable
            </h3>
           
          </header>
         <p>Express js</p>
         <p>JWT</p>
         <p>Stripe JS</p>
         <p>Express JS</p>
         <p>MongoDB</p>
        </div>
      </div>
       <div className="overflow-hidden bg-green-200 rounded shadow-md text-slate-500 shadow-green-100">
        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">
            Tools
            </h3>
           
          </header>
         <p>VS Code</p>
         <p>Netlify</p>
         <p>Vercel</p>
         <p>Figma</p>
         <p>GitHub</p>
         <p>Firebase</p>
        </div>
      </div>


       </div>
        </Fade>
       </>
    );
};

export default Services;