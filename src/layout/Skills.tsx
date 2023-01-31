import Parallax from "../components/Parallax";
import SkillCard from "../components/SkillCard";

import "../styles/layout/Skills.css";

const Skills = () => {
  const skills = ["HTML5", "CSS3", "JS", "React", "SASS", "TS"];

  return (
    <section className="section skills">
      <Parallax url="https://wallpapertag.com/wallpaper/full/7/3/2/154689-cool-coding-background-1920x1280-for-tablet.jpg" section_name="Skills"/>
      <div className="grid-wrapper">
        {
          skills &&
          skills.map(skill => <SkillCard key={skill} skill={skill} />)
        }
      </div>
    </section>
  )
}

export default Skills
