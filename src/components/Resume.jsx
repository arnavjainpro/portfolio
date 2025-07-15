import React from 'react';
import { SectionWrapper } from "../hoc";

const RESUME_URL = '/Arnav_Jain_Resume.pdf'; 

const Resume = () => {
  const handleViewResume = () => {
    window.open(RESUME_URL, '_blank');
  };

  return (
    <div className='flex justify-center my-6'>
      <button 
        onClick={handleViewResume} 
        className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-blue-600 hover:to-purple-700 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
      >
        <span className="flex items-center gap-2">
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
            />
          </svg>
          View My Resume
        </span>
      </button>
    </div>
  );
};

export default SectionWrapper(Resume, "Resume");
