import React, { useState } from "react";
import styles from "./Carousel.module.css";

const CarouselComponent = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWidthBackground = {
    ...styles.slide,
    backgroundImage: `url(${slides[currentIndex]})`,
  };

  return (
    <div className={styles.slider}>
      <div>
        <div onClick={goToPrevious} className={styles.leftArrow}>
          ❰
        </div>
        <div onClick={goToNext} className={styles.rightArrow}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div className={styles.dotsContainer}>
        {slides.map((slide, slideIndex) => (
          <div
            className={styles.dot}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
