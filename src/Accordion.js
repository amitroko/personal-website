import React, {useState, useRef} from 'react';
import Chevron from './Chevron.js';
import './Accordion.css';

function Accordion(props) {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("icon");
    const content = useRef(null);

    function toggleOpen() {
        setActiveState(
            setActive === "" ? "active" : ""
        );
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "active" ? "icon": "icon rotate"
        );
    }

    return(
        <div className="accordion_wrapper">
            <button className={`accordion ${setActive}`} onClick={toggleOpen}>
                <p className="title">{props.title}</p>
                <Chevron className={`${setRotate}`} width={10} fill={"#800080"}/>
            </button>
            <div ref={content} style={{maxHeight: `${setHeight}`}} className="content">
                <div className="text" dangerouslySetInnerHTML={{__html: props.content}}/>
            </div>
        </div>
    );
}

export default Accordion;