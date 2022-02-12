import React, { useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { addProject } from './projectsSlice';
import { Project } from './components/project';

const selectProjects = (state) => state.projects;

export function Projects() {
    const dispatch = useDispatch();

    const projects = useSelector(selectProjects, shallowEqual);
    console.log(projects)
    const renderEachProject = projects.map((project) => {
        return <Project key={project.projectId} id={project.projectId} />
    });
    
	const addProjectButton = () => {
        dispatch(addProject());

    }

    // const projects = useSelector(selectProjects);
    // const projectsIds = () => projects.map((project) => project.projectId)
    
    // const renderEachProject = projectsIds.map((projectId) => {
    //     return <Project key={projectId} id={projectId} />
    // })
    
    return (  
        <div>
            <button onClick={addProjectButton}>Add Project</button>
            <ul className="project-list">{renderEachProject}</ul>
        </div>
    );
}

