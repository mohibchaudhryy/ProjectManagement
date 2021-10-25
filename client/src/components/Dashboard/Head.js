import React from 'react';
import jwt from 'jsonwebtoken';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { LOGOUT } from '../../constants/actionTypes';

import './Dashboard.css';
import './Navigation.css';

const Head = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = jwt.decode(JSON.parse(localStorage.getItem('token')));

    const handleLogout = () => {
        dispatch({type:LOGOUT});
        history.push('/user/signin')
    }

    return (
        <div className='head'>
            <div className='imageLogo' onClick={()=>history.push('/dashboard')}/>
            <h6 className="userName">Hi .. !    {user.userName}</h6>
            <input type='button' onClick={handleLogout} className="btn btn-danger logoutBtn" value="Logout" />
            {/* <button className='btn btn-primary navBtn' > <i className="fas fa-list-ul"/></button> */}
        </div>
    )
}

export default Head;
