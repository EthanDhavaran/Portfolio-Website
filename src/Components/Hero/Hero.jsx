import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    return (
        <section id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I am Ethan Jordan Dhavaran, </span>currently in my third year of BSc Computer Science</h1>
            <section className="hero-action">
                <section className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></section>
                <section className="hero-resume">My resume</section>
            </section>
        </section>
    );
};

export default Hero