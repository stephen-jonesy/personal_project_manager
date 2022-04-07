import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateNote } from '../../../features/projects/projectsSlice';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Sticky } from "react-bootstrap-icons";
import { Row, Toast} from 'react-bootstrap';
import { PencilSquare } from "react-bootstrap-icons";


export function Note( {project}) {

    const {projectName, dueDate, isComplete, note, priority, status, projectId} = project;

    const [showNote, setShowNote] = useState(false);
    const [noteValue, setNote] = useState(note);
    const [showNoteTextarea, setShowNoteTextarea] = useState(false);

    const dispatch = useDispatch();
    const toggleshowNote = () => setShowNote(!showNote);
    const toggleShowNoteTextarea = () => setShowNoteTextarea(!showNoteTextarea); 

    const updateNoteFunct = (e) =>  {
        e.preventDefault();     
        dispatch(updateNote([projectId, noteValue]));
        toggleshowNote();
        console.log("note submited");
        toggleShowNoteTextarea();


    }

    const showNameInputFunct = () => {

        if (!showNoteTextarea) {
            return <div><div>{note}</div><div className="edit-container"><button className="edit-button" onClick={toggleShowNoteTextarea}><p className="mx-1">edit</p>< PencilSquare /></button></div></div>;
        } else {
            return <form type="submit"><div className="textarea-container"><textarea  value={noteValue} placeholder="Add a note" onChange={(e) => {setNote(e.target.value)}}></textarea><button type="submit"  id="note-submit" onClick={updateNoteFunct}>Update Note</button></div></form>
        }
        
    }


    return (  
        <div className="col-1">
            <button onClick={toggleshowNote} className={note.length > 0 ? 'note-btn note-active' : 'note-btn'}> <Sticky width="24" height="24" /></button>
            <Toast show={showNote} onClose={toggleshowNote} style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
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
                    {showNameInputFunct()}
                
                </Toast.Body>
            </Toast>
        </div>
    );


};