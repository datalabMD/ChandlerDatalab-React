import React from 'react'

import PropTypes from 'prop-types'

import './outline-gray-button-heero.css'

const OutlineGrayButtonHeero = (props) => {
  return (
    <div
      className={`outline-gray-button-heero-container ${props.rootClassName} `}
    >
      <button className="outline-gray-button-heero-button button ButtonSmall">
        {props.button}
      </button>
    </div>
  )
}

OutlineGrayButtonHeero.defaultProps = {
  button: 'Button',
  rootClassName: '',
}

OutlineGrayButtonHeero.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default OutlineGrayButtonHeero
