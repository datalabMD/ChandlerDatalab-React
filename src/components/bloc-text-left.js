import React from 'react'

import PropTypes from 'prop-types'

import './bloc-text-left.css'

const BlocTextLeft = (props) => {
  return (
    <div className="bloc-text-left-bloc-text-left">
      <h5 className="bloc-text-left-text">{props.heading}</h5>
      <span className="bloc-text-left-text1">{props.text}</span>
    </div>
  )
}

BlocTextLeft.defaultProps = {
  heading: '2. Siguri din vedere fitosanitar',
  text: 'Siguri din vedere fitosanitar',
}

BlocTextLeft.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
}

export default BlocTextLeft
