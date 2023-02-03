import React, { useState, createContext } from 'react';
import { IProjectContext, ProviderProps, IProjects } from '../@types/custom';

export const ProjectContext = createContext<IProjectContext | null>(null);

import TodoPicture01 from "../assets/Images/todo-app/01.jpg";
import TodoPicture02 from "../assets/Images/todo-app/02.jpg";
import TodoPicture03 from "../assets/Images/todo-app/03.jpg";
import TodoPicture04 from "../assets/Images/todo-app/04.jpg";
import TodoPicture05 from "../assets/Images/todo-app/05.jpg";
import TodoPicture06 from "../assets/Images/todo-app/06.jpg";

export const ProjectProvider:React.FC<ProviderProps> = ({ children }) => {
    const [modalState, setModalState] = useState<boolean>(false);
    const [selectedProject, setSelectedProject] = useState<IProjects | null>(null);
    const [fadeout, setFadeout] = useState<boolean>(false);

    const projects:IProjects[] = [
        {
            id: 0,
            name: "Todo-app",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quibusdam incidunt similique sint nihil, soluta delectus at iusto itaque maiores dolorum ipsum, debitis a quidem minima ut ea ab molestiae.",
            finished: true,
            pics: [TodoPicture01, TodoPicture02, TodoPicture03, TodoPicture04, TodoPicture05, TodoPicture06]
        },
        {
            id: 1,
            name: "Weather-app",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum blanditiis, laboriosam impedit dicta maiores accusantium reprehenderit soluta commodi corporis nostrum expedita itaque recusandae in esse eveniet! Adipisci facere delectus cupiditate?",
            finished: true,
            pics: null
        },
        {
            id: 2,
            name: "Guitar Shop",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum itaque labore culpa odit natus necessitatibus amet tenetur a! Necessitatibus officia, quia quae error aperiam porro voluptatibus iste ratione quasi excepturi.",
            finished: false,
            pics: null
            },
            {
            id: 3,
            name: "Nasa API Project",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum aperiam eveniet error odit nisi fugiat quasi nulla dicta ipsum voluptatibus magni praesentium nostrum temporibus, dolorem voluptatem hic odio! Est, ea.",
            finished: false,
            pics: null
        },
        {
            id: 4,
            name: "Gallery",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit unde necessitatibus quia quam fugit a impedit facilis? Repellat, officia modi nam vel provident, quas quod dolor quidem, eos esse quos!",
            finished: false,
            pics: null
        },
        {
            id: 5,
            name: "Pokemon Searchtool",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ad deleniti magnam dolor, nobis quibusdam tenetur velit culpa nisi. Odio odit neque voluptas dolores illum rem necessitatibus tenetur distinctio molestias?",
            finished: false,
            pics: null
        }
    ];

    return (
        <ProjectContext.Provider 
        value={{
            projects,
            modalStates:[modalState, setModalState],
            projectSelector:[selectedProject, setSelectedProject],
            fadeoutState: [fadeout, setFadeout]
        }}>
        {children}
        </ProjectContext.Provider>
    )
}

export default ProjectProvider