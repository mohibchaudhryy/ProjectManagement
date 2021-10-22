import React from 'react';

const DisplayAllocatedUsers = ({userList, rUsers}) => {
    const users = [];

    for (let i=0;i<userList?.length;i++){
        for(let j=0; j<rUsers.length;j++){
            if(rUsers[j]._id===userList[i]){
                users.push(rUsers[j]);
            }
        }
    }
    
    return (
        <div className='allAllocatedUsers'>
            <h5>Allocated To </h5>
            {rUsers.map((file,i) => userList?.includes(file._id)? 
                    <h6 key={i} > {file.userName}</h6>:null
                )}
        </div>
    )
}

export default DisplayAllocatedUsers;