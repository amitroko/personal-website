import React, {Component} from 'react';
import './App.css';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
                <nav>
                    <ul className="nav-links">
                        <NavLink to="/about" activeClassName="active-link" style={{textDecoration: 'none'}}>
                            <li>About</li>
                        </NavLink>
                        <NavLink to="/coursework" activeClassName="active-link" style={{textDecoration: 'none'}}>
                            <li>
                                Coursework
                            </li>
                        </NavLink>
                        <NavLink to="/projects" activeClassName="active-link" style={{textDecoration: 'none'}}>
                            <li>
                                Projects
                            </li>
                        </NavLink>
                        <NavLink to="/genart" activeClassName="active-link" style={{textDecoration: 'none'}}>
                            <li>
                                Gen. Art
                            </li>
                        </NavLink>
                    </ul>
                </nav>
        );
    }
}

export default Header;