import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import jwt from 'jsonwebtoken';

import Head from '../Head';
import AdminNavigation from '../AdminNavigation';
import UserNavigation from '../UserNavigation';
import DescriptionDisplay from './DescriptionDisplay';
import DropDown from './DropDown';
import ProjectAllocation from './ProjectAllocation';
import DisplayAllocatedUsers from './DisplayAllocatedUsers';
import Tasks from './Tasks/Tasks';

import { allProjects } from '../../../actions/project';
import './project.css';

const AllProject = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [token] = useState(JSON.parse(localStorage.getItem('token')));
    const user = jwt.decode(token);
    const { projects } = useSelector(state=>state.project);
    const { rUser } = useSelector(state=>state.rUser);

    let ides = ''; let iId=0
    projects.filter((file,i)=>i===0?ides=file.projectDescription:null);
    projects.filter((file,i)=>i===0?iId=file._id:null);

    const [ description, setDescription] = useState(ides);
    const [ currentId, setCurrentId] = useState(iId);
    
    const project = projects.filter((file)=>file._id===currentId?file:null);
    const userList= project[0]?.allocatedTo;

    useEffect(()=>{
        setCurrentId(iId);
        setDescription(ides)
    },[ides,iId]);
    
    useEffect(()=>{
        dispatch(allProjects());
    },[dispatch]);
    
    const handleProjectSelect = (e) => {
        let arrr =  '';
        projects.filter((file,i)=> e.target.value===file._id?arrr=file.projectDescription:null);
        setDescription(arrr);
        setCurrentId(e.target.value);
    }

    if(!user) history.push('./user/signin');

    return (
        <div className="gridContainer ">
            <div > <Head /> </div>
            <div className="grifContainer1">
                {user.userType === 'admin'?
                    <div className="leftN"><AdminNavigation /></div>:
                    <div className="leftN"><UserNavigation /></div>
                }
                <div className="third">
                    <div style={{width:'100%'}}>
                        <h3 className="prjHead">All Projects</h3>
                        <DropDown projects={projects} handleProjectSelect={handleProjectSelect}/>
                        <DescriptionDisplay description={description}/>
                        <ProjectAllocation projects={projects} currentId={currentId} />
                        <DisplayAllocatedUsers userList={userList} rUsers={rUser} />
                        <Tasks currentId={currentId}  user={user}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProject;