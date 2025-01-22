import React from "react";
import { SIGNATURE_DISHES } from "../_global/menu";

const SignatureDishesGallery = () => {
  return (
    <section className="flex flex-col items-center justify-center py-12 px-5 max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold pb-10">Signature Dishes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {SIGNATURE_DISHES.map((dish, index) => (
          <div className="h-[400px] w-full bg-gray-100" key={index}>
            <img
              src={dish.image}
              alt={dish.name}
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SignatureDishesGallery;
