import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { ProjectTimeline } from './components/ProjectTimeline';

export function Timeline() {
    const selectProjects = (state) => state.projects;
    const projects = useSelector(selectProjects);
    let array = projects.map((item) => (
        {...item, timeline: 0}),

    );
    let arr = [];

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
        console.log(arr);
        item.timeline = arr[index];

    });


 
    console.log(array);

    return (  
        <div className="">
            <div>Timeline</div>

            {array.map((project) => (
                < ProjectTimeline key={project.projectId} id={project.projectId} projectList={projects} timelineSort={project.timeline} />
            ))}

        </div>
    );
}

