import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PrimaryBlueButton from './primary-blue-button'
import './header.css'

const Header = (props) => {
  return (
    <div data-role="Header" className={`header-header ${props.rootClassName} `}>
      <nav className="header-nav">
        <div className="header-container">
          <Link to="/" className="header-navlink">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="header-image"
            />
          </Link>
          <div className="header-menu">
            <Link to="/about" className="header-navlink01 Menu">
              Despre Noi
            </Link>
            <Link to="/galerie-soiuri" className="header-navlink02 Menu">
              Soiuri de Nuc
            </Link>
            <Link to="/suport" className="header-navlink03 Menu">
              Servicii
            </Link>
            <Link to="/galerie-livezi" className="header-navlink04 Menu">
              Proiecte realizate
            </Link>
            <Link to="/galerie" className="header-navlink05 Menu">
              Galerie
            </Link>
          </div>
          <div className="header-container1">
            <div className="header-container2">
              <Link to="/contacte" className="header-navlink06">
                <PrimaryBlueButton
                  button="Contacte"
                  rootClassName="primary-blue-button-root-class-name"
                  className="header-component"
                ></PrimaryBlueButton>
              </Link>
            </div>
            <div data-role="BurgerMenu" className="header-burger-menu">
              <svg viewBox="0 0 1024 1024" className="header-icon">
                <path
                  d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"
                  className=""
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <div data-role="MobileMenu" className="header-mobile-menu">
        <div className="header-top">
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="header-image1"
          />
          <div data-role="CloseMobileMenu" className="header-close-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon2">
              <path
                d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
        <div className="header-mid">
          <div className="header-menu1">
            <Link to="/" className="header-navlink07 HeadingTwo">
              Home
            </Link>
            <Link to="/about" className="header-navlink08 HeadingTwo">
              Despre Noi
            </Link>
            <Link to="/galerie-soiuri" className="header-navlink09 HeadingTwo">
              Soiuri de Nuc
            </Link>
            <Link to="/suport" className="header-navlink10 HeadingTwo">
              Servicii
            </Link>
            <Link to="/galerie-livezi" className="header-navlink11 HeadingTwo">
              Proiecte realizate
            </Link>
            <Link to="/galerie" className="header-navlink12 HeadingTwo">
              Galerie
            </Link>
            <Link to="/contacte" className="header-navlink13 HeadingTwo">
              Contacte
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  image_src: '/playground_assets/logo.svg',
  image_src1: '/playground_assets/logo.svg',
  image_alt1: 'image',
  image_alt: 'image',
  rootClassName: '',
}

Header.propTypes = {
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Header
