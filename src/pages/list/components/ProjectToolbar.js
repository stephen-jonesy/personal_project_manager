import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateDueDate, sortProjects } from '../../../features/projects/projectsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

export function ProjectToolbar() {
    const chevron = <FontAwesomeIcon icon={faChevronUp} size="sm" />;
    const dispatch = useDispatch();
    const [SortType, setSortType] = useState('');

    const sortHandler = (e) => {
        setSortType(e.target.value)

    };

    useEffect(() => {
        const payload = SortType;
        dispatch(sortProjects(payload));
        console.log(SortType)


    }, [SortType]);

    return (  
        <ul className="project-list ">
            <li className="d-flex mt-3 mb-4 shadow-sm rounded">
                <div className="col-1">
                    <button value="isComplete" onClick={(e) => sortHandler(e)} style={SortType === "isComplete" ? {opacity: '0.6'} : {opacity: '1'}}>
                        Done {chevron}
                    </button>
                    
                </div>
                <div className="col-4">
                    <button value="projectName" onClick={(e) => sortHandler(e)} style={SortType === "projectName" ? {opacity: '0.6'} : {opacity: '1'}}>
                        Projects {chevron}
                    </button>
                </div>
                <div className="col-3">
                    <button value="dueDate" onClick={(e) => sortHandler(e)} style={SortType === "dueDate" ? {opacity: '0.6'} : {opacity: '1'}}>
                        Due {chevron}
                    </button>
                </div>
                <div className="col-1">
                    <button value="Priority" onClick={(e) => sortHandler(e)} style={SortType === "Priority" ? {opacity: '0.6'} : {opacity: '1'}}>
                        Priority {chevron}
                    </button>
                </div>
                <div className="col-2">
                    <button value="Notes" onClick={(e) => sortHandler(e)} style={SortType === "Notes" ? {opacity: '0.6'} : {opacity: '1'}}>
                        Notes {chevron}
                    </button>
                </div>
                <div className="col-1"></div>

            </li>
        </ul>
    );
};

