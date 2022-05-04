import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { logOut } from '../../features/user/userSlice';

export function Dashboard () {
    let token = sessionStorage.getItem('auth_token');

    const dispatch = useDispatch();
    
    const clickHandler = (e) => {

        // if (e.target.value === 'user') {
        //     getUser();
        // }

        if (e.target.value === 'logout') {
            logout();

        }

    }

    const logout = () => {
        
    if (token != null) {
        console.log('click handler logout');
        dispatch(logOut()).unwrap()
        .then((originalPromiseResult) => {
            console.log(originalPromiseResult);
            // navigate('/login');
    
            // handle result here
        })
    
        .catch((rejectedValueOrSerializedError) => {
            console.log(rejectedValueOrSerializedError);
            
        })
        
        }

    }


    return ( 
        <>
            <Button value="logout" onClick={(e) => clickHandler(e)} className="m-2">Logout</Button>
            <Button value="user" onClick={(e) => clickHandler(e)} className="m-2">user</Button>
        </>
    );
}

