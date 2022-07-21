import React from "react";
import { NavLink } from 'react-router-dom';

export default function NavBar() {

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to='/'>Main Page</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
                {/* <li>
                    <NavLink to='/'>Login</NavLink>
                </li> */}
            </ul>
        </nav>
    );
}