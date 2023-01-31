import { useState } from "react";
import { useInterObserver } from "../hooks/useInterObserver";
import { IOptions } from "../@types/custom";
import Parallax from '../components/Parallax';
import ContactForm from '../components/ContactForm';

import "../styles/layout/Contact.css"

const Contact = () => {
    const options:IOptions = {
        threshold: 0.2
    }
    const [visibility, setVisibility] = useState<boolean>(false);
    const [ elementRef ] = useInterObserver(visibility, setVisibility, options);

    return (
        <section ref={elementRef} id="Contact" className={`section contact ${visibility ? "show" : ""}`}>
            <Parallax url="https://img.freepik.com/premium-photo/contact-us_36325-2135.jpg?w=1480" section_name="Contact"/>
            <ContactForm />
        </section>
    )
}

export default Contact