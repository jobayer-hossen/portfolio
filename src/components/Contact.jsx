import React, { useRef } from "react";
import { FaFacebookF ,FaGithub,FaLinkedinIn,FaEnvelope} from "react-icons/fa";
import Fade from 'react-reveal/Fade';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    
    e.preventDefault();

    emailjs.sendForm('service_ft6pu2k', 'template_bncxkgq', form.current, 'cjZi00LTrgT4d6Brb')
      .then((result) => {
          console.log(result.text);
          Swal.fire(
            'Congrats!',
            'Your message has been sent to Jobayer Hussain !',
            'success'
          )
      }, (error) => {
          console.log(error.text);
      });
      
  };
  return (
    <>
    <Fade bottom >
    <div className="md:px-10 px-7 my-10" id="contact">
      <div className="flex flex-col md:flex-row">
        {/* text and icons */}
        <div className="md:w-1/2">
        <h1 className="text-green-400 font-semibold text-3xl mt-16">
      Connect with me:
      </h1>
      <p className="my-3 text-white md:w-3/4 leading-[2]">
      Satisfied with me? Please contact me
      </p>
      {/* social icons */}
      <div className="flex ">
        <a href="https://www.linkedin.com/in/jobayer-hossen-213a961b2/" target="_blank" rel="noreferrer">
          
          <FaLinkedinIn className="text-green-500 text-3xl" />
    
        </a>
        <a className="ml-4" href="https://github.com/jobayer-hossen" target="_blank" rel="noreferrer">
        <FaGithub className="text-green-500 text-3xl" />
        </a>
        <a className="ml-4" href="https://www.facebook.com/emon.hasan.201/" target="_blank" rel="noreferrer">
        <FaFacebookF className="text-green-500 text-3xl" />
        </a>
        <a className="ml-4" href="mailto:jobayerhossen2903@gmail.com" target="_blank" rel="noreferrer">
        <FaEnvelope className="text-green-500 text-3xl" />
        </a>
      </div>
        </div>
        {/* form */}
        <div className="md:w-1/2">
            <p className="mt-16 text-white text-2xl mb-6">Contact me, let's make magic together</p>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Name:" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded "/>
                <input type="email" name="email" placeholder="Email:" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-3"/>
                <textarea name="message" id="message" cols="54" rows="4" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded mb-2" placeholder="Message:"></textarea>
                <button className="btn transition-all duration-500 text-green-400 py-2 px-12 rounded hover:bg-white hover:text-green-400 block" type="submit">
                  Send
                </button>
            </form>
        </div>
      </div>
    </div>
    </Fade>
    </>
  );
};

export default Contact;
