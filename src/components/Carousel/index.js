import React, { useState } from 'react';
import wf1 from './theartistgalWF1.png';
import wf2 from './artistgalWF.png';
import colors from './Artistgal-ColorsFonts.png';
import compo from './psagbranding.png';
import siteprev from './agprev.png';
import tone from './PS-tone.png';
import './style.css';


const Carousel = () => {
    const images = [
        [tone],
        [colors],
        [compo],
        [wf1],
        [wf2],
        [siteprev]
      ];

    const [activeIndex, setActiveIndex] = useState(0);
    const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
        &lt;
      </button>
      <div className='row d-flex justify-content-center'>
      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className="carousel__img"
      />
      </div>
      <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
        &gt;
      </button>
    </div>
  );
};
export default Carousel;