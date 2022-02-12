import React, { useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Project } from './components/project';

const selectProjects = (state) => state.projects;

export function Projects() {
    const dispatch = useDispatch();

    const projects = useSelector(selectProjects, shallowEqual);
    console.log(projects)
    const renderEachProject = projects.map((project) => {
        return <Project key={project.projectId} id={project.projectId} />
    });
    
    return (  
        <div>

            <ul className="project-list">{renderEachProject}</ul>
        </div>
    );
}

