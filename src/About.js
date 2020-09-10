import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class About extends Component {
    render() {
        return(
            <div className="about-wrapper">
                <p>Hi, welcome to my website! Thanks for stopping by.</p>
                <p>My name is <b>Alec</b> and I'm a junior at Lehigh University pursuing a B.S. in <b>Computer Science and Business</b>.</p>
                <p>I'm currently serving as the <b>Professional Development Chairman</b> of the Computer Science and Business Association at Lehigh.</p>
                <p>My interests include blockchain technology, cryptocurrency, generative art, web development, electric guitar, music production, and skiing.</p>
                <p>If you're an <b>employer</b>&mdash;hello! If you have any questions about me, my resume, this website, or anything else, please reach out to me
                    at one of the email addresses on the sidebar, or via LinkedIn DM. I'd be happy to talk with you!</p>
                <p>If you're one of my <b>friends</b>&mdash;what's up? Let me know what you think of the site.</p>
                <p>If you're my <b>mom</b>&mdash;hi mom!</p>
                <span role="img" aria-label="hand">👋</span>
            </div>
        );
    }
}

export default About;