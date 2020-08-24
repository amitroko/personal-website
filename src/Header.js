import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

const linkStyle = {
    textDecoration: 'none',
    color: '#efbbff',

    "&:hover": {
        textDecoration: 'underline'
    }
}

class Header extends Component {
    render() {
        return (
                <nav>
                    <ul className="nav-links">
                        <Link to="/about" style={linkStyle}>
                            <li>About</li>
                        </Link>
                        <Link to="/coursework" style={linkStyle}>
                            <li>
                                Coursework
                            </li>
                        </Link>
                        <Link to="/projects" style={linkStyle}>
                            <li>
                                Projects
                            </li>
                        </Link>
                        <Link to="/genart" style={linkStyle}>
                            <li>
                                Gen. Art
                            </li>
                        </Link>
                    </ul>
                </nav>
        );
    }
}

export default Header;