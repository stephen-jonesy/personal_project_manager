import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProject, toggleCompleted } from '../projectsSlice';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';


const selectProjectById = (state, projectId) => {
    return state.projects.find((project) => project.projectId === projectId);
};

export function Project({ id }) {
    const [show, setShow] = useState(false);
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

    };

    return (  
        <li className="d-flex">
            <Button id="completed-btn" className="btn btn-primary" onClick={(e) => eventHandler(e.target)}>{isComplete ? 'True' : 'False'}</Button>
            <div>{projectName}</div>
            <Button ref={target} onClick={() => setShow(!show)}>
                Priority: un-set
            </Button>
            <Overlay target={target.current} show={show} placement="right">
                {(props) => (
                <Tooltip id="overlay-example" {...props}>
                    <Button>None</Button>
                    <Button>Low</Button>
                    <Button>Medium</Button>
                    <Button>High</Button>


                </Tooltip>
                )}
            </Overlay>
            
            <button id="delete-btn" onClick={(e) => eventHandler(e.target)}>x</button>


        </li>

    );
};
