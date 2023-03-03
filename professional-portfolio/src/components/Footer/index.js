import React from "react";
import "./style.css";
import git from './git.png';
import linked from './linked.png';
import insta from './insta.png';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      Find me on: 
      <a href="https://github.com/mariahmcdaniel"><img
          id='git'
          src={git}
          alt='my github' /></a>
      <a href="https://www.linkedin.com/in/mariah-mcdaniel-607895251/"><img
          id='linked'
          src={linked}
          alt='my linkedin' /></a>
      <a href="https://instagram.com/mar____iah?igshid=YmMyMTA2M2Y="><img
          id='insta'
          src={insta}
          alt='my instagram' /></a>
      {`Copyright © Mariah McDaniel ${year}`}
    </footer>
  );
};

export default Footer;