import React, { useState, useRef } from 'react';
import DatePicker from "react-datepicker";
import { useDispatch } from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";
import { updateDueDate } from '../projectsSlice';
import moment from 'moment';

export function Calendar({ dueDate, id }) {
    const [startDate, setStartDate] = useState(new Date());
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today  = new Date();
    const dispatch = useDispatch();

    const updateDue = (date) => {
        setStartDate(date);
        const formatedDueDate = moment(date).format('YYYY/MM/DD');
        console.log(formatedDueDate);
        dispatch(updateDueDate([id, formatedDueDate]));

    }

    return (  
        <DatePicker dateFormat="yyyy/MM/dd" value={moment(dueDate).format('DD/MM/YYYY')} onChange={(date) => updateDue(date)} />

    );
};