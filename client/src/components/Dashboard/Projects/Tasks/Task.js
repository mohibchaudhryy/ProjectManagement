import React, { useState } from 'react';
import UpdateModalWindow from './UpdateModalWindow';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { updateCompletionTask } from '../../../../actions/tasks';

const Task = ({file}) => {
    const dispatch = useDispatch();
    const [ modalShow, setModalShow ] = useState(false);
    const { rUser } = useSelector(state=>state.rUser);
    const handleCompleteBtn = () => {
        dispatch(updateCompletionTask(file._id));
    }
    return (
            <tr>
                <td>{file.taskName}</td>
                <td>{rUser.map((item,i)=>item._id===file.project.userID?item.userName:null)}</td>
                <td>Date:{moment(file.creationDate).format('DD:MM:YY')} <br/> Time: {moment(file.creationDate).format('hh:mm A')}</td>
                <td><button className="btn btn-primary" type="button" onClick={()=>setModalShow(!modalShow)}>update</button></td>
                <td><button className="btn btn-success completeBtn" type="button" disabled={file.completionTime?true:false} onClick={handleCompleteBtn}>{file.completionTime?'Completed':'Complete'}</button></td>
                <UpdateModalWindow file={file} show={modalShow} onHide={() => setModalShow(false)}/>
            </tr>
    )
}

export default Task;
