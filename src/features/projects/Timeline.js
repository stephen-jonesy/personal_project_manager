import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { ProjectTimeline } from './components/ProjectTimeline';
import { calculateTimelinePercentage, sortProjects } from './projectsSlice';

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
        console.log(projects);

    }, [JSON.stringify(lists)]);

    const clicked = () => {
        dispatch(sortProjects('timeline'));

    }

    // useEffect(() => {
    //     setList(array);
    // }, [JSON.stringify(array)]);

    // const timelineSort = () => {
    //     array.sort((a, b) => {
    //         return b.timeline - a.timeline;
    //     });
    //     setList(array);
    // };

    // useEffect(() => {
    //     setList(array);
    //     console.log(list);

    // }, [JSON.stringify(array)]);

    return (  
        <div className="">
            <button onClick={clicked}>Timeline</button>

            {projects.map((project) => (
                < ProjectTimeline key={project.projectId} id={project.projectId} projectList={projects} timelineSort={project.timeline} />
            ))}

        </div>
    );
}

