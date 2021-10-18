import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { LOGOUT } from '../../constants/actionTypes';

const Head = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch({type:LOGOUT});
        history.push('/user/signin')
    }

    return (
        <div className='head'>
            <div className='imageLogo' onClick={()=>history.push('/dashboard')}/>
            <input type='button' onClick={handleLogout} className="btn btn-danger logoutBtn" value="Logout" />
        </div>
    )
}

export default Head;
