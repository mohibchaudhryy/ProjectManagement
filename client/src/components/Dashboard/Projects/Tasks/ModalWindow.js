import React from 'react';
import Modal from "react-bootstrap/Modal";


const ModalWindow = ({show, onHide,modalSuccess}) => {
    const closeModal = (e) => {
        e.preventDefault();
        onHide();
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

            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-success" onClick={modalSuccess}>Allocate</button>
                <button className="btn btn-danger" onClick={closeModal}>Close</button>
            </Modal.Footer>
        </Modal>


    );
  }
  
export default ModalWindow;