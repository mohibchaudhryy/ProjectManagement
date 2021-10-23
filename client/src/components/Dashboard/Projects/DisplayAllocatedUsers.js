import React from 'react';
import moment from 'moment';

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
            <table className="table">
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>

                    {rUsers.map((file,i) => userList?.includes(file._id)? 
                            <tr key={i}>
                                <td  > {file.userName}</td>
                                <td  > Date: {moment(file.creationDate).format('DD:MM:YY')}<br/>Time: {moment(file.creationDate).format('hh:mm A')}</td>

                            </tr> :null
                        )}
                </tbody>
            </table>
        </div>
    )
}

export default DisplayAllocatedUsers;