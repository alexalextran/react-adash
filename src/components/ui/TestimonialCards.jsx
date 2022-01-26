import React from 'react';

const Testimonialcards = (testi) => {
    return (
        <div className='testimonial__cards'>
        <div className='image__wrapper'><img src={testi.img} className='testimonial__profilepic'/></div>
        <p className="whyus__card--para">{testi.para}</p>
        <div className='testimonial__details'>
             <h3 className='testimonial__name'>{testi.name}</h3>
        <p  >{testi.title}</p>
        </div>
       
        </div>
    );
}

export default Testimonialcards;
