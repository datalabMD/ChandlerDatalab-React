import React from 'react'

import PropTypes from 'prop-types'

import './post-cardsuport1.css'

const PostCardsuport1 = (props) => {
  return (
    <div className={`post-cardsuport1-post-cardsuport ${props.rootClassName} `}>
      <div className="post-cardsuport1-title">
        <span className="post-cardsuport1-text Lead">{props.text}</span>
      </div>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="post-cardsuport1-image"
      />
      <div className="post-cardsuport1-description">
        <div className="post-cardsuport1-separator"></div>
        <span className="post-cardsuport1-text1 Body">{props.text1}</span>
      </div>
    </div>
  )
}

PostCardsuport1.defaultProps = {
  image_src: '/playground_assets/s13-1500w.png',
  image_alt: 'image',
  text: 'CONSULTANȚĂ GRATUITĂ ÎN PRIMII 3 ANI DE LA PLANTARE',
  rootClassName: '',
  text1:
    'Toți clienții care achiziționează pomi altoiți de nuc de la pepiniera Chandler Moldova beneficiază de consultanță gratuită în primii trei ani de la plantare. În mare parte comunicarea informațiilor se face pe platofrme online sau, în caz de necesitate, prin deplasare la fața locului. Experții noștri vă vor oferi toate informațiile despre intervențiile necesare pentru a susține un ritm de creștere în primii ani cât mai dinamic, aspect esențial pentru succesul livezii.',
}

PostCardsuport1.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
}

export default PostCardsuport1
