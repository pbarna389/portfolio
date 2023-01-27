
import css3 from "../assets/SVG/CSS3.svg";
import html5 from "../assets/SVG/HTML5.svg";
import js from "../assets/SVG/JS.svg";
import react from "../assets/SVG/React.svg";
import sass from "../assets/SVG/sass.svg";
import ts from "../assets/SVG/TS.svg";

import "../styles/components/SkillCard.css"

interface SkillCardProps {
  skill: string;
};

const SkillCard:React.FC<SkillCardProps> = ({ skill }) => {
  const imgSrcValue = () => {
    return skill.toLowerCase() === "html5" ? html5 
          : skill.toLowerCase() === "css3" ? css3 
          : skill.toLowerCase() === "js" ? js 
          : skill.toLowerCase() === "react" ? react 
          : skill.toLowerCase() === "sass" ? sass 
          : ts; 
  }

  return (
    <div className="skill">
      <img src={imgSrcValue()} alt={skill} />
    
    </div>
  )
}

export default SkillCard