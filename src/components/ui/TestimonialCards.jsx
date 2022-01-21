import React from 'react';

const Testimonialcards = (testi) => {
    return (
        <div className='testimonial__cards'>
        <div className='image__wrapper'><img src={testi.img} className='testimonial__profilepic'/></div>
        <p>{testi.para}</p>
        <h3 className='testimonial__name'>{testi.name}</h3>
        <p>{testi.title}</p>
        </div>
    );
}

export default Testimonialcards;
