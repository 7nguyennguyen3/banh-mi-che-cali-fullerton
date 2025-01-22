import React from "react";
import Banner from "../_components/Banner";

const GALLERY_IMAGES = [
  "/bun-bo-hue.jpg",
  "/bun-bo-hue-2.jpg",
  "/banh-mi-curry.jpg",
  "/bun-cha-gio.jpg",
  "/pho-tai.jpg",
  "/pho-hai-san.jpg",
  "/good-pic.jpg",
  "/to-go-food.jpg",
  "/spring-roll.jpg",
  "/curry.jpg",
  "/pho-dac-biet.jpg",
  "/banh-mi.jpg",
  "/che.jpg",
  "/location-2.jpg",
  "/location.jpg",
  "/grand-opening.jpg",
  "/interior.jpg",
  "/interior-2.jpg",
];

const GalleryPage = () => {
  return (
    <section className="min-h-screen">
      <Banner imgSrc="/good-pic-2.jpg" pageTitle="Gallery" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {GALLERY_IMAGES.map((image, index) => (
          <div
            key={index}
            className="w-full h-64 overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryPage;
