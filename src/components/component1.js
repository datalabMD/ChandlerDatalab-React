import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './component1.css'

const Component1 = (props) => {
  return (
    <div className={`component1-container ${props.rootClassName} `}>
      <div className="component1-dividergradient"></div>
      <footer className="component1-footer">
        <div className="component1-container1">
          <Link to="/" className="component1-navlink">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="component1-image"
            />
          </Link>
          <nav className="component1-nav">
            <Link to="/about" className="component1-navlink1">
              {props.text1}
            </Link>
            <Link to="/galerie-soiuri" className="component1-navlink2">
              {props.text2}
            </Link>
            <Link to="/suport" className="component1-navlink3">
              {props.text3}
            </Link>
            <Link to="/galerie" className="component1-navlink4">
              {props.text4}
            </Link>
            <Link to="/galerie-livezi" className="component1-navlink5">
              {props.text5}
            </Link>
            <Link to="/contacte" className="component1-navlink6">
              {props.text6}
            </Link>
          </nav>
        </div>
        <div className="component1-separator"></div>
        <div className="component1-container2">
          <span className="component1-text">{props.text}</span>
          <div className="component1-icon-group">
            <a
              href="https://www.facebook.com/Chandler.Moldova/"
              target="_blank"
              rel="noreferrer noopener"
              className="component1-link"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="component1-icon"
              >
                <path
                  d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                  className=""
                ></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/Chandler.Moldova/"
              target="_blank"
              rel="noreferrer noopener"
              className="component1-link1"
            >
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="component1-icon2"
              >
                <path
                  d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                  className=""
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

Component1.defaultProps = {
  text6: 'Contacte',
  text4: 'Galerie',
  rootClassName: '',
  image_src: '/playground_assets/logo.svg',
  text2: 'Soiuri de Nuc',
  text3: 'Servicii',
  image_alt: 'logo',
  text1: 'Despre Noi',
  text: 'All rights reserved. Copyright © Chandler Moldova',
  text5: 'Proiecte realizate',
}

Component1.propTypes = {
  text6: PropTypes.string,
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  image_alt: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text5: PropTypes.string,
}

export default Component1
