import React, { useState, useRef } from 'react';
import DatePicker from "react-datepicker";
import { useDispatch } from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";
import { updateDueDate } from '../projectsSlice';
import moment from 'moment';

export function Calendar({ databaseDate, updateDate }) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today  = new Date();

    return (  
        <DatePicker dateFormat="yyyy/MM/dd" value={moment(databaseDate).format('DD/MM/YYYY')} onChange={(date) => updateDate(date)} />

    );
};