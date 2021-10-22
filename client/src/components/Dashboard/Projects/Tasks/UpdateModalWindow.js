import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import { useDispatch } from 'react-redux';

import { updateTask } from '../../../../actions/tasks';
import Editor from '../Editor';

const UpdateModalWindow = ({show, onHide, file}) => {
    const [description, setDescription] = useState(file.taskDescription);
    const [taskName, setTaskName] = useState(file.taskName);

    const dispatch = useDispatch();

    const closeModal = (e) => {
        e.preventDefault();
        onHide();
    }
    const modalSuccess = (e) => {
        e.preventDefault();
        dispatch(updateTask({...file, taskName: taskName, taskDescription: description}))
    }
    return (

        <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
                </Modal.Title>
                <button className="btn btn-danger" onClick={closeModal}><i className="fas fa-times"></i></button>
            </Modal.Header>
            <Modal.Body>
                <form >
                    <input className="form-control modalUpdateInput" placeholder='Task Name' value={taskName} onChange={(e)=>setTaskName(e.target.value)} />
                    <Editor pDescription={description} setpDescription={setDescription}/>

                </form>

            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-success" onClick={modalSuccess}>Update</button>
                <button className="btn btn-danger" onClick={closeModal}>Close</button>
            </Modal.Footer>
        </Modal>
    );
  }
  
export default UpdateModalWindow;