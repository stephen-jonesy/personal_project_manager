import React, { useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Project } from './components/project';
const selectProjectsId = (state) => state.projects;

export function Projects() {
    const projectsIds = useSelector(selectProjectsId, shallowEqual);
    const renderEachProject = projectsIds.map((project) => {
        return <Project key={project.projectId} id={project.projectId} />
    });


    // const projects = useSelector(selectProjects);
    // const projectsIds = () => projects.map((project) => project.projectId)
    
    // const renderEachProject = projectsIds.map((projectId) => {
    //     return <Project key={projectId} id={projectId} />
    // })
    
    return (  
        <ul className="project-list">{renderEachProject}</ul>
    );
}

