import { useState } from "react";
import { useInterObserver } from "../hooks/useInterObserver";
import IntroText from "../components/IntroText";
import Portrait from "../components/Portrait";
import "../../src/styles/layout/Introduction.css";

const Main:React.FC = ():JSX.Element => {
    const [visibility, setVisibility] = useState<boolean>(false);
    const [ elementRef ] = useInterObserver(visibility, setVisibility);

    const options = {
        
    }

    return (
            <section ref={elementRef && elementRef} id="intro" className={`section introduction ${visibility ? "show" : ""}`}>
                <div className="intro-wrapper">
                    <IntroText header="Hi, my name is Barnabás Papp"  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu bibendum at varius vel pharetra. Ut sem nulla pharetra diam sit amet nisl. Dolor sit amet consectetur adipiscing elit ut aliquam. Sit amet est placerat in. Augue eget arcu dictum varius duis at. Platea dictumst quisque sagittis purus sit. Interdum velit laoreet id donec. Vestibulum sed arcu non odio euismod lacinia at. Hac habitasse platea dictumst vestibulum." />
                    <div className="portrait-wrapper">
                    <Portrait />
                    </div>
                </div>
            </section>
    )
}

export default Main