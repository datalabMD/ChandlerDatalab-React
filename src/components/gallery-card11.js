import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card11.css'

const GalleryCard11 = (props) => {
  return (
    <div className={`gallery-card11-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="gallery-card11-image"
      />
      <h2 className="gallery-card11-text">{props.new_prop}</h2>
      <span className="gallery-card11-text1">{props.subtitle}</span>
    </div>
  )
}

GalleryCard11.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1200',
  image_alt: 'image',
  subtitle: 'Lorem ipsum dolor sit amet',
  rootClassName: '',
  new_prop: 'Project Title',
}

GalleryCard11.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  subtitle: PropTypes.string,
  rootClassName: PropTypes.string,
  new_prop: PropTypes.string,
}

export default GalleryCard11
