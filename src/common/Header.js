import React, { useState, useRef } from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import './_header.scss';
import logo from '../Tuesday.svg'; // Tell webpack this JS file uses this image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl, faGrip, faStopwatch, faCalendar } from '@fortawesome/free-solid-svg-icons'

export function Header() {
    const listIcon = <FontAwesomeIcon icon={faListUl} />
    const gripIcon = <FontAwesomeIcon icon={faGrip} />
    const stopwatchIcon = <FontAwesomeIcon icon={faStopwatch} />
    const calendarIcon = <FontAwesomeIcon icon={faCalendar} />

    return (  
        <header className=" ">
            <div className="logo-container d-flex align-items-center">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>

            </div>
            <div className="nav-container">
                <nav>
                    <ul className="">
                        <li>
                            <Link to="/">
                                <div className="d-flex">
                                    <div>{listIcon}</div>
                                    <div>Lists</div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/timelines">
                                <div className="d-flex">
                                    <div>{gripIcon}</div>
                                    <div>Cards</div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/timelines">
                            <div className="d-flex">
                                <div>{stopwatchIcon}</div>
                                <div>Timelines</div>
                            </div>
                            
                            </Link>
                        </li>
                        <li>
                            <Link to="/timelines">
                                <div className="d-flex">
                                    <div>{calendarIcon}</div>
                                    <div>Calendar</div>
                                </div>

                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>


    );
};