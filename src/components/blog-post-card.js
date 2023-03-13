import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card.css'

const BlogPostCard = (props) => {
  return (
    <div className="blog-post-card-blog-post-card">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-post-card-image"
      />
      <div className="blog-post-card-container">
        <span className="blog-post-card-text">
          <span>
            Membri ai echipei noastre, cât și prestatori de servicii în diferite
            regiuni ale țării pe care îi cunoaștem sunt gata să colaboreze cu
            toți nucicultorii care nu dispun de infrastructura necesară pentru
            decojirea nucilor de coaja verde și spălarea corespunzătoare și vor
            să apeleze la prestări de servicii în acest sens.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            Vă vom ajuta să identificați cel mai apropiat punct de lucru și să
            vă punem în relație cu prestatorul respectiv și vă vom oferi unele
            detalii tehnice referitoare la procesul de decojire al nucilor din
            soiurile pe care le aveți.
          </span>
          <br></br>
          <span></span>
        </span>
      </div>
    </div>
  )
}

BlogPostCard.defaultProps = {
  image_src: '/playground_assets/sa1-1500w.png',
  image_alt: 'image',
}

BlogPostCard.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default BlogPostCard
