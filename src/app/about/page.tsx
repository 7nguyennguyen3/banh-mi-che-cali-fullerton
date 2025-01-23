import React from "react";
import Banner from "../_components/Banner";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen">
      <Banner imgSrc="/interior-3.jpg" pageTitle="About Us" />
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col items-center justify-center py-12 max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold pb-10">Our Story</h2>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 bg-white shadow-lg rounded-lg p-8">
            <img
              src="/interior.jpg"
              alt="Restaurant Interior"
              className="w-full lg:w-1/2 h-auto rounded-lg shadow-lg object-cover"
            />
            <div className="text-lg leading-relaxed text-center lg:text-left px-4">
              <p>
                Welcome to Banh Mi Che Cali, where we bring the authentic
                flavors of Vietnamese cuisine to your table. Our journey began
                with a passion for sharing the rich culinary heritage of Vietnam
                with the world. From the bustling streets of Saigon to the
                serene countryside, we have gathered the best recipes and
                ingredients to create a menu that is both diverse and delicious.
              </p>
              <p className="mt-4">
                At Banh Mi Che Cali, we believe that food is more than just
                sustenance; it is an experience that brings people together. Our
                chefs are dedicated to crafting each dish with care and
                precision, using only the freshest ingredients. Whether you are
                craving a hearty bowl of Pho, a flavorful Banh Mi, or a
                refreshing Che dessert, we have something to satisfy every
                palate.
              </p>
            </div>
          </div>
          <blockquote className="mt-10 text-xl italic text-center text-gray-600">
            Food is the ingredient that binds us together.
          </blockquote>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-10 bg-gray-100 shadow-lg rounded-lg p-8">
            <div className="text-lg leading-relaxed text-center lg:text-left px-4">
              <p>
                We take pride in our warm and welcoming atmosphere, where you
                can enjoy a meal with family and friends. Our commitment to
                quality and authenticity has earned us a loyal following, and we
                are grateful for the opportunity to serve our community.
              </p>
              <p className="mt-4">
                Thank you for choosing Banh Mi Che Cali. We look forward to
                sharing our love for Vietnamese cuisine with you.
              </p>
            </div>
            <img
              src="/interior-2.jpg"
              alt="Chef Preparing Food"
              className="w-full lg:w-1/2 h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
