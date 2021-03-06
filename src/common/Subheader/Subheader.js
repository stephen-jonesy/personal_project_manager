
import React, { useState, useRef } from 'react';
import {
    Link,
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl, faGrip, faStopwatch, faCalendar } from '@fortawesome/free-solid-svg-icons'

export function Subheader({user}) {
    const listIcon = <FontAwesomeIcon icon={faListUl} />
    const gripIcon = <FontAwesomeIcon icon={faGrip} />
    const stopwatchIcon = <FontAwesomeIcon icon={faStopwatch} />
    const calendarIcon = <FontAwesomeIcon icon={faCalendar} />

    console.log(user.name);

    return (  

        <div className="sub-header" width="100">
            {/* <div>{user}</div> */}
            <Link to="/register">
                Register 
            </Link>
            <Link to="/dashboard">
                Dashboard
            </Link>
            <div>{user.name}</div>
        
        </div>




    );
};
