import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
//import Books from "./Books";

function Slider() {
  const slides = [
    {
      url: "./images/book_reading_1.jpg",
    },
    {
      url: "./images/book_reading_2.jpg",
    },
    {
      url: "./images/book_reading_3.jpg",
    },
    {
      url: "./images/book_reading_4.jpg",
    },
    {
      url: "./images/book_reading_5.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    // Auto-advance every 2 seconds
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
      <div className="w-screen h-screen">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full bg-center bg-cover duration-500"
        ></div>
        {/* Left Arrow */}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        {/* Slide Indicators */}
        <div className="flex bottom-4 justify-center py-2 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-black " : "bg-gray-300"
              }`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
  );
}

export default Slider;
