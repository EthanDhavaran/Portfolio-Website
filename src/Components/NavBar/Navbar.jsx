import React, { useState } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <nav className='navbar'>
      <ul className="nav-menu">
        <li className={menu === "home" ? "active" : ""}>
          <AnchorLink className='anchor-link' href='#home'>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
        </li>
        <li className={menu === "about" ? "active" : ""}>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
        </li>
        <li className={menu === "services" ? "active" : ""}>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
        </li>
        <li className={menu === "portfolio" ? "active" : ""}>
          <AnchorLink className='anchor-link' offset={50} href='#work'>
            <p onClick={() => setMenu("portfolio")}>Portfolio</p>
          </AnchorLink>
        </li>
        <li className={menu === "contact" ? "active" : ""}>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
        </li>
      </ul>
      <section className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          Connect with Me
        </AnchorLink>
      </section>
    </nav>
  );
};

export default Navbar;
