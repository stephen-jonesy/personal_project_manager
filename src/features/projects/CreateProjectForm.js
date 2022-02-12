
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProject } from './projectsSlice';
import { v4 as uuid } from 'uuid';
import moment from 'moment';

export function Form() {
    moment().format();

    const dispatch = useDispatch();

    const [projectName, setName] = useState('');
    const [Priority, setPriority] = useState(0);
    
	const addProjectButton = (event) => {
        const createdAt = moment().format('DD/MM/YY HH:mm:ss');
        const unique_id = uuid();
        const small_id = unique_id.slice(0,8);
        event.preventDefault();        
        const projectObj = {projectName: projectName, small_id: small_id, Priority:parseInt(Priority), createdAt: createdAt };
        dispatch(addProject(projectObj));
        setName("");

    };
    
    return (  
        <form type="submit">
            <input placeholder="New Project" value={projectName}   onChange={(e) => {setName(e.target.value)}}/>
            <select onChange={(e) => {setPriority(e.target.value)}}>
                <option value="0">Select Priority</option>
                <option value="0">Not Set</option>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
            </select>
            <button type="submit" value="Add project" onClick={addProjectButton}></button>
        </form>

    );
};
