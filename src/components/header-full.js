import React from 'react'

import PropTypes from 'prop-types'

import PrimaryGrrenButton from './primary-grren-button'
import './header-full.css'

const HeaderFull = (props) => {
  return (
    <div className={`header-full-header ${props.rootClassName} `}>
      <nav className="header-full-nav">
        <div className="header-full-container">
          <span className="header-full-text">Soft UI Design System</span>
          <div className="header-full-menu">
            <span className="header-full-text1">Home</span>
            <span className="header-full-text2">Profile</span>
            <span className="header-full-text3">Coming Soon</span>
          </div>
          <div className="header-full-container1">
            <div className="header-full-container2">
              <PrimaryGrrenButton button="buy now"></PrimaryGrrenButton>
            </div>
            <svg viewBox="0 0 1024 1024" className="header-full-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </nav>
    </div>
  )
}

HeaderFull.defaultProps = {
  rootClassName: '',
}

HeaderFull.propTypes = {
  rootClassName: PropTypes.string,
}

export default HeaderFull
