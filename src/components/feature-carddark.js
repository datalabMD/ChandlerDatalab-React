import React from 'react'

import PropTypes from 'prop-types'

import './feature-carddark.css'

const FeatureCarddark = (props) => {
  return (
    <div className={`feature-carddark-container ${props.rootClassName} `}>
      <h5 className="feature-carddark-text">{props.new_prop}</h5>
      <span className="feature-carddark-text1">{props.text}</span>
    </div>
  )
}

FeatureCarddark.defaultProps = {
  text: 'Get the latest design ideas and turn it into reality.',
  new_prop: 'Design',
  rootClassName: '',
}

FeatureCarddark.propTypes = {
  text: PropTypes.string,
  new_prop: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FeatureCarddark
