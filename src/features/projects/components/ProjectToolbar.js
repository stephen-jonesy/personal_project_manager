import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateDueDate } from '../projectsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { sortProjects } from '../projectsSlice';

export function ProjectToolbar() {
    const chevron = <FontAwesomeIcon icon={faChevronUp} size="sm" />;
    const dispatch = useDispatch();

    const sortHandler = () => {
        dispatch(sortProjects());
    }

    return (  
        <ul className="project-list ">
            <li className="d-flex mt-3 mb-4 shadow-sm rounded">
                <div className="col-1">
                    <button>
                        Done {chevron}
                    </button>
                    
                </div>
                <div className="col-4">
                    <button onClick={() => sortHandler()}>
                        Projects {chevron}
                    </button>
                </div>
                <div className="col-3">
                    <button>
                        Due {chevron}
                    </button>
                </div>
                <div className="col-1">
                    <button>
                        Priority {chevron}
                    </button>
                </div>
                <div className="col-2">
                    <button>
                        Notes {chevron}
                    </button>
                </div>
                <div className="col-1"></div>

            </li>
        </ul>
    );
};

