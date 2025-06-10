import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import toast from 'react-hot-toast';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const name = formData.get('name')?.trim();
        const email = formData.get('email')?.trim();
        const message = formData.get('message')?.trim();

        if (!name || !email || !message) {
            toast.error("Please fill in all fields before submitting!!");
            return;
        }

        formData.append("access_key", "e881b2d7-4074-4c99-8479-c48c835004a5");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            toast.success('Successfully Sent!');
            event.target.reset();
        } else {
            toast.error('Could not send :(, please try again.');
        }
    };
    return (
        <section id='contact' className='contact'>
            <header className='contact-title'>
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </header>
            <section className="contact-section">
                <section className="contact-left">
                    <h2>My Details</h2>
                    <p>Feel free to send me an email and we can connect!</p>
                    <section className="contact-details">
                        <section className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>dhavaranethan@gmail.com</p>
                        </section>
                        <section className="contact-detail">
                            <img src={call_icon} alt="" /> <p>+27 71 707 9324</p>
                        </section>
                        <section className="contact-detail">
                        </section>
                    </section>
                </section>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className='contact-submit'>Submit now</button>
                </form>
            </section>
        </section>
    )
}

export default Contact
