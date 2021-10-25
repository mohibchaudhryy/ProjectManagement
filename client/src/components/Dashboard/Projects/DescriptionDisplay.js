import React from 'react';
import parse from 'html-react-parser';

const DescriptionDisplay = ({description}) => {
    return (
        <div className="allPDes">
            <h6>Description</h6>
            <hr/>
            <div className='allProdDesc'>{parse(description)}</div>
            
        </div>
    )
}

export default DescriptionDisplay;