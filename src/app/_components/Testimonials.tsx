import { Star } from "lucide-react";
import ColoredSection from "./ColoredSection";

const Testimonials = () => {
  const reviews = [
    "The best Vietnamese food in town! Highly recommend the Pho Tai.",
    "Amazing atmosphere and delicious food. A must-visit!",
    "Great service and fantastic flavors. Will definitely come back!",
    "The Banh Mi sandwiches are out of this world!",
    "Friendly staff and quick service. Highly recommend!",
    "A hidden gem with authentic Vietnamese cuisine.",
  ];

  return (
    <ColoredSection color="#e9ecef">
      <div className="flex flex-col items-center justify-center py-12 max-w-7xl mx-auto px-4">
        <Star className="text-yellow-500 w-12 h-12 mb-4" fill="currentColor" />
        <h2 className="text-3xl font-semibold mb-6">Customer Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between"
            >
              <blockquote className="text-xl font-semibold italic text-gray-700 mb-4">
                {review}
              </blockquote>
              <div className="flex justify-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-green-500 w-6 h-6"
                    fill="currentColor"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ColoredSection>
  );
};

export default Testimonials;
