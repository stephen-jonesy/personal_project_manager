import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { NewProjectForm } from './components/NewProjectForm';
import { ProjectToolbar } from './components/ProjectToolbar';
import { Project } from './components/Project';
import Button from 'react-bootstrap/Button';
import { ReactSortable } from "react-sortablejs";



export function Projects() {
    const selectProjects = (state) => state.projects;

    const dispatch = useDispatch();
    const projects = useSelector(selectProjects);
    const [show, setShow] = useState(false);
    const array = projects.map((item) => ({
        ...item,
        selected: false       
    }));

    const [list, setList] = useState(array);

    useEffect(() => {
        setList(array);
    }, [JSON.stringify(array)]);

    const toggleShow = () => {
        setShow(!show);
    };

    const renderNewProjectForm = () => {
        if(show === true) {
            return <NewProjectForm toggleShow={toggleShow}/>

        }
    };

    console.log(list)

    return (  
        <div className="">
            < ProjectToolbar />
            <Button onClick={toggleShow} className="mb-4">{!show ? 'New project' : 'Dismiss Project'}</Button>

            <ul className="project-list ">

                {renderNewProjectForm()}

                <ReactSortable list={list} setList={setList}>
                    {list.map((project) => (
                        <Project key={project.projectId} id={project.projectId} />
                    ))}
                </ReactSortable>
            </ul>
        </div>
    );
}

