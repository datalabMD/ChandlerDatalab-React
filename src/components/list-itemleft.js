import React from 'react'

import PropTypes from 'prop-types'

import './list-itemleft.css'

const ListItemleft = (props) => {
  return (
    <div className={`list-itemleft-container ${props.rootClassName} `}>
      <h5 className="list-itemleft-text">{props.new_prop}</h5>
      <span className="list-itemleft-text1">{props.description}</span>
    </div>
  )
}

ListItemleft.defaultProps = {
  rootClassName: '',
  new_prop: '1. Listen to Social Conversations',
  description:
    'Gain access to the demographics, psychographics, and location of unique people who are interested and talk about your brand.',
}

ListItemleft.propTypes = {
  rootClassName: PropTypes.string,
  new_prop: PropTypes.string,
  description: PropTypes.string,
}

export default ListItemleft
