import React, { useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Project } from './components/project';

const selectProjects = (state) => state.projects;

export function Projects() {
    const dispatch = useDispatch();
    const projects = useSelector(selectProjects, shallowEqual);

    console.log(projects);

    const renderEachProject = projects.map((project) => {
        return <Project key={project.projectId} id={project.projectId} />
    });
    
    return (  
        <div className="">

            <ul className="project-list ">
                <li className="d-flex my-3 shadow-sm rounded">
                    <div className="col-1"></div>
                    <div className="col-3">Projects</div>
                    <div className="col-3">Due Date</div>
                    <div className="col-2">Priority</div>
                    <div className="col-2"></div>
                    <div className="col-1"></div>

                </li>
                {renderEachProject}
            </ul>
        </div>
    );
}

