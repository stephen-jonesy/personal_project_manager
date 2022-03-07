import React, { useState } from 'react';
import { ProgressBar} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateDueDate, updateCreatedDate } from '../projectsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Calendar } from './Calendar';
import moment from 'moment';

<FontAwesomeIcon icon="fa-solid fa-note-sticky" />

export function ProjectTimeline({ id, projectList }) {
    const [startDate, setStartDate] = useState(new Date());
    const dispatch = useDispatch();

    const project = () => {
        return projectList.find((project) => project.projectId === id);
    };
    const createdAt = new Date(project().createdAt);
    const dueDate = new Date(project().dueDate);

    const start = createdAt;
    const end = dueDate;
    const today = new Date();

    const q = Math.abs(today-start);
    const d = Math.abs(end-start);
    const rounded = Math.round((q/d)*100);

    console.log(createdAt);
    
    const reenderPercentage = () => {
        if(start > today) {
            const percentage = 100;
            return <ProgressBar now={percentage} label={`0%`} />

        } if (today > end) {
            const percentage = 100;
            return <ProgressBar now={percentage} label={`Due`} />

        } else {
            const percentage = rounded;
            return <ProgressBar now={percentage} label={`${percentage}%`} />
        
        }

    };

    const updateCreatedAt = (date) => {
        setStartDate(date);
        const formatedDueDate = moment(date).format('YYYY/MM/DD');
        console.log(formatedDueDate);
        dispatch(updateCreatedDate([id, formatedDueDate]));

    }

    const updateDue = (date) => {
        setStartDate(date);
        const formatedDueDate = moment(date).format('YYYY/MM/DD');
        console.log(formatedDueDate);
        dispatch(updateDueDate([id, formatedDueDate]));

    }

    return (  
        <li className="d-flex my-3 shadow-sm rounded bg-light" >
            <div>{project().projectName}</div>
            <div style={{width: "100%"}}>
                {reenderPercentage()}
                <Calendar databaseDate={project().createdAt} updateDate={updateCreatedAt}/>
                <Calendar databaseDate={project().dueDate} updateDate={updateDue}/>
            </div>
        </li>

    );
};
