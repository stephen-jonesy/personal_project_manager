import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProject, toggleCompleted, togglePriority, updateNote } from '../projectsSlice';
import { Calendar } from './Calendar';
import { ProgressBar} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format, parseISO } from 'date-fns';
import moment from 'moment';

<FontAwesomeIcon icon="fa-solid fa-note-sticky" />

export function ProjectTimeline({ id, projectList }) {
    const project = () => {
        return projectList.find((project) => project.projectId === id);
    };

    const createdAt = project().createdAt;
    const dueAt = project().dueDate;
    const formatedStartDate = moment(createdAt).format('DD/MM/YYYY');
    const formatedEndDate = moment(dueAt);

    // const formatedStartDate = format(new Date(createdAt), "yyyy/MM/dd");
    // const formatedEndDate = format(new Date(dueAt), "yyyy/MM/dd");
    // const start = new Date(formatedStartDate);
    // const end = new Date(formatedEndDate);
    // const today = new Date();

    // //use Math.abs to avoid sign
    // const q = Math.abs(today-start);
    // const d = Math.abs(end-start);
    // const rounded = Math.round((q/d)*100);

    // // const formatedStartDate = start.toLocaleDateString("en-UK");
    // console.log('dueAt', dueAt);
    // console.log('formatedEndDate', formatedEndDate);
    // console.log('end', end);

    const now = '';

    return (  
        <li className="d-flex my-3 shadow-sm rounded bg-light" >
            <div>{project().projectName}</div>
            <ProgressBar now={now} label={`${now}%`} style={{width: "100%"}} />

        </li>

    );
};
