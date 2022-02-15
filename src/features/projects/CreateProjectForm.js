
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProject } from './projectsSlice';
import { v4 as uuid } from 'uuid';
import moment from 'moment';

export function Form() {
    moment().format();

    const dispatch = useDispatch();

    const [projectName, setName] = useState('');
    const [Priority, setPriority] = useState('None');
    
	const addProjectButton = (event) => {
        const createdAt = moment().format('DD/MM/YY HH:mm:ss');
        const unique_id = uuid();
        const small_id = unique_id.slice(0,8);
        event.preventDefault();        
        const projectObj = {projectName: projectName, small_id: small_id, Priority: Priority, createdAt: createdAt };
        dispatch(addProject(projectObj));
        setName("");

    };
    
    return (  
        <form type="submit">
            <input placeholder="New Project" value={projectName}   onChange={(e) => {setName(e.target.value)}}/>
            <select onChange={(e) => {setPriority(e.target.value)}}>
                <option value="None">Select Priority</option>
                <option value="None">Not Set</option>
                <option value="None">Low</option>
                <option value="None">Medium</option>
                <option value="None">High</option>
            </select>
            <button type="submit" value="Add project" onClick={addProjectButton}></button>
        </form>

    );
};
