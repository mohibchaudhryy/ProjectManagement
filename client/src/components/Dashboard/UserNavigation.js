import React from 'react';
import { Link } from 'react-router-dom';            
const AdminNavigation = () => {

    return(
        <div className='adminNavigaion navigation'><br/>
            <nav className="sidebar">
                <ul>
                    <li><Link to="/ruser/myprojects">My Projects</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default AdminNavigation;
