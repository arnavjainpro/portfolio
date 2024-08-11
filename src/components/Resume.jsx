import React from 'react';
import { SectionWrapper } from "../hoc";

const RESUME_URL = 'https://docs.google.com/document/d/1PhaasI-ZfLM3apQ5Izo7byIPDOoca9hxV8dWcZbnQlk/edit?usp=sharing'; 

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = RESUME_URL;
    link.download = 'Arnav_Jain_Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='flex justify-center my-6'>
      <button onClick={handleDownload} className="bg-blue-400 text-black py-2 px-4 rounded hover:bg-blue-600">
        Download Resume
      </button>
    </div>
  );
};

export default SectionWrapper(Resume, "Resume");
