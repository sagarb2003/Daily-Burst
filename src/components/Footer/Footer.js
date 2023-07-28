import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Daily Burst made by -{" "}
        <a
          href="https://www.linkedin.com/in/sagar-singh-bisht-10903222b/"
          target="blank"
        >
          Sagar Singh Bisht
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/" target="blank">
          <i class="fa-brands fa-square-instagram"></i>
        </a>
        <a href="https://github.com/sagarb2003" target="blank">
          <i class="fa-brands fa-square-github"></i>
        </a>
        <a href="https://twitter.com/SAGARSI53790491" target='blank'>
          <i class="fa-brands fa-square-twitter"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer