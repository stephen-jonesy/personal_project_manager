import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { ProjectTimeline } from './components/ProjectTimeline';
import { calculateTimelinePercentage, sortProjects } from '../../features/projects/projectsSlice';

export function Timeline() {

    const selectProjects = (state) => state.projects;
    const projects = useSelector(selectProjects);
    const [list, setList] = useState(projects);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(calculateTimelinePercentage());

    }, []);
    let lists = projects;

    useEffect(() => {
        dispatch(calculateTimelinePercentage());
        setList(lists);

    }, [JSON.stringify(lists)]);

    const clicked = () => {
        dispatch(sortProjects('timeline'));

    }

    return (  
        <div className="">
            <button onClick={clicked}>Timeline</button>

            {projects.map((project) => (
                < ProjectTimeline key={project.projectId} id={project.projectId} projectList={projects} timelineSort={project.timeline} />
            ))}

        </div>
    );
}

