import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import cv from '../../assets/CV.pdf';

const Hero = () => {
    return (
        <section id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I am Ethan Jordan Dhavaran, </span>currently in my third year of BSc Computer Science</h1>
            <section className="hero-action">
                <section className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></section>
                <a href={cv} target="_blank" rel="noopener noreferrer" download className="hero-resume">My resume</a>
        </section>
        </section >
    );
};

export default Hero