import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card41.css'

const BlogPostCard41 = (props) => {
  return (
    <div className={`blog-post-card41-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-post-card41-image"
      />
      <div className="blog-post-card41-container">
        <span className="blog-post-card41-text">{props.date}</span>
        <span className="blog-post-card41-text1">{props.description}</span>
        <div className="blog-post-card41-separator"></div>
        <span className="blog-post-card41-text2">{props.label}</span>
      </div>
    </div>
  )
}

BlogPostCard41.defaultProps = {
  description:
    'Lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHZlbmljZXxlbnwwfHx8fDE2MjYyNzIyOTA&ixlib=rb-1.2.1&w=1000',
  rootClassName: '',
  date: 'JULY 24',
  label: 'Food & Drink',
}

BlogPostCard41.propTypes = {
  description: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  date: PropTypes.string,
  label: PropTypes.string,
}

export default BlogPostCard41
