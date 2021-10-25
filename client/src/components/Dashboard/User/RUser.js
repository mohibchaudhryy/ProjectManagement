import React from 'react';
import moment from 'moment';


const RUser = ({rUser, i,handleModal}) => {
    return (
        <tr onClick={()=>handleModal(rUser)} className='allUtr'>
            <th scope="row">{i}</th>
            <td>{rUser.name}</td>
            <td>{rUser.userName}</td>
            <td>Date: {moment(rUser.creationDate).format('DD:MM:YY')}<br/>Time: {moment(rUser.creationDate).format('hh:mm')}</td>
        </tr>
    )
}

export default RUser;