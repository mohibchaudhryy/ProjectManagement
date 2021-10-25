import React from 'react';
import Modal from "react-bootstrap/Modal";

const UserModal = ({show, closeModal, fileData, newPassSubmit, newPass, setNewPass}) => {
    return (
        <div>
            <Modal show={show} onHide={closeModal} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
                <div modalDiv>
                    <Modal.Header >
                        <h6>Allocate To</h6>
                        <button className="btn btn-danger modalCloseCross" onClick={closeModal}><i className="fas fa-times"></i></button>
                    </Modal.Header>
                    <Modal.Body>
                        
                    <div className='modalContentContainer'>
                        <h2>User Name: {fileData?.userName}</h2>
                        <input type="password" placeholder="New password"value={newPass} onChange={(e)=>setNewPass(e.target.value)} className='form-control modalInput'/>

                    </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-success modalAllocate"  onClick={newPassSubmit}>Update</button>
                        <button className="btn btn-danger modalClose" onClick={closeModal}>Close</button>
                    </Modal.Footer>
                </div>
            </Modal>    
        </div>
    )
}

export default UserModal;

