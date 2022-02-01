import React from 'react';
import TestimonialCards from './ui/TestimonialCards';
import alex from "../assets/alex.jpg"
import jaden from "../assets/jaden.png"
import josh from "../assets/josh.jpg"

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
            para="Aadarsh has helped me through the traumatising years I spent in chemistry and math classes before the HSC. With his help, I was able to achieve an ATAR of 85 even though my predicted ATAR before taking help from A- Academy was 55. I can't thank Aadarsh enough for saving my HSC years, and I hope he can do the same for all you future A- Academy Students"
            name="Alex"
            title="HSC Graduate"
            />
            <TestimonialCards 
           img={josh} 
            para="Even before aadarsh went online he was still a massive help to students at his highschool. I still can still remember the mini tutoring lessons he gave us before an exam and thanks to aadarsh i was able to pass my investigating science exam with flying colors and get into my computer science course at Uni. I still even watch his videos from time to time whenever old content pop backs up in my uni assignments"
            name="Joshua"
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
