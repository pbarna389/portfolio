import { useState, useContext } from "react";
import { ProjectContext, IProjectContext } from "../context/projectContext";
import { useInterObserver } from "../hooks/useInterObserver";

import Parallax from "../components/Parallax";
import ProjectCard from "../components/ProjectCard";
import Modal from "../components/Modal";

import "../styles/layout/Projects.css"

const Projects:React.FC = () => {

    const {
        projects,
        modalStates:[modalState, setModalState],
    } = useContext(ProjectContext) as IProjectContext;

    const [visibility, setVisibility] = useState<boolean>(false);
    const [ elementRef ] = useInterObserver(visibility, setVisibility);

    return (
        <section ref={elementRef} id="Projects" className={`section projects ${visibility ? "show" : ""}`}>
            <Parallax url="https://res.cloudinary.com/practicaldev/image/fetch/s--iNayE4dm--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ui5xn1qpp4sgee1mryey.jpeg" section_name="Projects" />
            <div className="grid-wrapper">
                {
                    projects.map(project => <ProjectCard key={project.id} name={project.name} finished={project.finished} />)
                }
            </div>
            {
                modalState 
                ? <Modal key={"modal"} />
                : null
            }
        </section>
    )
}

export default Projects