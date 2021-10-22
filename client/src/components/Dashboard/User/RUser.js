import React from 'react';

const RUser = ({rUser, i,handleModal}) => {
    return (
        <tr onClick={()=>handleModal(rUser)} className='allUtr'>
            <th scope="row">{i}</th>
            <td>{rUser.name}</td>
            <td>{rUser.userName}</td>
            <td>{rUser.creationDate}</td>
        </tr>
    )
}

export default RUser;