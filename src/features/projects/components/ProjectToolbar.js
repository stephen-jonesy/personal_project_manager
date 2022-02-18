import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateDueDate } from '../projectsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { sortProjects } from '../projectsSlice';

export function ProjectToolbar() {
    const chevron = <FontAwesomeIcon icon={faChevronUp} size="sm" />;
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [SortType, setSortType] = useState('');

    const sortHandler = (e) => {
        let newBtn = true;
        const sortType = e.target.value;
        const payload = {show: newBtn, sortType: sortType};

        // setShow(!show);
        dispatch(sortProjects(payload));

    }
    console.log(previousSortType);




    return (  
        <ul className="project-list ">
            <li className="d-flex mt-3 mb-4 shadow-sm rounded">
                <div className="col-1">
                    <button value="isComplete" onClick={(e) => sortHandler(e)}>
                        Done {chevron}
                    </button>
                    
                </div>
                <div className="col-4">
                    <button value="projectName" onClick={(e) => sortHandler(e)}>
                        Projects {chevron}
                    </button>
                </div>
                <div className="col-3">
                    <button value="Due" onClick={(e) => sortHandler(e)}>
                        Due {chevron}
                    </button>
                </div>
                <div className="col-1">
                    <button value="Priority" onClick={(e) => sortHandler(e)}>
                        Priority {chevron}
                    </button>
                </div>
                <div className="col-2">
                    <button value="Notes" onClick={(e) => sortHandler(e)}>
                        Notes {chevron}
                    </button>
                </div>
                <div className="col-1"></div>

            </li>
        </ul>
    );
};

