import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import jwt from 'jsonwebtoken';

import Head from '../Head';
import AdminNavigation from '../AdminNavigation';
import UserNavigation from '../UserNavigation';
import { createRegularUser } from '../../../actions/user';

import './user.css';

const CreateUser = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [token] = useState(JSON.parse(localStorage.getItem('token')));
    const user = jwt.decode(token);
    const [ formData, setFormData] = useState({ name:'', userName: '', password: '', userType: 'rUser' });
    
    if(!user) history.push('./user/signin');

    const inputHandler = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleCreateUser = (e) => {
        e.preventDefault();
        dispatch(createRegularUser(formData));
    }
    return (
        <div className="gridContainer">
            <div > <Head /> </div>
            <div className="grifContainer1">
                {user.userType === 'admin'?
                    <div className="leftN"><AdminNavigation /></div>:
                    <div className="leftN"><UserNavigation /></div>
                }
                <div className="third">
                    <div className="createUserDiv">
                        <h2 className="createUserHeading">Create Regular User</h2>
                        <form onSubmit={handleCreateUser}>
                            <input type="text" placeholder="Name" className="form-control inputCreateUser" name="name" value={formData.name} onChange={inputHandler}/>
                            <input type="text" placeholder="User Name" className="form-control inputCreateUser" name="userName" value={formData.userName} onChange={inputHandler}/>
                            <input type="password" placeholder="Password" className="form-control inputCreateUser" name="password" value={formData.password} onChange={inputHandler}/>

                            <input type="submit" className="btn btn-primary createUserBtn" name="loginButton" value="Create User" /> 
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateUser;
