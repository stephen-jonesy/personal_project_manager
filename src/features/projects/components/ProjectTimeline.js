import React, { useState } from 'react';
import { ProgressBar} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

<FontAwesomeIcon icon="fa-solid fa-note-sticky" />

export function ProjectTimeline({ id, projectList }) {
    const project = () => {
        return projectList.find((project) => project.projectId === id);
    };
    const createdAt = new Date(project().createdAt);
    const dueDate = new Date(project().dueDate);

    const start = createdAt;
    const end = dueDate;
    const today = new Date();

    const q = Math.abs(today-start);
    const d = Math.abs(end-start);
    const rounded = Math.round((q/d)*100);

    console.log(createdAt);

    const now = rounded;

    return (  
        <li className="d-flex my-3 shadow-sm rounded bg-light" >
            <div>{project().projectName}</div>
            <ProgressBar now={now} label={`${now}%`} style={{width: "100%"}} />

        </li>

    );
};
