import React, {useEffect, useRef, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
import aadarsh from "../assets/aadarsh.jpg";
init("user_2jIT9NA6dfZ3X4lKgbInB");





const Contactus = () => {
    const succsessful = document.getElementsByClassName("contact__form--succsessful")
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
      emailjs.sendForm('service_e66mvck', 'template_qjzb3uo', form.current, 'user_2jIT9NA6dfZ3X4lKgbInB')
        .then((result) => {
            console.log(result.text);

        }, (error) => { 
            alert("The email service is currently down, please reach us at aadarshanuj217@gmail.com")
            console.log(error.text);
           
        }); 
       
        succsessful[0].style.opacity = "1"
        succsessful[0].style.visibility = "visible"
      
    };
  




    const[ismodalopen, setismodalopen] = useState(true)
   
    
    function togglemodal(){
         const send__Us = document.querySelector(".send__us")
         const contact__form = document.querySelector(".contact__form")
         const support__us = document.querySelector(".support__us")
         succsessful[0].style.opacity = "0"
         succsessful[0].style.visibility = "hidden"
         
        if (ismodalopen) {
            setismodalopen(false);
            return send__Us.classList.remove("modal--open"), contact__form.classList.remove("modal--open"), support__us.classList.remove("modal--open")
          }
          setismodalopen(true);
          send__Us.classList += " modal--open";
          contact__form.classList += " modal--open"
          support__us.classList += " modal--open"


    }

    useEffect(() => {
        togglemodal()
        
    }, []);
    return (
        <section id='contact'>
            <div className='contact__header--image'>
            <h3 className='contact__header--title'>Get In Touch</h3>
           
            </div>

            <div className='contact__form'>

            <div className='contact__form--succsessful'>
                <h1>Thank You. Your Message Has Been Sent.</h1>
            </div>
                <FontAwesomeIcon icon="times" className='form__exit' onClick={() => togglemodal()}/>
                <div className='form__header'>
                    <h2 className='form__title'>Send Us A Message!</h2>
            <img src={aadarsh} className='profilepic__aadarsh'/>
                </div>
            
            <form ref={form} onSubmit={sendEmail}>

            <label>Name
            <br/>
            <input type="text" required name="user_name" className='input'></input>
            </label>
            <br/>
            <label>Email
            <br/>
            <input type="email" required name="user_email" className='input'></input>
            <br/>
            </label>
            <label>Subject
            <br/>
            <textarea className='textarea' name="message"></textarea>
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
                 Want to send us donations? All our content is free, so donations go a long way!
                </p>
                <p style={{color: "rgb(246,246,246)"}}>
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
                <p style={{color: "rgb(246,246,246)"}}>
                   We will try and get back to you whenever we can!
                </p>
            </div>
        </div>
           
        </section>
    );
}

export default Contactus;
