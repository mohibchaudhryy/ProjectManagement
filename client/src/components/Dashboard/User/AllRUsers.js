import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';    

import Head from '../Head';
import AdminNavigation from '../AdminNavigation';
import UserNavigation from '../UserNavigation';
import { AllRegularUsers, updateUser } from '../../../actions/user';

import RUser from './RUser';

Modal.setAppElement("#root");
const AllRUsers = () => {
    const history = useHistory();
    const [token] = useState(JSON.parse(localStorage.getItem('token')));
    const [ show,setShow ] = useState(false);
    const [ fileData,setFileData ] = useState(null);
    const [ newPass,setNewPass] = useState('');
    const {rUser} = useSelector(state=>state.rUser);
    const user = jwt.decode(token);
    const dispatch = useDispatch();

    if(!user) history.push('./user/signin');

    useEffect(() => {
        dispatch(AllRegularUsers());
    },[dispatch])

    const handleModal = (file) =>{
        setShow(true);
        setFileData(file);
    }
    const newPassSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser({...fileData, password:newPass}));
        setFileData(null);
        setNewPass('');
        setShow(false);

    }
    
    const closeModal = (e) => {
        e.preventDefault();
        setFileData(null);
        setShow(false);
    }

    return (
        <div className="gridContainer">
            <div > <Head /> </div>
            <div className="grifContainer1">
                {user.userType === 'admin'?
                    <div className="leftN"><AdminNavigation /></div>:
                    <div className="leftN"><UserNavigation /></div>
                }
                <div className="third">

                    <div className="allRUsersTableDiv">
                        <table className="table allRUT">
                            <thead >
                                <tr>
                                    <th className='allRUserTitle' colSpan='4'> All Regular Users</th> 
                                </tr>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">User Name</th>
                                    <th scope="col">Creation Date and Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    rUser.map((file,i) => <RUser handleModal={handleModal} key={i} i={i+1} rUser={file}/>)
                                }
                            </tbody>
                        </table>   
                        <Modal style={{
                            overlay:{
                                backgroundColor: 'rgba(6,6,22,0.9)'
                            },
                            content:{
                                top:'35%',
                                left: '40%',
                                right: '20%',
                                bottom: '40%',
                                backgroundColor: 'white'
                            }
                        }} isOpen={show} onRequestClose={closeModal}>
                            <div className='modalContentContainer'>
                                <h2>User Name: {fileData?.userName}</h2>
                                <input type="password" placeholder="New password"value={newPass} onChange={(e)=>setNewPass(e.target.value)} className='form-control modalInput'/>
                                <button className="btn btn-success modalSuccessBtn"  onClick={newPassSubmit}>Update</button>
                                <button className="btn btn-danger modalCloseBtn"  onClick={closeModal}>close</button>

                            </div>
                        </Modal> 
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AllRUsers;
