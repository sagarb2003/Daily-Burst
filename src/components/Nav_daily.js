import React from 'react'
import './Nav_daily.css'
import HamburgerDrawer from './HamburgerDrawer'

const Nav_daily = ({setCategory}) => {
  return (
    <div className="nav">
      
      <div className="icon">
        <HamburgerDrawer setCategory={setCategory} />
      </div>
      <h1>Daily Burst </h1>
      <img
        style={{ cursor: "pointer" }}
        src={process.env.PUBLIC_URL + "/dailyburst.jpg"}
        height="80%"
        alt="logo"
      />
    </div>
  );
}

export default Nav_daily