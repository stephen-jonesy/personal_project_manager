import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { ProjectTimeline } from './components/ProjectTimeline';
import Button from 'react-bootstrap/Button';

export function Timeline() {
    const selectProjects = (state) => state.projects;
    const projects = useSelector(selectProjects);
    let array = projects.map((item) => (
        {...item, timeline: 0}),

    );
    const [list, setList] = useState([]);
    let arr = [];

    // useEffect(() => {
    //     setList(array);

    // }, []);

    array.forEach((item, index) => {
        const createdAt = new Date(item.createdAt);
        const dueDate = new Date(item.dueDate);
    
        const start = createdAt;
        const end = dueDate;
        const today = new Date();
    
        const q = Math.abs(today-start);
        const d = Math.abs(end-start);

        if(start > today) {
            let rounded = 0;
            arr.push(rounded);

        } else if (today > end) {
            let rounded = 100;
            arr.push(rounded);
    
        } else {
            let rounded = Math.round((q/d)*100);
            arr.push(rounded);

            
        }
        item.timeline = arr[index];

    });

    useEffect(() => {
        setList(array);
    }, [JSON.stringify(array)]);

    const timelineSort = () => {
        array.sort((a, b) => {
            return b.timeline - a.timeline;
        });
        setList(array);
    };
    console.log(list);    

    // useEffect(() => {
    //     setList(array);
    //     console.log(list);

    // }, [JSON.stringify(array)]);

    return (  
        <div className="">
            <button onClick={timelineSort}>Timeline</button>

            {list.map((project) => (
                < ProjectTimeline key={project.projectId} id={project.projectId} projectList={list} timelineSort={project.timeline} />
            ))}

        </div>
    );
}

