import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProject, toggleCompleted, togglePriority, updateNote } from '../projectsSlice';
import { Calendar } from './Calendar';
import { ProgressBar} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format, parseISO } from 'date-fns';

<FontAwesomeIcon icon="fa-solid fa-note-sticky" />

export function ProjectTimeline({ id, projectList }) {
    const project = () => {
        return projectList.find((project) => project.projectId === id);
    };
    const createdAt = new Date(project().createdAt);
    const dueDate = new Date(project().dueDate);
    // const formatedEndDate = moment(project().dueDate).format('DD/MM/YYYY');
    // const endDate = moment(formatedEndDate).toDate();

    // const formatedEndDate = format(dueDate, 'dd-MM-yyyy')

    // const formatedStartDate = format(new Date(createdAt), "yyyy/MM/dd");
    // const formatedEndDate = format(new Date(dueAt), "yyyy/MM/dd");
    const start = createdAt;
    const end = dueDate;
    const today = new Date();

    //use Math.abs to avoid sign
    const q = Math.abs(today-start);
    const d = Math.abs(end-start);
    const rounded = Math.round((q/d)*100);

    // const formatedStartDate = start.toLocaleDateString("en-UK");
    // console.log('createdAt', createdAt);
    // console.log('dueAt', dueAt);
    // console.log('formatedStartDate', formatedStartDate);
    // console.log('formatedEndDate', formatedEndDate);
    // console.log('end', end);
    console.log(createdAt);

    const now = rounded;

    return (  
        <li className="d-flex my-3 shadow-sm rounded bg-light" >
            <div>{project().projectName}</div>
            <ProgressBar now={now} label={`${now}%`} style={{width: "100%"}} />

        </li>

    );
};
