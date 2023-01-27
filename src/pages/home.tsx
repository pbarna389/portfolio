import Introduction from "../layout/Introduction";
import Skills from "../layout/Skills";
import Projects from "../layout/Projects";
import Contact from "../layout/Contact";

import ProjectProvider from "../context/projectContext";

import '../styles/pages/Home.css'

const Home:React.FC = ():JSX.Element => {
    return (
        <main className="home">
            <Introduction />
            <Skills />
            <ProjectProvider>
                <Projects />
            </ProjectProvider>
            <Contact />
        </main>
    )
}

export default Home;