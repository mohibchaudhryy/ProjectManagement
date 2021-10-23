import React, { useState } from 'react';
import jwt from 'jsonwebtoken';
import { useDispatch } from 'react-redux';

import Editor from '../Editor';

import { createTask } from '../../../../actions/tasks';

const CreateTask = ({currentId}) => {
    const dispatch = useDispatch();
    const user = jwt.decode(JSON.parse(localStorage.getItem('token')));
    const [formData, setFormData] = useState({taskName: '', taskDescription: '', project: {} });
    const [description, setDescription] = useState('');

    

    const inputHandler = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createTask({...formData, project:{ projectID: currentId, userID: user.id }, taskDescription: description}));
    }
    return (
        <div className='createTask'>
            <h5 >Create Task</h5>
            <form onSubmit={handleSubmit}>
                <input type='text' className='form-control taskNameInput' placeholder='Task Name' name='taskName' value={formData.taskName} onChange={inputHandler} />
                <Editor pDescription={description} setpDescription={setDescription} />
                <button type="submit" className="btn btn-success createTaskBtn" >Create Task</button>
            </form>
        </div>
    )
}

export default CreateTask;
