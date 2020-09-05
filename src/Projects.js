import React, {Component} from 'react';
import './Projects.css';

class Projects extends Component {
    render() {
        return(
            <div className="projects-wrapper">
                <div className="project">
                    <h4>QuickPlaylist</h4>
                    <p className="project-text">Create a new Spotify playlist and instantly populate it with tracks you have recently played. React.js.</p>
                </div>
                <div className="project">
                    <h4>4litresounds.com</h4>
                    <p className="project-text">A website I made for me and my friends' music project. React.js.</p>
                </div>
                <div className="project">
                    <h4>TopSlides</h4>
                    <p className="project-text">View your top artists and tracks as determined by Spotify in a slideshow format. React.js.</p>
                </div>
                <div className="project">
                    <h4>Cryptocurrency analysis bot</h4>
                    <p className="project-text">Test multiple trading algorithms on a variety of asset pairs via the Binance.us API. Python.</p>
                </div>
            </div>
        );
    }
}

export default Projects;