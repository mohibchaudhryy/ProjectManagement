import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import jwt from 'jsonwebtoken';

import Head from './Head';
import AdminNavigation from './AdminNavigation';
import UserNavigation from './UserNavigation';

import './Dashboard.css';
import './Navigation.css';

const Dashboard = () => {
    const history = useHistory();
    const [token] = useState(JSON.parse(localStorage.getItem('token')));
    const user = jwt.decode(token);
    
    if(!user) history.push('./user/signin');


    return (
        <div className="gridContainer">
            <div > <Head /> </div>
            <div className="grifContainer1">
                {user.userType === 'admin'?
                    <div className="leftN"><AdminNavigation /></div>:
                    <div className="leftN"><UserNavigation /></div>
                }
                <div>Dashboard</div>
            </div>
        </div>
    )
}

export default Dashboard;
