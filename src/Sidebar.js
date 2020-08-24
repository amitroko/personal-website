import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import headshot from './casualHeadshot.jpg';
import Github from './Github.js';
import Mail from './Mail.js';
import Linkedin from './Linkedin.js';

class Sidebar extends Component {
    render() {
        return(
            <div className="sidebar">
                <Link to="/">
                    <h2>Alec Mitrokostas <div className="dotcom">(.com)</div></h2>
                </Link>
                <img src={headshot} alt="" className="headshot"/>
                <p className="connect">Connect with me</p>
                <div className="profile_links">
                    <div className="p_link">
                        <a href="mailto:apmitrokostas@gmail.com" target="_blank" rel="noopener noreferrer">
                            <div className="icon"><Mail height={"3vh"} fill={"#efbbff"}/></div>
                            <p className="link_text">apmitrokostas@gmail.com</p>
                        </a>
                    </div>
                    <div className="p_link">
                        <a href="mailto:apm322@lehigh.edu" target="_blank" rel="noopener noreferrer">
                            <div className="icon"><Mail height={"3vh"} fill={"#efbbff"}/></div>
                            <p className="link_text">apm322@lehigh.edu</p>
                        </a>
                    </div>
                    <div className="p_link">
                        <a href="http://www.linkedin.com/in/alec-mitrokostas-1a3426173/" target="_blank" rel="noopener noreferrer">
                            <div className="icon"><Linkedin height={"3vh"} fill={"#efbbff"}/></div>
                            <p className="link_text">Alec Mitrokostas</p>
                        </a>
                    </div>
                    <div className="p_link">
                        <a href="http://www.github.com/amitroko/" target="_blank" rel="noopener noreferrer">
                            <div className="icon"><Github height={"3vh"} fill={"#efbbff"}/></div>
                            <p className="link_text">amitroko</p>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;