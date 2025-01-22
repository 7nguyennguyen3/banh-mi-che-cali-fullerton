"use client";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const IMAGES_ARRAY = [
  "/good-pic-2.jpg",
  "/spring-roll.jpg",
  "/pho-tai.jpg",
  "/bun-bo-hue-2.jpg",
  "/good-pic.jpg",
];

const HeroBanner = () => {
  return (
    <section className="relative flex flex-col gap-5">
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1500}
        className="w-full h-[600px] md:h-[700px] xl:h-[850px]"
      >
        {IMAGES_ARRAY.map((image, index) => (
          <SwiperSlide
            key={index}
            className="w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-black opacity-15" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h2 className="text-white text-5xl xs:text-6xl md:text-7xl font-bold p-4 rounded font-dancing">
          Banh Mi Che Cali
        </h2>
        <h3 className="text-2xl xs:text-3xl md:text-4xl text-white">
          Vietnamese Cuisine
        </h3>
      </div>
    </section>
  );
};

export default HeroBanner;
