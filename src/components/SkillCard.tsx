import { ReactComponent as Css3 } from "../assets/SVG/CSS3.svg";
import { ReactComponent as Html5 } from "../assets/SVG/HTML5.svg";
import { ReactComponent as Js} from "../assets/SVG/JS.svg";
import { ReactComponent as React } from "../assets/SVG/React.svg";
import { ReactComponent as Sass } from "../assets/SVG/Sass.svg";
import { ReactComponent as Ts} from "../assets/SVG/TS.svg";

import "../styles/components/SkillCard.css"

interface SkillCardProps {
  skill: string;
};

const SkillCard:React.FC<SkillCardProps> = ({ skill }) => {

  return (
    <div className="skill">
      {
        skill.toLowerCase() === "html5" ? <Html5 className="skill" /> 
          : skill.toLowerCase() === "css3" ? <Css3 className="skill" />
          : skill.toLowerCase() === "js" ? <Js className="skill" /> 
          : skill.toLowerCase() === "react" ? <React className="skill" /> 
          : skill.toLowerCase() === "sass" ? <Sass className="skill" /> 
          : <Ts className="skill"/>
      }
    
    </div>
  )
}

export default SkillCard