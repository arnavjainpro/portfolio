import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import rotatingArrow from '../assets/rotating-arrow.svg'; 

const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}> 
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      <div className="arrow-container">
        <img src={rotatingArrow} alt="Rotating arrow" className="rotating-arrow" />
        <p>Move the icons with your mouse!</p>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");

