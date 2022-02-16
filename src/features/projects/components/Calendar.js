import React, { useState, useRef } from 'react';
import DatePicker from "react-datepicker";
import { useDispatch } from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";
import { updateDueDate } from '../projectsSlice';



export function Calendar({ dueDate, id }) {
    const [startDate, setStartDate] = useState(new Date());
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today  = new Date();
    const dispatch = useDispatch();

    const updateDue = (date) => {
        setStartDate(date);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formatedDueDate = date.toLocaleDateString("en-UK");
        console.log(formatedDueDate);
        dispatch(updateDueDate([id, formatedDueDate]));

    }

    return (  
        <DatePicker dateFormat="dd/MM/yyyy" value={dueDate} onChange={(date) => updateDue(date)} />

    );
};