import React from 'react'

import PropTypes from 'prop-types'

import './list-itemright.css'

const ListItemright = (props) => {
  return (
    <div className={`list-itemright-container ${props.rootClassName} `}>
      <h5 className="list-itemright-text HeadingThree">{props.new_prop}</h5>
      <span className="list-itemright-text1 Body">{props.description}</span>
    </div>
  )
}

ListItemright.defaultProps = {
  rootClassName: '',
  description:
    'Gain access to the demographics, psychographics, and location of unique people who are interested and talk about your brand.',
  new_prop: '1. Listen to Social Conversations',
}

ListItemright.propTypes = {
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  new_prop: PropTypes.string,
}

export default ListItemright
