import React from 'react'
import ImageZoom from 'react-medium-image-zoom'



const Article = function(props) {

  return (
    <div>
      <p>sdfghjk</p>
      <ImageZoom
        image={{
          src: 'https://picsum.photos/200',
          alt: 'Golden Gate Bridge',
          className: 'img',
          style: { width: '50px' }
        }}
        zoomImage={{
          src: 'https://picsum.photos/1200/1000',
          alt: 'Golden Gate Bridge'
        }}
      />
    </div>
  )
}

export default Article;