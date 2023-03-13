import React from 'react'

import PropTypes from 'prop-types'

import './primary-grren-button.css'

const PrimaryGrrenButton = (props) => {
  return (
    <div className="primary-grren-button-container">
      <button className="primary-grren-button-button button">
        {props.button}
      </button>
    </div>
  )
}

PrimaryGrrenButton.defaultProps = {
  button: 'Button',
}

PrimaryGrrenButton.propTypes = {
  button: PropTypes.string,
}

export default PrimaryGrrenButton
