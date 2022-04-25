import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { getDefaultNormalizer } from '@testing-library/react';
import { config } from '@fortawesome/fontawesome-svg-core';

export function Register() {

    const [user, setUser] = useState('');

    const clickHandler = (e) => {

        if (e.target.value === 'login') {
            Login();
        }

        if (e.target.value === 'register') {
            register();
        }

    }

    const register = () => {
        //Get

        const user = {
            name: 'sdsdf',
            email: 'sfdsdf@hotmail.co.uk',
            password: '123456',
            password_confirmation: '123456'
        };

        JSON.stringify(user)
      
        axios.post(`http://localhost:8000/api/register`, user)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
        console.log("AXIOS ERROR: ", err);
        if (err.response) {
            console.log(err.response.data.message);
          }
        })

    };

    const Login = () => {
        
        //Login

        const user = {
            email: 'stephen-jones@hotmail.co.uk',
            password: '123456',
        };

        JSON.stringify(user)
      
        axios.post(`http://localhost:8000/api/login`, user)
        .then((res) => {
            sessionStorage.setItem('auth_token', res.data.token);        
            console.log(res)
        })
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
            if (err.response) {
                console.log(err.response.data.message);
            }
        })
    }



    // const getData = (e) =>  {


    //     //Get

    //     // axios.get(`http://127.0.0.1:8000/api`)
    //     //   .then(res => {
    //     //     const persons = res.data;
    //     //     console.log(persons);
    //     // })

    //     //Login

    //     // const user = {
    //     //     email: 'stephen-jones@hotmail.co.uk',
    //     //     password: '123456',
    //     // };

    //     // JSON.stringify(user)
      
    //     // axios.post(`http://localhost:8000/api/login`, user)
    //     // .then((res) => {
    //     //     localStorage.setItem('auth_token', res.data.token);        })
    //     // .catch((err) => {
    //     // console.log("AXIOS ERROR: ", err);
    //     // })

    //     //Logout

    //     // const token = "32|knT7qsh7nCzYw8OCaP6aZvNrzVyAsbKm1Jb9ASBz" //Add this line

    //     // console.log(token)

    //     // const config = {
    //     //     headers: { Authorization: `Bearer ${token}` }
    //     // };
        
    //     // const bodyParameters = {
    //     //    key: "value"
    //     // };
        
    //     // axios.post( 
    //     //   'http://localhost:8000/api/logout',
    //     //   bodyParameters,
    //     //   config
    //     // ).then(console.log).catch(console.log);
    // }


    return (  
        <div >
            <Button value="register" onClick={(e) => clickHandler(e)} className="m-2">Register</Button>
            <Button value="login" onClick={(e) => clickHandler(e)} className="m-2">Login</Button>

        </div>
    );
}

