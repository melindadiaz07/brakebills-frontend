import React, { useEffect } from 'react';
import image1 from '../images/moscow.jpg'
import image2 from '../images/library.jpg'
import image3 from '../images/fountain.jpg'
import image4 from '../images/admissions1.png'
// import image5 from '../images/library2.jpg'

const PublicCarousel = () => {



  return (

    <div className="carousel-container">

<div id="carouselExampleControls" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner" role="listbox">
    
    <div class="carousel-item active">
      <img class="d-block w-100" src={image1} alt="" />
    </div>

    <div class="carousel-item">
      <img class="d-block w-100" src={image2} alt=""/>
    </div>

    <div class="carousel-item">
      <img class="d-block w-100" src={image3} alt=""/>
    </div>

    <div class="carousel-item">
      <img class="d-block w-100" src={image4} alt=""/>
    </div>

    {/* <div class="carousel-item">
      <img class="d-block w-100" src={image5} />
    </div> */}

   
</div>
<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  
    </div>


</div>
   
  )
}

export default PublicCarousel;