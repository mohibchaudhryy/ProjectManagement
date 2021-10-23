import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import jwt from 'jsonwebtoken';

import Head from '../Head';
import AdminNavigation from '../AdminNavigation';
import UserNavigation from '../UserNavigation';
import { createProject } from '../../../actions/project';
import Editor from './Editor';

const CreateProject = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [token] = useState(JSON.parse(localStorage.getItem('token')));
    const [ formData, setFormData] = useState({ pTitle:'', pDescription: '' });
    const [pDescription, setpDescription] = useState('');
    const user = jwt.decode(token);
    
    if(!user) history.push('./user/signin');

    const inputHandler = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleCreateProject = (e) => {
        e.preventDefault();
        dispatch(createProject({...formData, pDescription: pDescription}));
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
                    <div className="createProjectDiv">
                        <h1 className="createProjectHeading">Create Project</h1><hr/>
                        <form onSubmit={handleCreateProject}>
                            <input type="text" placeholder="Enter the Project Title" className="form-control pTInput" name="pTitle" value={formData.name} onChange={inputHandler}/>
                            <h4 className='projectDescription'>Enter the Project Description</h4>
                            <Editor pDescription={pDescription} setpDescription={setpDescription} />

                            <input type="submit" className="btn btn-success createProjectBtn" name="createProjectButton" value="Create Project" /> 
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateProject;