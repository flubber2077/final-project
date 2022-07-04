import React from "react";
import { NavLink } from 'react-router-dom';

export default function NavBar() {

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to='/'>Page 1</NavLink>
                </li>
                <li>
                    <NavLink to='/leaderboard'>Page 2</NavLink>
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