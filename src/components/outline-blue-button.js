import React from 'react'

import PropTypes from 'prop-types'

import './outline-blue-button.css'

const OutlineBlueButton = (props) => {
  return (
    <div className={`outline-blue-button-container ${props.rootClassName} `}>
      <button className="outline-blue-button-button button">
        {props.button}
      </button>
    </div>
  )
}

OutlineBlueButton.defaultProps = {
  rootClassName: '',
  button: 'Button',
}

OutlineBlueButton.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default OutlineBlueButton
