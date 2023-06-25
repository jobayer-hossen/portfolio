import React from 'react';
import Typewriter from "typewriter-effect";
const Type = () => {
    return (
        <>
        <Typewriter
          options={{
            strings: ["Full Stack Web Developer", "MERN Stack Developer", "Student",],
            autoStart: true,
            loop: true,
            deleteSpeed: 50
          }}
        />
      </>
    );
};

export default Type;