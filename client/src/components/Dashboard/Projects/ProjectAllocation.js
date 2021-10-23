import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import ModalWindow from './ModalWindow';
import { AllRegularUsers } from '../../../actions/user';
import { projectAllocation } from '../../../actions/project';
 
const ProjectAllocation = ({projects, currentId}) => {
    const project = projects.filter((file)=>file._id===currentId?file:null);
    const {rUser} = useSelector(state=>state.rUser);
    let iID = '';
    rUser.filter((file,i)=>i===0?iID=file._id:null);
    
    const [allocatedUserID, setAllocatedUserID] = useState(iID);
    const [ modalShow, setModalShow ] = useState(false);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(AllRegularUsers());
    },[dispatch])

    const userIdset = (e) => {
      setAllocatedUserID(e.target.value);
    }
    const modalSuccess = (e) => {      
      dispatch(projectAllocation(project,allocatedUserID));
      setModalShow(false);  
    }

    return (

        <div className="allocationDiv">
            
          <div className="allocationBtnDiv">
            <button className='btn btn-success allocateBtn' onClick={() => setModalShow(true)}>Allocate Project </button>
            <ModalWindow show={modalShow} userIdset={userIdset} modalSuccess={modalSuccess} onHide={() => setModalShow(false)} project={project} users={rUser}/>
          </div>

        </div>
    )
}

export default ProjectAllocation;