import React, {Component} from 'react';
import './Projects.css';
import QP from './images/qplaylist.png';
import FourL from './images/4L.png';
import TS from './images/topslides.png';
import Crypto from './images/crypto.png';

class Projects extends Component {
    render() {
        return(
            <div className="projects-wrapper">
                <div className="project">
                    <h4>QuickPlaylist</h4>
                    <a href="http://spotify-quickplaylist.herokuapp.com" target="_blank" rel="noopener noreferrer">
                        <div className="project-image">
                            <img src={QP} alt="QuickPlaylist"/>
                        </div>
                    </a>
                    <p className="project-text">Create a new Spotify playlist and instantly populate it with tracks you have recently played. React.</p>
                </div>
                <div className="project">
                    <h4>4litresounds.com</h4>
                    <a href="http://4litresounds.com" target="_blank" rel="noopener noreferrer">
                        <div className="project-image">
                            <img src={FourL} alt="4litresounds"/>
                        </div>
                    </a>
                    <p className="project-text">A promotional website I made for me and my friends' music project. React.</p>
                </div>
                <div className="project">
                    <h4>TopSlides</h4>
                        <div className="project-image">
                            <img src={TS} alt="TopSlides"/>
                        </div>
                    <p className="project-text">View your top artists and tracks as determined by Spotify in a slideshow format. React.</p>
                </div>
                <div className="project">
                    <h4>Cryptocurrency backtester</h4>
                    <a href="https://github.com/amitroko/cryptocurrency_backtester" target="_blank" rel="noopener noreferrer">
                        <div className="project-image">
                            <img src={Crypto} alt="crypto"/>
                        </div>
                    </a>
                    <p className="project-text">Test multiple trading algorithms on a variety of asset pairs via the Binance.US API. Python.</p>
                </div>
            </div>
        );
    }
}

export default Projects;