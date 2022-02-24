import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProject, toggleCompleted, togglePriority, updateNote } from '../projectsSlice';
import { Calendar } from './Calendar';
import {Button, OverlayTrigger, Overlay, Tooltip, Toast} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons'
<FontAwesomeIcon icon="fa-solid fa-note-sticky" />

export function ProjectTimeline({ id, projectList }) {
    const project = () => {
        return projectList.find((project) => project.projectId === id);
    };
    
    console.log(project().projectName);

    const start = new Date(2015,6,1);
    const end = new Date(2023,11,1);
    const today = new Date();

    //use Math.abs to avoid sign
    const q = Math.abs(today-start);
    const d = Math.abs(end-start);
    const rounded = Math.round((q/d)*100) + "%";


    return (  
        <div>{project.projectName}</div>

    );
};
