import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card2.css'

const GalleryCard2 = (props) => {
  return (
    <div className={`gallery-card2-gallery-card ${props.rootClassName} `}>
      <div className="gallery-card2-container">
        <div className="gallery-card2-mobile-title">
          <h1 className="gallery-card2-title-mobile HeadingThree">
            {props.TitleMobile}
          </h1>
        </div>
        <div className="gallery-card2-container1">
          <div className="gallery-card2-container2">
            <h2 className="gallery-card2-text">{props.new_prop}</h2>
            <span className="gallery-card2-text1">{props.description}</span>
            <span className="gallery-card2-text2">SHOW MORE</span>
          </div>
        </div>
      </div>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="gallery-card2-image"
      />
    </div>
  )
}

GalleryCard2.defaultProps = {
  rootClassName: '',
  TitleMobile: 'Galerie',
  new_prop: 'Project Title',
  image_src:
    'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxmb29kfGVufDB8fHx8MTYyNjQ0OTIzNQ&ixlib=rb-1.2.1&w=1500',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  image_alt: 'image',
}

GalleryCard2.propTypes = {
  rootClassName: PropTypes.string,
  TitleMobile: PropTypes.string,
  new_prop: PropTypes.string,
  image_src: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
}

export default GalleryCard2
