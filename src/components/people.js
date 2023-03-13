import React from 'react'

import PropTypes from 'prop-types'

import './people.css'

const People = (props) => {
  return (
    <div className="people-people">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="people-image"
      />
      <div className="people-container">
        <span className="people-text HeadingThree">
          <span>Mihai NEGRESCU</span>
          <br></br>
          <span></span>
        </span>
        <span className="people-text03 Body">
          <span>Expert pe cultura nucului</span>
          <br></br>
          <span>Responsabil pe relația cu clienții și partenerii C-M</span>
          <br></br>
          <span></span>
        </span>
        <span className="people-text07 Content">
          <span>
            Planificarea și înființarea livezii de nuc; consultanță întreținere
            plantație; recoltarea, procesarea și exportul nucilor
          </span>
          <br></br>
          <span></span>
        </span>
      </div>
    </div>
  )
}

People.defaultProps = {
  image_alt: 'image',
  image_src: 'c99297bd-3e62-4db7-b19f-fccbd5ce56a6',
}

People.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default People
