import { useState } from "react";
import { Link } from "react-router-dom";

import '../styles/layout/Header.css'

const Navbar:React.FC = ():JSX.Element => {
    const [show, setShow] = useState(false);

    return (
        <header>
            <div className={show ? "header-main show" : "header-main"}>
                <div className="icon-wrapper">
                    <span>
                        <Link to="/">Icon</Link>
                    </span>
                </div>
                <div className="options-wrapper">
                    <span>
                        <Link to="/About">About</Link>
                    </span>
                </div>
            </div>
            <span className={show ? "hamburger-menu menu-show" : "hamburger-menu"} onClick={() => setShow(!show)!}></span>
        </header>
    )
}

export default Navbar 