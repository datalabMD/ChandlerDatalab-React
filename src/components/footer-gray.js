import React from 'react'

import PropTypes from 'prop-types'

import './footer-gray.css'

const FooterGray = (props) => {
  return (
    <footer className={`footer-gray-footer ${props.rootClassName} `}>
      <div className="footer-gray-divider"></div>
      <div className="footer-gray-container">
        <div className="footer-gray-container1">
          <div className="footer-gray-container2">
            <span className="footer-gray-text">Chandler Moldova</span>
            <div className="footer-gray-container3">
              <span className="footer-gray-text1">Social</span>
              <a
                href="https://aaa.com"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-gray-link"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="footer-gray-icon"
                >
                  <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                </svg>
              </a>
              <svg viewBox="0 0 1024 1024" className="footer-gray-icon2">
                <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
              </svg>
            </div>
          </div>
          <div className="footer-gray-container4">
            <div className="footer-gray-container5">
              <span className="footer-gray-text2">Despre Noi</span>
            </div>
            <div className="footer-gray-container6">
              <span className="footer-gray-text3">Soiuri de Nuc</span>
            </div>
            <div className="footer-gray-container7">
              <span className="footer-gray-text4">Servicii</span>
            </div>
            <div className="footer-gray-container8">
              <span className="footer-gray-text5">Galerie</span>
            </div>
          </div>
        </div>
        <span className="footer-gray-text6">
          <span>All rights reserved. Copyright © Chandler Moldova</span>
        </span>
      </div>
    </footer>
  )
}

FooterGray.defaultProps = {
  rootClassName: '',
}

FooterGray.propTypes = {
  rootClassName: PropTypes.string,
}

export default FooterGray
