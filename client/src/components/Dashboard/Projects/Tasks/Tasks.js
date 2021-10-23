import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { allTasks } from '../../../../actions/tasks';
import Task from './Task';

import './tasks.css';
const Tasks = ({currentId, user}) => {
    const dispatch = useDispatch();
    const {tasks} = useSelector(state=>state.tasks);
    useEffect(() => {
        dispatch(allTasks());
    },[dispatch])

    return (
        <div className="tasks">
            <h5 >Tasks </h5>
            <table className='table '> 
                <thead>
                    <tr>
                        <th>Task Name</th>
                        <th>Created By</th>
                        <th>Creation Date and Time</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>                
                    {user.userType === 'rUser' &&
                        tasks.map((file,i)=> file.project.projectID=== currentId&&file.project.userID===user.id ? <Task key={i} file={file}/> : null
                        )}
                    {user.userType === 'admin' &&
                        tasks.map((file,i)=> file.project.projectID=== currentId? <Task key={i} file={file}/> : null
                        )}
                </tbody>
            </table>
        </div>
    )
}

export default Tasks;
