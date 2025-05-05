import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./galery.css";

const Gallery = () => {
  const images = [
    "./src/assets/img1.jpg",
    "./src/assets/img2.jpg",
    "./src/assets/img3.jpg",
    "./src/assets/img4.jpg",
    "./src/assets/img5.jpg",
    "./src/assets/img6.jpg",
    "./src/assets/img7.jpg",
    "./src/assets/img8.jpg",
    "./src/assets/img9.jpg",
    "./src/assets/img10.jpg",
    "./src/assets/img11.jpg",
    "./src/assets/img12.jpg",
  ];

  const subtitles = [
    "ideia de look de verão",
    "inspiração para seu estilo",
    "tendência que combina com você",
  ];

  const subtitleColors = ["#2e7d32", "#1976d2", "#f57c00"];

  const groupSize = 4;
  const groupedImages = [];
  for (let i = 0; i < images.length; i += groupSize) {
    groupedImages.push(images.slice(i, i + groupSize));
  }

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Encontre sua próxima</h2>
      <h3
        className="gallery-subtitle"
        style={{ color: subtitleColors[activeIndex] }}
      >
        {subtitles[activeIndex]}
      </h3>
      <div className="custom-pagination">
        {subtitles.map((_, index) => (
          <span
            key={index}
            className={`custom-bullet ${activeIndex === index ? "active" : ""}`}
            style={{
              backgroundColor:
                activeIndex === index ? subtitleColors[index] : "#ccc",
            }}
          />
        ))}
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 4000 }}
        loop={true}
        onAutoplay={(swiper) => {
          const nextIndex = (swiper.realIndex + 1) % groupedImages.length;
          setActiveIndex(nextIndex % subtitles.length);
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex % subtitles.length);
        }}
        className="gallery-swiper"
      >
        {groupedImages.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="image-group">
              <div className="flex flex-col justify-between">
                <img
                  src={group[0]}
                  alt={`Look ${index}-0`}
                  className="gallery-image translate-up"
                />
                <img
                  src={group[1]}
                  alt={`Look ${index}-1`}
                  className="gallery-image translate-down"
                />
              </div>

              <div className="flex flex-col justify-between items-end">
                <img
                  src={group[2]}
                  alt={`Look ${index}-2`}
                  className="gallery-image translate-up"
                />
                <img
                  src={group[3]}
                  alt={`Look ${index}-3`}
                  className="gallery-image translate-down"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
