import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <footer>
      <div className="first">
        <p>Nigeria</p>
      </div>
      <div className="second">
        <div className="cell">
          <a href="">About</a>
          <a href="">Advertising</a>
          <a href="">Business</a>
          <a href="">How Search Works</a>
        </div>
        <div className="cell">
          <a href=""> <FontAwesomeIcon icon={faLeaf} className='leaf'/>Carbon neutral since 2007 </a>
        </div>
        <div className="cell">
          <a href="">Privacy</a>
          <a href="">Terms</a>
          <a href="">Settings</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
