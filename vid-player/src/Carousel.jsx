import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import carouselImage1 from "./assets/carousel/img1.png";
import carouselImage2 from "./assets/carousel/img2.png";
import carouselImage3 from "./assets/carousel/img3.png";
import carouselImage4 from "./assets/carousel/img4.png";

export default function Carousel() {
  const slides = [carouselImage1, carouselImage2, carouselImage3, carouselImage4];

  return (
    <div className="relative w-full max-w-200 h-auto py-10 px-2">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        speed={1200}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="shadow-lg"
      >
        {slides.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full h-auto top-0 mx-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}