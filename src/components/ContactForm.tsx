import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";

import ContactFormError from "./ContactFormError";

import '../styles/components/ContactForm.css';

const captchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

const ContactForm = () => {
    const [isCaptchaSucessful, setIsCaptchaSuccessful] = useState<boolean>(false);
    const [sendConditions, setSendConditions] = useState<boolean>(false);
    const [firstName, setFirstName] = useState<string>();
    const [secondName, setSecondName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [message, setMessage] = useState<string>();

    useEffect(() => {
        if (firstName && secondName && email && message) {
            if (firstName.length > 4 
                && secondName.length > 3 
                && message.length > 11 
                && email.length > 3 
                && email.length > 3 
                && email.includes("@") 
                && email.includes(".") 
                // && email.endsWith(/(com)|(hu)|(pl)|(gb)|(ru)|(swe)|(nl)/g) 
                && email.endsWith(".com") 
                && email.endsWith(".hu") 
                && email.endsWith(".pl") 
                && email.endsWith(".ru") 
                || firstName.length > 4 
                && secondName.length > 3 
                && message.length > 11 
                && email.length > 3 
                && email.includes("@") 
                && email.includes(".") 
                && email[email.indexOf("@") + 1] !== "."
                // && email.endsWith(/(com)|(hu)|(pl)|(gb)|(ru)|(swe)|(nl)/g) 
                && email.endsWith(".com") 
                && email.endsWith(".hu") 
                && email.endsWith(".pl") 
                && email.endsWith(".ru")
                ) {
                console.log(message.length)
                setSendConditions(true)
            } else {
            setSendConditions(false)
        }
        }
    }, [firstName, secondName, email, message])

    const handleSubmit:Function = (e:React.FormEvent):void => {
        console.log(SERVICE_ID, TEMPLATE_ID, USER_ID)
        e.preventDefault();
        if (typeof firstName === "string" && typeof secondName === "string" && typeof email === "string" && typeof message === "string") {

            const mailTemplateParam = {
                from_name: `${firstName} ${secondName}`,
                from_email: email,
                message: message,
            };

            emailjs.send(SERVICE_ID, TEMPLATE_ID, mailTemplateParam, USER_ID)
                .then((result) => {
                    console.log(result.text)
                }, error => {
                    console.log(error.text)
                }
            );

            console.log("IT WORKS")

        } else {
            console.log("Something won't work");
        }

        console.log(e.target);
    };

    const captchaOnChange = (value:unknown) => {
        setIsCaptchaSuccessful(true);
    };

    const handleExpiredChange = () => {
        setIsCaptchaSuccessful(false)
    };

    const handleOnChange:Function = (e:any, setState: React.Dispatch<React.SetStateAction<string>>): void => {
        if (e.target !== null) {
        let value = e.target.value
        if ( value.charAt(0) !== value.charAt(0).toUpperCase()) {
            console.log("low case first letter")
            const firstLetter = value.charAt(0).toUpperCase();
            const restLetters = value.split("");
            restLetters.shift();
            let newValue = firstLetter + restLetters.join("");
            setState(newValue)
            console.log(newValue)
        } else {
            console.log(value);
            setState(value)
        };
        }
    };

    return (
        <div className="contact-wrapper">
            <form onSubmit={e => handleSubmit(e)}>
                <label>
                    First Name*
                </label>
                <input type="text" placeholder='First Name...' value={firstName} onChange={e => handleOnChange(e,setFirstName)} required />
                {
                    firstName && firstName.length >= 0 && firstName.length <= 4 &&
                    <ContactFormError message="Type in more than 4 letters!"/>
                }
                <label>
                    Last Name*
                </label>
                <input type="text" placeholder='Last Name...' value={secondName} onChange={e => handleOnChange(e, setSecondName)} required />
                {
                    secondName && secondName.length >= 0 && secondName.length <= 3 &&
                    <ContactFormError message="Type in more than 3 letters!"/>
                }
                <label>
                    Email*
                </label>
                <input type="email" placeholder="Email..." value={email} onChange={e => setEmail(e.target.value)} required />
                {
                    email && email.length > 0 && email.length <= 3 && !email.includes("@") && !email.includes(".") ?
                    <ContactFormError message="Invalid e-mail format!"/>
                    : email && email.length > 0 && email.length <= 3 && email.includes("@") && !email.includes(".") ?
                    <ContactFormError message="Invalid e-mail format!"/> 
                    : email && email.length > 0 && email.length <= 3 && !email.includes("@") && email.includes(".") ?
                    <ContactFormError message="Invalid e-mail format!"/> 
                    : email && email.length > 0 && email.length <= 3 && email.includes("@") && email.includes(".") ?
                    <ContactFormError message="Invalid e-mail format!"/> 
                    : email && email.length > 3 && !email.includes("@") && !email.includes(".") ?
                    <ContactFormError message="Invalid e-mail format!"/> 
                    : email && email.length > 3 && email.includes("@") && !email.includes(".") ?
                    <ContactFormError message="Invalid e-mail format!"/> 
                    : email && email.length > 3 && !email.includes("@") && email.includes(".") ?
                    <ContactFormError message="Invalid e-mail format!"/>
                    : email && email.length > 3 && email.includes("@") && email.includes(".") && !email.endsWith(".com") && !email.endsWith(".hu") && !email.endsWith(".pl") && !email.endsWith(".ru") || email && email.length > 3 && email.includes("@") && email.includes(".") && email[email.indexOf("@") + 1] === "." ?
                    <ContactFormError message="Invalid e-mail format!"/> 
                    : null
                }
                <label>
                    Message*
                </label>
                <textarea placeholder='Message...' required value={message} onChange={e => setMessage(e.target.value)}></textarea>
                {
                    message && message.length >= 0 && message.length <= 10 &&
                    <ContactFormError message="Type in more than 10 letters!"/>
                }
                <ReCAPTCHA 
                    sitekey={captchaKey}
                    onChange={captchaOnChange}
                    onExpired={handleExpiredChange}
                    theme={"dark"}
                    hl="en-GB"
                />
                <button disabled={!isCaptchaSucessful && !sendConditions || !isCaptchaSucessful || !sendConditions} className="btn contact-btn">Send me a message!</button>
            </form>
            <p className="contact-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, obcaecati quia ratione necessitatibus aperiam magnam, sequi at expedita ab consequuntur incidunt officiis corporis, nemo sit molestiae dignissimos cum et impedit.</p>
        </div>
    )
}

export default ContactForm