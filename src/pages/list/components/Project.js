import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProject, toggleCompleted, togglePriority, toggleStatus, updateProjectName, updateNote, updateCreatedDate, updateDueDate } from '../../../features/projects/projectsSlice';
import { Calendar } from '../../../common/Calendar';
import { Note } from '../../../common/Note';
import {Button, OverlayTrigger, Overlay, Tooltip, Toast} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faGrip } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { GripVertical, Sticky, Trash, PencilSquare} from "react-bootstrap-icons";

export function Project({ id, projectList }) {
    const project = () => {
        return projectList.find((project) => project.projectId === id);
    };
    const {projectName, dueDate, isComplete, note, priority, status, projectId} = project();
    const dispatch = useDispatch();
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);
    const [showNameInput, setShowNameInput] = useState(false);
    const toggleShowNameInput = () => setShowNameInput(!showNameInput);
    const [projectNameValue, setName] = useState(projectName);
    const [noteValue, setNote] = useState(note);
    const [startDate, setStartDate] = useState(new Date());
    const checkIcon = <FontAwesomeIcon icon={faCheck} />
    const gripIcon = <FontAwesomeIcon icon={faGrip} />
    const projectPropObject = {
        projectName: projectName,
        note: note,
        projectId: projectId
    }
    
    const eventHandler = (e) => {

        if (e.id === "completed-btn") {
            dispatch(toggleCompleted(id));

        };

        if (e.id === "delete-btn") {
            dispatch(removeProject(id));

        };

        if (e.id === "priority-toggle-btn") {
            dispatch(togglePriority([id, e.innerText]));

        };
        if (e.id === "status-toggle-btn") {
            dispatch(toggleStatus([id, e.innerText]));

        };

    };

    const formSubmit = (e) => {
        e.preventDefault();     

        if (e.target.id === "project-name-submit") {

            dispatch(updateProjectName([id, projectNameValue]));
            toggleShowNameInput();

        }
        
    }


    const updateCreatedAt = (date) => {
        setStartDate(date);
        const formatedDueDate = moment(date).format('YYYY/MM/DD');
        dispatch(updateCreatedDate([id, formatedDueDate]));

    }

    const updateDue = (date) => {
        setStartDate(date);
        const formatedDueDate = moment(date).format('YYYY/MM/DD');
        dispatch(updateDueDate([id, formatedDueDate]));

    }

    const showNameInputFunct = () => {

        var strFirstThree = projectNameValue.substring(0,15);

        if (!showNameInput) {
            return <div className="col" >{strFirstThree}<div className="pencil-icon" onClick={toggleShowNameInput}>< PencilSquare /></div></div>;
        } else {
            return <form id="project-name-submit"type="submit" onSubmit={formSubmit} ><input className="project-name-input" value={projectNameValue} required onChange={(e) => {setName(e.target.value)}}></input></form>
        }
        
    }

    return (  

        <div className="project-container" style={isComplete ? {opacity: '0.6'} : {opacity: '1'}}>
            <div className="shadow-container"></div>

            <li className="project d-flex"  >

                {/* Completed column */}

                <div className="completed-btn-container col-1">
                    <button id="completed-btn" className="completed-btn btn btn-primary" onClick={(e) => eventHandler(e.target)}>{checkIcon}</button>
                </div>

                <div className="devider"></div>


                {/* Project Name column */}

                <div className="col-2 name-column">{showNameInputFunct()}</div>
                <div className="devider"></div>

                {/* Due column */}

                <div className="due-column col-3 "> <Calendar databaseDate={dueDate} updateDate={updateDue}/></div>
                <div className="devider"></div>

                {/* Priority column */}
                <div className="col-2">
                    <OverlayTrigger 
                        trigger="click" 
                        placement="bottom" 
                        rootClose="true"
                        overlay={
                            <Tooltip id="overlay" >
                                <Button id="priority-toggle-btn" onClick={(e) => eventHandler(e.target)}>None</Button>
                                <Button id="priority-toggle-btn" onClick={(e) => eventHandler(e.target)}>Low</Button>
                                <Button id="priority-toggle-btn" onClick={(e) => eventHandler(e.target)}>Medium</Button>
                                <Button id="priority-toggle-btn" onClick={(e) => eventHandler(e.target)}>High</Button>
                            </Tooltip>
                            
                        }
                    >
                        <button className="priority-btn col-6 btn-secondary" style={{background: priority === "None" ? "#48484ecc" : priority === "Low" ? "#33CE71" : priority === "Medium" ? "#FA8035" : priority === "High" ? "#e01414cc" : "#FA8035" }}> {priority}</button>
                    </OverlayTrigger>
                </div>
                <div className="devider"></div>

                {/* Status column */}

                <div className="col-2">
                    <OverlayTrigger 
                        trigger="click" 
                        placement="bottom" 
                        rootClose="true"
                        overlay={
                            <Tooltip id="overlay" >
                                <Button id="status-toggle-btn" onClick={(e) => eventHandler(e.target)}>None</Button>
                                <Button id="status-toggle-btn" onClick={(e) => eventHandler(e.target)}>Stuck</Button>
                                <Button id="status-toggle-btn" onClick={(e) => eventHandler(e.target)}>Doing</Button>
                                <Button id="status-toggle-btn" onClick={(e) => eventHandler(e.target)}>Done</Button>
                            </Tooltip>
                            
                        }
                    >
                        <button className="priority-btn col-6 btn-secondary" style={{background: status === "None" ? "#48484ecc" : status === "Done" ? "#33CE71" : status === "Doing" ? "#FA8035" : status === "Stuck" ? "#e01414cc" : "#FA8035" }}> {status}</button>
                    </OverlayTrigger>
                </div>
                <div className="devider"></div>

                {/* Notes column */}

                < Note isNewProject={false} project={projectPropObject} />

                <div className="devider"></div>

                {/* Delete column */}

                <div className="col">
                    <button id="delete-btn" className="btn" onClick={(e) => eventHandler(e.target)}>
                        <Trash width="22" height="22" color="#48484e99"/>
                    </button>
                </div>

            </li>

            <div className="grab-icon">< GripVertical  /></div>

        </div>

    );
};
