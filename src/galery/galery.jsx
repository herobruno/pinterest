import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import "./galery.css";

import 'swiper/css';
import 'swiper/css/pagination';

const Gallery = () => {
  const images = [
    '/img/look1.jpg',
    '/img/look2.jpg',
    '/img/look3.jpg',
    '/img/look4.jpg',
  ];

  return (
    <div className="gallery-container">
    <h2 className="gallery-title">Encontre sua próxima</h2>
    <h3 className="gallery-subtitle">ideia de look de verão</h3>

    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={2}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
      className="gallery-swiper"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img
            src={src}
            alt={`Look ${index + 1}`}
            className="gallery-image"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
};

export default Gallery;