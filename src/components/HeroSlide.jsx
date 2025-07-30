import { useEffect, useRef, useState } from 'react';
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";

const slidesData = [
  {
    img: 'hero-1.jpeg',
    title: 'KTM 1290 SUPER DUKE R EVO',
    subtitle: 'The Beast Reborn',
  },
  {
    img: 'hero-2.jpeg',
    title: 'KTM 390 ADVENTURE',
    subtitle: 'Born To Explore',
  },
  {
    img: 'hero-3.jpeg',
    title: 'KTM RC 8C',
    subtitle: 'Track Only Weapon',
  },
];

const HeroSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideIntervalRef = useRef(null);

  const goToSlide = (index) => {
    setCurrentSlide((index + slidesData.length) % slidesData.length);
  };

  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  useEffect(() => {
    startSlideInterval();
    return () => clearInterval(slideIntervalRef.current);
  }, [currentSlide]);

  const startSlideInterval = () => {
    clearInterval(slideIntervalRef.current);
    slideIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 5000);
  };

  return (
    <div id="home" className="hero">
      <div className="hero-slider">
        {slidesData.map((slide, index) => (
          <div
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            key={index}
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div className="slide-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}

        <div className="slider-controls">
          <button className="prev-slide" onClick={prevSlide}><AiFillCaretLeft /></button>
          <div className="slide-dots">
            {slidesData.map((_, index) => (
              <div
                key={index}
                className={`slide-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></div>
            ))}
          </div>
          <button className="next-slide" onClick={nextSlide}><AiFillCaretRight /></button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
