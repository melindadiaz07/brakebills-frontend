import React from 'react';
import image1 from '../images/fountain.jpg'
import image2 from '../images/library.jpg'
import image3 from '../images/sex.jpg'
import image4 from '../images/lab.jpg'
import image5 from '../images/library2.jpg'

const VideoCarousel = () => {


  return (

    <div className="carousel-container">

<div id="carousel-thumb" class="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">
  <div class="carousel-inner" role="listbox">
    
    <div class="carousel-item active">
      <img class="d-block w-100" src={image1} />
    </div>

    <div class="carousel-item">
      <img class="d-block w-100" src={image2} />
    </div>

    <div class="carousel-item">
      <img class="d-block w-100" src={image3} />
    </div>

    <div class="carousel-item">
      <img class="d-block w-100" src={image4} />
    </div>

    <div class="carousel-item">
      <img class="d-block w-100" src={image5} />
    </div>

   
</div>
    <a class="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>

  

  
    </div>


</div>
   
  )
}

export default VideoCarousel;