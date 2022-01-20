import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Aboutuscards = (card) => {
    return (
        <div className='aboutus__card--wrapper flex-column'>
        <div className='cardicon'><FontAwesomeIcon icon={card.icon} /></div>
            
            <h1>{card.title}</h1>
            <p className='card__summary'>{card.summary}</p>
        </div>
    );
}

export default Aboutuscards;
