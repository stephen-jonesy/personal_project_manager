import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProject } from '../projectsSlice';


const selectProjectById = (state, projectId) => {
    return state.projects.find((project) => project.projectId === projectId);
};

export function Project({ id }) {
    const dispatch = useDispatch();

    const {dueDate, isCompleted, note, priority, projectId, projectName} = useSelector((state) => selectProjectById(state, id));
    const onDelete = () => {
        dispatch(removeProject(id));
    };

    return (  
        <li>
            <div>{projectName}</div>
            <button onClick={onDelete}>x</button>
        </li>

    );
};
