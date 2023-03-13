import React from 'react'

import PropTypes from 'prop-types'

import './bloc-text-left1.css'

const BlocTextLeft1 = (props) => {
  return (
    <div className={`bloc-text-left1-bloc-text-left ${props.rootClassName} `}>
      <h5 className="bloc-text-left1-text HeadingThree">{props.heading}</h5>
      <span className="bloc-text-left1-text1 Body">{props.text}</span>
    </div>
  )
}

BlocTextLeft1.defaultProps = {
  rootClassName: '',
  text: 'Specialiștii noștri vă vor oferi tot suportul necesar pentru a selecta cel mai favorabil lot de teren pentru înființarea unei livezi de nuc',
  heading: 'Selectarea terenului',
}

BlocTextLeft1.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
}

export default BlocTextLeft1
