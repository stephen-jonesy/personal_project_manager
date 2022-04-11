import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Button, OverlayTrigger, Tooltip, Toast} from 'react-bootstrap';
import CloseButton from 'react-bootstrap/CloseButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addProject } from '../../../features/projects/projectsSlice';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import { GripVertical, Sticky, Trash, PencilSquare} from "react-bootstrap-icons";

export function NewProjectForm({ toggleShow }) {
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);
    const [projectName, setName] = useState('');
    const [priority, setPriority] = useState('None');
    const [status, setStatus] = useState('None');
    const [noteValue, setNote] = useState('');
    const [dueDate, setDueDate] = useState(new Date());
    const dispatch = useDispatch();

    moment().format();
    
	const addProjectButton = (e) => {
        e.preventDefault();        

        const createdAt = moment().format('YYYY/MM/DD');
        const unique_id = uuid();
        const small_id = unique_id.slice(0,8);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const today  = new Date();
        const formatedDueDate = moment(dueDate).format('YYYY/MM/DD');
        console.log(formatedDueDate);
        const projectObj = {
            projectName: projectName, 
            small_id: small_id, 
            dueDate: formatedDueDate, 
            priority: priority, 
            status: status,
            createdAt: createdAt, 
            note: noteValue 
        };

        dispatch(addProject(projectObj));

        toggleShow();

    };           

    return (  
        <form className="" onSubmit={addProjectButton} >
            <div className="project-container new-project-container " >
                <div className="shadow-container"></div>

                <div className="project d-flex"  >

                    {/* Project Name column */}

                    <div className="col name-column">
                        <input 
                            placeholder="New Project"  
                            value={projectName}   
                            onChange={(e) => {setName(e.target.value)}} 
                            required
                            
                        />
                    </div>
                    <div className="devider"></div>

                    {/* Due column */}

                    <div className="due-column col-3 "> 
                        <DatePicker dateFormat="dd/MM/yyyy" selected={dueDate} onChange={(date) => setDueDate(date)} />
                    </div>
                    <div className="devider"></div>

                    {/* Priority column */}
                    <div className="col-2">
                        <OverlayTrigger 
                            trigger="click" 
                            placement="bottom" 
                            rootClose="true"
                            overlay={
                                <Tooltip id="overlay" >
                                    <Button id="priority-toggle-btn" onClick={() => setPriority('None')}>None</Button>
                                    <Button id="priority-toggle-btn" onClick={() => setPriority('Low')}>Low</Button>
                                    <Button id="priority-toggle-btn" onClick={() => setPriority('Medium')}>Medium</Button>
                                    <Button id="priority-toggle-btn" onClick={() => setPriority('High')}>High</Button>
                                </Tooltip>
                                
                            }
                        >
                            <Button className="priority-btn col-6 btn-secondary" style={{background: priority === "None" ? "#48484ecc" : priority === "Low" ? "#33CE71" : priority === "Medium" ? "#FA8035" : priority === "High" ? "#e01414cc" : "#FA8035" }}> {priority}</Button>
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
                                    <Button id="priority-toggle-btn" onClick={() => setStatus('None')}>None</Button>
                                    <Button id="priority-toggle-btn" onClick={() => setStatus('Low')}>Low</Button>
                                    <Button id="priority-toggle-btn" onClick={() => setStatus('Medium')}>Medium</Button>
                                    <Button id="priority-toggle-btn" onClick={() => setStatus('High')}>High</Button>
                                </Tooltip>
                                
                            }
                        >
                            <Button className="priority-btn col-6 btn-secondary" style={{background: status === "None" ? "#48484ecc" : status === "Done" ? "#33CE71" : status === "Doing" ? "#FA8035" : status === "Stuck" ? "#e01414cc" : "#FA8035" }}> {status}</Button>
                        </OverlayTrigger>
                    </div>
                    <div className="devider"></div>

                    {/* Notes column */}

                    <div className="col-1">
                        <Button onClick={toggleShowA} className="note-btn"> <Sticky width="24" height="24" color="#48484e99"/></Button>
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
                            <button type="button" onClick={toggleShowA}>Update Note</button>
                            </Toast.Body>
                        </Toast>
                    </div>
                    <div className="devider"></div>

                    {/* submit column */}

                    <div className="col-1">
                        <Button className="create-btn" type="submit" value="Create" onClick={() => addProjectButton}>Create</Button>

                    </div>

                </div>

            </div>
        </form>
        /* 
        <form className="d-flex mb-5 shadow-sm rounded bg-light" >

            <div id="completed-btn" className="col-1"></div>
            <div className="col-4"><div className="row"><div className="col-12">            
                <input placeholder="New Project"  value={projectName}   onChange={(e) => {setName(e.target.value)}} />
            </div></div></div>
            <div className="col-3 d-flex"><DatePicker dateFormat="dd/MM/yyyy" selected={dueDate} onChange={(date) => setDueDate(date)} /></div>

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
                        <textarea value={noteValue} placeholder="Add a note" onChange={(e) => {setNote(e.target.value)}}></textarea>
                        <button type="button" onClick={toggleShowA}>Update Note</button>
                    </Toast.Body>
                </Toast>
            </div>
            <Button className="col-1" type="submit" value="Create" onClick={addProjectButton}>Create</Button>
            
        </form> */
    );
};