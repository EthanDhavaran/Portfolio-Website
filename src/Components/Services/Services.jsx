import React from 'react'
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import services_data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  return (
    <section id='services' className='services'>
        <header className="services-title">
            <h1>My Services</h1>
            <img src={theme_pattern} alt="" />
        </header>
        <section className="services-container">
            {services_data.map((service,index)=>{
                return <section key={index} className="services-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <section className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="" />
                    </section>
                </section>
            })}
        </section>
    </section>
  )
}

export default Services
