import React from 'react'

const Slider = () => {
  return (
    <div className='max-w-[500px] mx-auto mt-90px '>
<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./images/Rectangle 28.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./images/Rectangle 18.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./images/flw.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}

export default Slider