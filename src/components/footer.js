import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-container">
        <div className="footer-container1">
          <span className="footer-text">Copyright © Chandler Moldova</span>
        </div>
        <div className="footer-container2">
          <div className="footer-container3">
            <span className="footer-text1 Menu">Despre noi</span>
            <Link to="/suport" className="footer-navlink Body">
              Servicii
            </Link>
          </div>
          <div className="footer-container4">
            <span className="footer-text2 Menu">Soiri de nuc</span>
            <span className="footer-text3 Menu">Proiecte realizate</span>
          </div>
          <div className="footer-container5">
            <Link to="/galerie" className="footer-navlink1 Menu">
              Galerie
            </Link>
            <span className="footer-text4 Menu">Contacte</span>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/waves-white.svg"
        className="footer-image"
      />
    </footer>
  )
}

Footer.defaultProps = {
  rootClassName: '',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
}

export default Footer
