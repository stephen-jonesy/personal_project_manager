import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProject, toggleCompleted } from '../projectsSlice';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';


const selectProjectById = (state, projectId) => {
    return state.projects.find((project) => project.projectId === projectId);
};

export function Project({ id }) {
    const target = useRef(null);
    
    const dispatch = useDispatch();

    const {dueDate, isComplete, note, priority, projectId, projectName} = useSelector((state) => selectProjectById(state, id));

    const eventHandler = (e) => {
        if (e.id === "completed-btn") {
            dispatch(toggleCompleted(id));

        };
        if (e.id === "delete-btn") {
            dispatch(removeProject(id));
        };
        if (e.id === "priority-btn") {
            console.log('is priority');

        };
        // if (e.id != "priority-btn") {
        //     console.log('not priority');
        //     setShow(!show);

        // };

    };

    return (  
        <li className="d-flex">
            <Button id="completed-btn" className="btn btn-primary col-2" onClick={(e) => eventHandler(e.target)}>{isComplete ? 'True' : 'False'}</Button>
            <div className="col">{projectName}</div>


            <OverlayTrigger 
                trigger="click" 
                placement="bottom" 
                rootClose="true"
                overlay={
                    <Tooltip id="overlay" >
                    <Button>None</Button>
                    <Button>Low</Button>
                    <Button>Medium</Button>
                    <Button>High</Button>

                </Tooltip>
                    
                }
            >
                    <Button className="col">Priority: Unset</Button>
            </OverlayTrigger>
            
            <div className="col-1"><button id="delete-btn" onClick={(e) => eventHandler(e.target)}>x</button></div>


        </li>

    );
};
