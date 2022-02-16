import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProject, toggleCompleted, togglePriority, updateNote } from '../projectsSlice';
import { Calendar } from './Calendar';
import Button from 'react-bootstrap/Button';
import {OverlayTrigger, Overlay, Tooltip, Toast} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons'
import { addProject } from '../projectsSlice';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
<FontAwesomeIcon icon="fa-solid fa-note-sticky" />

export function NewProjectForm({ toggleShow }) {
    console.log('new project');
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);
    const [projectName, setName] = useState('');
    const [Priority, setPriority] = useState('None');
    const [noteValue, setNote] = useState('');
    const noteIcon = <FontAwesomeIcon icon={faNoteSticky} />
    const dispatch = useDispatch();

    moment().format();
    
	const addProjectButton = (event) => {
        const createdAt = moment().format('DD/MM/YY HH:mm:ss');
        const unique_id = uuid();
        const small_id = unique_id.slice(0,8);
        event.preventDefault();        
        const projectObj = {projectName: projectName, small_id: small_id, Priority: Priority, createdAt: createdAt, note: noteValue };
        dispatch(addProject(projectObj));
        toggleShow();
    };

    return (  
        <form className="d-flex mb-5 shadow-sm rounded bg-light" >

            <div id="completed-btn" className="col-1"></div>
            <div className="col-4"><div className="row"><div className="col-12">            
                <input placeholder="New Project"  value={projectName}   onChange={(e) => {setName(e.target.value)}} />
            </div></div></div>
            <div className="col-3 d-flex"> <Calendar/></div>

            <OverlayTrigger 
                trigger="click" 
                placement="bottom" 
                rootClose="true"
                overlay={
                    <Tooltip id="overlay" >
                        <Button id="priority-toggle-btn" onClick={() => setPriority('None')}>None</Button>
                        <Button id="priority-toggle-btn" onClick={() => setPriority('Low')}>Low</Button>
                        <Button id="priority-toggle-btn" onClick={() => setPriority('Medium')}>Medium</Button>
                        <Button id="priority-toggle-btn" onClick={() => setPriority('High')} >High</Button>
                    </Tooltip>
                    
                }
            >
                <Button className="col-1 btn-secondary"> {Priority}</Button>
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
                        <textarea value={noteValue} placeholder="Add a note" onChange={(e) => {setNote(e.target.value)}}></textarea>
                        <button type="submit" >Update Note</button>
                    </Toast.Body>
                </Toast>
            </div>
            <Button className="col-1" type="submit" value="Create" onClick={addProjectButton}>Create</Button>
            
        </form>
    );
};