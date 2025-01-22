import { Heart, Utensils, Leaf } from "lucide-react";
import ColoredSection from "./ColoredSection";

const values = [
  {
    icon: <Heart className="text-red-500" size={44} />,
    text: `At Banh Mi Che Cali, we believe that food is an experience that brings people together.`,
  },
  {
    icon: <Utensils className="text-yellow-500" size={44} />,
    text: `Our chefs craft each dish with care, using only the freshest ingredients.`,
  },
  {
    icon: <Leaf className="text-green-500" size={44} />,
    text: `Whether you're craving Pho, Banh Mi, or a Che dessert, we have something to satisfy every palate.`,
  },
];

const OurValue = () => {
  return (
    <ColoredSection color="#f8f9fa">
      <div
        className="flex flex-col 
      lg:flex-row items-center justify-center gap-8"
      >
        <div
          className="text-lg min-h-[400px]
        flex flex-col items-center justify-center
         bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-center font-semibold text-3xl mb-6">Our Value</h2>
          {values.map((value, index) => (
            <div
              key={index}
              className="flex-col flex xs:flex-row justify-center mb-4 gap-3"
            >
              <div className="xs:mr-4 mx-auto">{value.icon}</div>
              <p className="text-lg">{value.text}</p>
            </div>
          ))}
        </div>
        <img
          src="/grand-opening.jpg"
          alt="Restaurant Interior"
          className="w-full lg:w-1/2 h-[400px] rounded-lg shadow-lg object-cover"
        />
      </div>
    </ColoredSection>
  );
};

export default OurValue;
