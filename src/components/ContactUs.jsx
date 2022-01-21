import React from 'react';

const Contactus = () => {
    return (
        <section id='contact'>
            <div className='contact__header--image'>
            <h3>Get In Touch</h3>
            <a href="https://icons8.com/photos">Photo by Icons8</a>
            </div>
        <div className='card__wrapper'>
             <div className='support__us'>
                <img/>
                <h5 className='card__title'>
                    Support Us
                </h5>
                <p className='card__para'> 
                    Wanna send us some donations?, all our content is free, so donations go a long way
                </p>
                <p>
                    Any amount is appreciated!
                </p>
            </div>

            <div className='send__us'>
            <img/>
                <h5 className='card__title'>
                    Send Us A Message
                </h5>
                <p className='card__para'>
                    Feel free to contact us if you have any questions or inquiries
                </p>
                <p style={{color: "rgb(95,14,14)"}}>
                    Any amount is appreciated!
                </p>
            </div>
        </div>
           
        </section>
    );
}

export default Contactus;
