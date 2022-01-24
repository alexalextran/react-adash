import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Contactus = () => {
    const[ismodalopen, setismodalopen] = useState(true)
    function togglemodal(){
        if (ismodalopen) {
            setismodalopen(false);
            return document.body.classList.remove("modal--open");
          }
          setismodalopen(true);
            document.body.classList += " modal--open";


    }

    useEffect(() => {
        togglemodal()
        
    }, []);
    return (
        <section id='contact'>
            <div className='contact__header--image'>
            <h3 className='contact__header--title'>Get In Touch</h3>
            <a href="https://icons8.com/photos" alt="stockphoto" className='stockphotolink'>Photo by Icons8</a>
            </div>

            <div className='contact__form'>
                <FontAwesomeIcon icon="times" className='form__exit' onClick={() => togglemodal()}/>
            <h2 className='form__title'>Send us a message!</h2>
            <form className='form'>

            <label>Name
            <br/>
            <input type="text"></input>
            </label>
            <br/>
            <label>Email
            <br/>
            <input type="text" ></input>
            <br/>
            </label>
            <label>Subject
            <br/>
            <textarea></textarea>
            </label>
            <button className='form__button'>Send</button>

  
            </form>
            </div>
            
        <div className='card__wrapper'>
       <a target="_blank" href='https://paypal.me/AadarshAnuj
            '>
             <div className='support__us clickable'>
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
            </a>
           
        

            <div className='send__us clickable' onClick={() => togglemodal()}>
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
