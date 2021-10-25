import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import jwt from 'jsonwebtoken';

import { userSignIn } from '../../actions/user';

import './Login.css';

const Login = () => {
    const dispatch = useDispatch();
    const user = jwt.decode(JSON.parse(localStorage.getItem('token')));
    const [ formData, setFormData] = useState({ userName: '', password: '', userType: 'admin' });
    const [ userSelect ] = useState([
        {
            label: "Admin",
            value: "admin",
        },
        {
            label: "Regular User",
        value: "rUser",
        },
    ]);

    const history = useHistory();
    
    if(user){
        if(user.userType==='admin')history.push('/admin/projects/allprojects');
        else history.push('/ruser/myprojects');
    } 
    

    const inputHandler = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    const handleUserSelect = (e) => {
        setFormData({...formData, userType:e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userSignIn(formData,history));
    }
    return (
        <div>
            <div className="signinFormContainer" >
                <form onSubmit={handleSubmit}>
                    <h2 style={{color:'blue'}}>Login</h2>
                    <hr/>
                    <select className="form-control userDropDown" id="userSelect" onChange={handleUserSelect}>
                        {userSelect.map((option,i) => (
                            <option key={i} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                    <hr/>
                    <input type="text" placeholder="User Name" className="form-control inputS" name="userName" value={formData.userName} onChange={inputHandler}/>
                    <input type="password" placeholder="Password" className="form-control inputS" name="password" value={formData.password} onChange={inputHandler}/>
                    <input type="submit" className="btn btn-primary loginButton" name="loginButton" value="Login" /> 
                </form>
            </div>
        </div>
    )
}

export default Login;
