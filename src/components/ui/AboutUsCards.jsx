import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Aboutuscards = (card) => {
    return (
        <div className='aboutus__card--wrapper flex-column'>
    
        <div className='cardicon'><FontAwesomeIcon icon={card.icon} /></div>
            
            <h1 className='card__title--header'>{card.title}</h1>
            <p className='card__summary'>{card.summary}</p> 
            <a href='https://www.youtube.com/channel/UC2TuAzbHxLIZwJqlofj_oXw' target="_blank" className='card__learnmore'>Learn More</a>
        </div>
    );
}

export default Aboutuscards;
