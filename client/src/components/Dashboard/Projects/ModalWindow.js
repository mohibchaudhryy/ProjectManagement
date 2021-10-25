import React from 'react';
import Modal from "react-bootstrap/Modal";


import UserDropDown from './UserDropDown';

const ModalWindow = ({show, onHide, project, users, modalSuccess, userIdset}) => {
    const closeModal = (e) => {
        e.preventDefault();
        onHide();
    }
    return (

        <Modal show={show} onHide={onHide} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
            <div modalDiv>
                <Modal.Header >
                    <h6>Allocate To</h6>
                    <button className="btn btn-danger modalCloseCross" onClick={closeModal}><i className="fas fa-times"></i></button>
                </Modal.Header>
                <Modal.Body>
                    
                    <UserDropDown project={project} users={users} userIdset={userIdset} />

                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-success modalClose" onClick={modalSuccess}>Allocate</button>
                    <button className="btn btn-danger modalAllocate" onClick={closeModal}>Close</button>
                </Modal.Footer>
            </div>
        </Modal>


    );
  }
  
export default ModalWindow;