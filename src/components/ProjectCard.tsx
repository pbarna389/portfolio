import { useContext } from "react";
import { ProjectContext } from "../context/projectContext";
import { IProjectContext, ProjectCardProps } from "../@types/custom";
import "../styles/components/ProjectCard.css";

const ProjectCard:React.FC<ProjectCardProps> = ({ name, finished }) => {
    const {
        projects,
        modalStates:[modalState, setModalState],
        projectSelector:[selectedProject, setSelectedProject]
    } = useContext(ProjectContext) as IProjectContext;

    const handleClick = () => {
        const selectProject = projects.filter(project => project.name === name);
        setModalState(!modalState);
        setSelectedProject(selectProject[0])
    }

    return (
            <div className="project-card">
                <h4>{name}</h4>
                <button className="btn" disabled={!finished} onClick={() => handleClick()}>Details</button>
            </div>
    )
}

export default ProjectCard