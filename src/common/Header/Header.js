import React, { useState, useRef } from 'react';
import {
    BrowserRouter as Router,
    NavLink,
    activeClassName,
} from "react-router-dom";
import './_header.scss';
import logo from '../../Tuesday.svg'; // Tell webpack this JS file uses this image
import mobileLogo from '../../Tue.svg'; // Tell webpack this JS file uses this image

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl, faGrip, faStopwatch, faCalendar } from '@fortawesome/free-solid-svg-icons'

export function Header() {
    const listIcon = <FontAwesomeIcon icon={faListUl} />
    const gripIcon = <FontAwesomeIcon icon={faGrip} />
    const stopwatchIcon = <FontAwesomeIcon icon={faStopwatch} />
    const calendarIcon = <FontAwesomeIcon icon={faCalendar} />

    return (  
        <header >
            <div className="logo-container d-flex align-items-center">
                <NavLink to="/">
                    <img src={logo} alt="Logo" className="d-lg-block d-none" />
                    <img src={mobileLogo} alt="mobile Logo" className="d-lg-none" ></img>
                </NavLink>

            </div>
            <div className="nav-container">
                <nav>
                    <ul className="">
                        <li>
                            <NavLink to="/" activeClassName='is-active' exact>
                                <div className="d-flex">
                                    <div className="me-lg-4">{listIcon}</div>
                                    <div className="nav-page-name">Lists</div>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/cards" activeClassName='is-active'>
                                <div className="d-flex">
                                    <div className="me-lg-4">{gripIcon}</div>
                                    <div className="nav-page-name">Cards</div>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/timelines" activeClassName='is-active'>
                                <div className="d-flex">
                                    <div className="me-lg-4">{stopwatchIcon}</div>
                                    <div className="nav-page-name">Timelines</div>
                                </div>
                            
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/calendar" activeClassName='is-active'>
                                <div className="d-flex">
                                    <div className="me-lg-4">{calendarIcon}</div>
                                    <div className="nav-page-name">Calendar</div>
                                </div>

                            </NavLink>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>


    );
};