import React, { useState } from 'react';
import { ProgressBar} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateDueDate, updateCreatedDate } from '../projectsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Calendar } from './Calendar';
import moment from 'moment';

<FontAwesomeIcon icon="fa-solid fa-note-sticky" />

export function ProjectTimeline({ id, projectList, timelineSort }) {
    const [startDate, setStartDate] = useState(new Date());
    const dispatch = useDispatch();

    const project = () => {
        return projectList.find((project) => project.projectId === id);
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

    // timelineSort(timelinePercentage());

    return (  
        <li className="d-flex my-3 shadow-sm rounded bg-light" >
            <div>{project().projectName}</div>
            <div style={{width: "100%"}}>
                <ProgressBar now={timelineSort} label={timelineSort === 100 ? 'Due' : `${timelineSort}%`} />
                <Calendar databaseDate={project().createdAt} updateDate={updateCreatedAt}/>
                <Calendar databaseDate={project().dueDate} updateDate={updateDue}/>
            </div>
        </li>

    );
};
