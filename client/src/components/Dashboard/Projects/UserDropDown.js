import React from 'react';

const UserDropDown = ({users, userIdset}) => {
    return (
        <div className='dropdown'>
            <select className="form-control userDropDown" id="userSelect" onChange={userIdset}>
                {users.map((file,i) => (
                    <option key={i} value={file._id}>{file.userName}</option>
                ))}
            </select>
        </div>
    )
}

export default UserDropDown;