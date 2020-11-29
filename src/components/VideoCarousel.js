import React from 'react';
import image1 from '../images/fountain.jpg'
import image2 from '../images/library.jpg'
import image3 from '../images/sex.jpg'

const VideoCarousel = () => {


  return (

    <div className="carousel-container">

<div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={image1} />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={image2} />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={image3} />
    </div>
  </div>
</div>

    </div>
  )
}

export default VideoCarousel;