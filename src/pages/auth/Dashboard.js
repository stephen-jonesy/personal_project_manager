import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export function Dashboard () {

    const clickHandler = (e) => {

        // if (e.target.value === 'user') {
        //     getUser();
        // }

        if (e.target.value === 'logout') {
            logout();

        }

    }



    const logout = () => {
        
        //Logout

        const token = sessionStorage.getItem('auth_token');
        console.log(token)


        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        sessionStorage.removeItem("auth_token");

        
        const bodyParameters = {
           key: "value"
        };
        
        axios.post( 
          'http://localhost:8000/api/logout',
          bodyParameters,
          config
        ).then(console.log).catch(console.log);

    }


    return ( 
        <>
            <Button value="logout" onClick={(e) => clickHandler(e)} className="m-2">Logout</Button>
            <Button value="user" onClick={(e) => clickHandler(e)} className="m-2">user</Button>
        </>
    );
}

