import React from 'react'
import logo from './assets/lo.png'

const Header = () => {
  return (
    <header>
      <div className='side'>
       <div className="side-content">
        <a href="">Gmail</a>
        <a href="">Images</a>
        <p href="" className='initials'>S</p>
       </div>
      </div>
      <div className="header-img">
      <img src={logo} alt="Google colorful logo" />
      </div>
    </header>
  )
}

export default Header
