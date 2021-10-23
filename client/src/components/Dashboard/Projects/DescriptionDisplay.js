import React from 'react';
import parse from 'html-react-parser';

const DescriptionDisplay = ({description}) => {
    return (
        <div className="allPDes">
            <h5>Description</h5>
            <div className='allProdDesc'>{parse(description)}</div>
            
        </div>
    )
}

export default DescriptionDisplay;