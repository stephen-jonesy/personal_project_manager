import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProject, toggleCompleted, togglePriority, updateNote } from '../projectsSlice';
import { Calendar } from './Calendar';
import {Button, OverlayTrigger, Overlay, Tooltip, Toast} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons'
<FontAwesomeIcon icon="fa-solid fa-note-sticky" />

const selectProjectById = (state, projectId) => {
    return state.projects.find((project) => project.projectId === projectId);
};

export function Project({ id }) {
    const {dueDate, isComplete, note, priority, projectId, projectName} = useSelector((state) => selectProjectById(state, id));
    const dispatch = useDispatch();
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);
    const [noteValue, setNote] = useState(note);
    const noteIcon = <FontAwesomeIcon icon={faNoteSticky} />

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

    };

    const formSubmit = (e) => {
        e.preventDefault();     
        dispatch(updateNote([id, noteValue]));
        toggleShowA();
    }

    return (  
        <li className="d-flex my-3 shadow-sm rounded bg-light" style={isComplete ? {opacity: '0.6'} : {opacity: '1'}} >

            <Button id="completed-btn" className="btn btn-primary col-1" onClick={(e) => eventHandler(e.target)}>{isComplete ? 'True' : 'False'}</Button>
            <div className="col-4"><div className="row"><div className="col-12">{projectName}</div></div></div>
            <div className="col-3 d-flex"> <Calendar dueDate={dueDate} id={id}/></div>

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
                <Button className="col-1 btn-secondary"> {priority}</Button>
            </OverlayTrigger>

            <div className="col-2">
                <Button onClick={toggleShowA} className="">Notes {noteIcon}</Button>
                <Toast show={showA} onClose={toggleShowA} style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                    <Toast.Header>
                        <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                        />
                        <strong className="me-auto">Note</strong>
                        <small>{projectName}</small>
                    </Toast.Header>
                    <Toast.Body>
                    <form type="submit">
                        <textarea value={noteValue} placeholder="Add a note" onChange={(e) => {setNote(e.target.value)}}></textarea>
                        <button type="submit" onClick={formSubmit}>Update Note</button>
                    </form>
                    </Toast.Body>
                </Toast>
            </div>
            <div className="col-1"><button id="delete-btn" className="btn" onClick={(e) => eventHandler(e.target)}>x</button></div>
        </li>

    );
};
