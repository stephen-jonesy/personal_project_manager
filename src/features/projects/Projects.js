import React, { useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { NewProjectForm } from './components/NewProjectForm';
import { ProjectToolbar } from './components/ProjectToolbar';
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

    // const sorted = projects.sort((a, b) => {
    //     let fa = a.projectName.toLowerCase(),
    //         fb = b.projectName.toLowerCase();
    
    //     if (fa < fb) {
    //         return -1;
    //     }
    //     if (fa > fb) {
    //         return 1;
    //     }
    //     return 0;
    // });
    const array = [...projects].sort(function(a, b){
        if(a.projectName < b.projectName) { return -1; }
        if(a.projectName > b.projectName) { return 1; }
        return 0;
    });
    

    // const sorted = projects.sort((a, b) => (a.projectName > b.projectName) ? 1 : -1)
    
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
            < ProjectToolbar />
            <Button onClick={toggleShow} className="mb-4">{!show ? 'New project' : 'Dismiss Project'}</Button>

            <ul className="project-list ">

                {renderNewProjectForm()}
                {renderEachProject}
            </ul>
        </div>
    );
}

