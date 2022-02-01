import React from 'react';
import TestimonialCards from './ui/TestimonialCards';
import alex from "../assets/alex.jpg"
import jaden from "../assets/jadenprofilepic.jpg"
import angeline from "../assets/Angeline.jpeg"


const Testimonials = () => {
    return (
        <section id='Testimonials'>
  <p id="Testimonials__anchor">Whyus__anchortag</p>
        <h2 className='testimonial__title'>
            Testimonials
        
        </h2>
        <h5 className='testimonial__subtitle'>
            Hear what some of our former students have to say!
        </h5>
        <div className='testimonial__wrapper'>

       
            <TestimonialCards
            img={alex}
            para="Aadarsh has helped me through the traumatising years I spent in chemistry and math classes before the HSC. With his help, I was able to achieve an ATAR of 85 even though my predicted ATAR before taking help from A- Academy was 55. I can't thank Aadarsh enough for saving my HSC years, and I hope he can do the same for all you future A- Academy Students."
            name="Alex"
            title="HSC Graduate"
            />
            <TestimonialCards 
           img={angeline} 
            para="A- Academy, especially Aadarsh, was a massive help for me in the HSC. He helped me succeed in Extension Mathematics with flying colours. This allowed me to successfully get into my science course at university. Not only was his knowledge amazing, but also his belief in me; it really motivated me to do my best not only in my studies but everything I try in life. Best decision I have made hands down to join A- Academy!"
            name="Angeline"
            title="Uni Student"
            />
            <TestimonialCards
             img={jaden} 
            para="I've known Aadarsh as a friend for several years now. In those years, he has been nothing short of a whirling storm of productivity, whom I admire. The channel he offers in this endeavour is an excellent expression of his work ethic as it comprehensively covers subjects that students most often struggle with. I personally love how well he structures his individual lessons so that they can be easily digested in just a few viewings. Can't recommend him enough."
            name="Jaden"
            title="Uni Student"
            /> 
            </div>
        </section>
    );
}

export default Testimonials;
