import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProject, toggleCompleted, togglePriority, updateNote } from '../projectsSlice';
import { Calendar } from './Calendar';
import { ProgressBar} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
<FontAwesomeIcon icon="fa-solid fa-note-sticky" />

export function ProjectTimeline({ id, projectList }) {
    const project = () => {
        return projectList.find((project) => project.projectId === id);
    };
    const now = 60;
    const start = new Date(project().createdAt);
    const end = new Date(2023,11,1);
    const today = new Date();

    //use Math.abs to avoid sign
    const q = Math.abs(today-start);
    const d = Math.abs(end-start);
    const rounded = Math.round((q/d)*100) + "%";

    const formatedStartDate = start.toLocaleDateString("en-UK");
    console.log(formatedStartDate);

    return (  
        <li className="d-flex my-3 shadow-sm rounded bg-light" >
            <div>{project().projectName}</div>
            <ProgressBar now={now} label={`${now}%`} style={{width: "100%"}} />

        </li>

    );
};
