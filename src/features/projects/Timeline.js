import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { ProjectTimeline } from './components/ProjectTimeline';

export function Timeline() {
    const selectProjects = (state) => state.projects;
    const projects = useSelector(selectProjects);


    console.log(projects);
    return (  
        <div className="">
            <div>Timeline</div>

            {projects.map((project) => (
                < ProjectTimeline key={project.projectId} id={project.projectId} projectList={projects} />
            ))}

        </div>
    );
}

