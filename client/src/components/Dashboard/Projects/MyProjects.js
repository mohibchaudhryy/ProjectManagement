import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import { useDispatch, useSelector } from 'react-redux';

import Head from '../Head';
import AdminNavigation from '../AdminNavigation';
import UserNavigation from '../UserNavigation';
import DropDown from './DropDown';
import DescriptionDisplay from './DescriptionDisplay';
import CreateTask from './Tasks/CreateTask';
import Tasks from './Tasks/Tasks';

import { allAllocatedProjects } from '../../../actions/project';
import { allTasks } from '../../../actions/tasks';

const MyProjects = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [token] = useState(JSON.parse(localStorage.getItem('token')));
    const user = jwt.decode(token);
    const { projects } = useSelector(state=>state.project);

    let ides = ''; let iId=0
    projects.filter((file,i)=>i===0?ides=file.projectDescription:null);
    projects.filter((file,i)=>i===0?iId=file._id:null);

    const [ description, setDescription] = useState(ides);
    const [ currentId, setCurrentId] = useState(iId);
    
    useEffect(()=>{
        setCurrentId(iId);
        setDescription(ides)
    },[ides, iId]);

    if(!user) history.push('./user/signin');

    useEffect(()=>{
        dispatch(allTasks);
        dispatch(allAllocatedProjects(user.id));
        setDescription(ides)
    },[dispatch,ides,user.id]);

    const handleProjectSelect = (e) => {
        let arrr =  '';
        projects.filter((file,i)=> e.target.value===file._id?arrr=file.projectDescription:null);
        setDescription(arrr);
        setCurrentId(e.target.value);

    }
    return (
        <div className="gridContainer">
            <div > <Head /> </div>
            <div className="grifContainer1">
                <div>
                    {user.userType === 'admin'?
                        <div className="leftN"><AdminNavigation /></div>:
                        <div className="leftN"><UserNavigation /></div>
                    }
                </div>
                <div className="third">
                    
                       <h2 className="prjHead">All Projects</h2>
                        <DropDown projects={projects} handleProjectSelect={handleProjectSelect}/>
                        <DescriptionDisplay description={description}/>
                        <CreateTask currentId={currentId}/>
                        <Tasks currentId={currentId} user={user}/>
                </div>
            </div>
        </div>
    )
}

export default MyProjects;
