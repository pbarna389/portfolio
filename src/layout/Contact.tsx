import Parallax from '../components/Parallax';
import ContactForm from '../components/ContactForm';

import "../styles/layout/Contact.css"

const Contact = () => {
    return (
        <section className="section contact">
            <Parallax url="https://img.freepik.com/premium-photo/contact-us_36325-2135.jpg?w=1480"/>
            <ContactForm />
        </section>
    )
}

export default Contact