import React from 'react';

const DropDown = ({projects, handleProjectSelect}) => {
    return (
        <div className='dropdown'>
            <select className="form-control userDropDown" id="userSelect" onChange={handleProjectSelect}>
                {projects.map((file,i) => (
                    <option key={i} value={file._id}>{file.projectTitle}</option>
                ))}
            </select>
        </div>
    )
}

export default DropDown;