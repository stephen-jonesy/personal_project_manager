import React, { useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { NewProjectForm } from './components/NewProjectForm';
import { Project } from './components/Project';
import Button from 'react-bootstrap/Button';

const selectProjects = (state) => state.projects;

export function Projects() {
    const dispatch = useDispatch();
    const projects = useSelector(selectProjects, shallowEqual);
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    };

    const renderNewProjectForm = () => {
        if(show === true) {
            return <NewProjectForm toggleShow={toggleShow}/>

        }
    };

    const renderEachProject = projects.map((project) => {
        return <Project key={project.projectId} id={project.projectId} />

    });
    
    return (  
        <div className="">

            <ul className="project-list ">
                <li className="d-flex mt-3 mb-4 shadow-sm rounded">
                    <div className="col-1"></div>
                    <div className="col-4">Projects</div>
                    <div className="col-3">Due Date</div>
                    <div className="col-1">Priority</div>
                    <div className="col-2"></div>
                    <div className="col-1"></div>

                </li>
            </ul>
            <Button onClick={toggleShow} className="mb-4">{!show ? 'New project' : 'Dismiss Project'}</Button>

            <ul className="project-list ">

                {renderNewProjectForm()}
                {renderEachProject}
            </ul>
        </div>
    );
}

