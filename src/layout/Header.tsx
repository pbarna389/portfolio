import { useState } from "react";
import { Link } from "react-scroll";

import '../styles/layout/Header.css'

const Navbar:React.FC = ():JSX.Element => {
    const [show, setShow] = useState(true);

    return (
        <header>
            <div className={show ? "header-main show" : "header-main"}>
                <div className="icon-wrapper">
                    <span>
                        <Link to="intro" spy={true} smooth={true} offset={-100} duration={10}>Icon</Link>
                    </span>
                </div>
                <div className="options-wrapper">
                    <span>
                        <Link to="Skills" spy={true} smooth={true} offset={-100} duration={10}>Skills</Link>
                    </span>
                    <span>
                        <Link to="Projects" spy={true} smooth={true} offset={-100} duration={10}>Projects</Link>
                    </span>
                    <span>
                        <Link to="Contact" spy={true} smooth={true} offset={-100} duration={10}>Contact</Link>
                    </span>
                </div>
            </div>
            <span className={show ? "hamburger-menu menu-show" : "hamburger-menu"} onClick={() => setShow(!show)!}></span>
        </header>
    )
}

export default Navbar 