import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import jwt from 'jsonwebtoken';
import parse from 'html-react-parser';

import Head from '../Head';
import AdminNavigation from '../AdminNavigation';
import UserNavigation from '../UserNavigation';
import { allProjects } from '../../../actions/project';

import './project.css';

const AllProject = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [token] = useState(JSON.parse(localStorage.getItem('token')));
    const user = jwt.decode(token);
    const { projects } = useSelector(state=>state.project);
    
    let temp = null;
    projects.filter((file,i) =>i===0).map((file,i)=>temp=file);

    const [currentId, setCurrentId] = useState(temp._id);
    const [ description, setDescription] = useState(temp.projectDescription);
    
    console.log(currentId,description)

    useEffect(()=>{
        dispatch(allProjects());
    },[dispatch]);

    const handleProjectSelect = (e) => {
        setCurrentId(e.target.value);
        projects.map((file,i)=>file._id===currentId?setDescription(file.projectDescription):null);
    }

    if(!user) history.push('./user/signin');


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
                        <h2 className="createUserHeading">All Projects</h2>
                        <select className="form-control userDropDown" id="userSelect" onChange={handleProjectSelect}>
                            {projects.map((file,i) => (
                                <option key={i} value={file._id}>{file.projectTitle}</option>
                            ))}
                        </select>
                        <h5>Description</h5>
                        <p className='allProdDesc'>{parse(description)}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProject;