import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { USERN, PROJECTSN } from '../../constants/actionTypes';

const AdminNavigation = () => {
    const {navigation}= useSelector(state=>state);
    const [userN, setUserN] = useState(navigation.user);
    const [projectsN, setProjectsN] = useState(navigation.projects);
    const dispatch = useDispatch();

    const handlePropagation = (e) => {
        e.stopPropagation();
    }
    const userNHandler = (e) => {
        e.stopPropagation();
        dispatch({type: USERN });
        setUserN(!userN);
    }
    const projectsNHandler = (e) => {
        e.stopPropagation();
        dispatch({type: PROJECTSN })
        setProjectsN(!projectsN);
    }
    return (
        <div className='adminNavigaion navigation'><br/>
            <nav className="sidebar">
                <ul>

                    <li onClick={userNHandler}><p ><i class="fas fa-users-cog"></i> User </p>
                        {userN?
                            <ul className="accShow">
                                <li onClick={handlePropagation}><Link to=""><i class="far fa-user"></i> Create User</Link></li>
                                <li onClick={handlePropagation}><Link to=""><i class="fas fa-users"></i> All Users</Link></li>
                            </ul>:<></>
                        }
                    </li>
                    <li onClick={projectsNHandler}><p > <i className="fas fa-cubes"></i> Projects</p>
                        {projectsN?
                            <ul className="prodShow">
                                <li onClick={handlePropagation}><Link to=""><i className="fas fa-plus"></i> Create Project</Link></li>
                                <li onClick={handlePropagation  }><Link to="" className="allPBtn" ><i className="fas fa-list-ul"></i> All Projects </Link></li>
                                
                            </ul>
                            :<></>
                        }
                    </li>
                </ul>
            
            </nav>
        </div>
    )
}

export default AdminNavigation;
