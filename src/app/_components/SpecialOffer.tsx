import ColoredSection from "./ColoredSection";
import { Gift, Sandwich, Coffee } from "lucide-react";

export const SpecialOffer = () => {
  return (
    <ColoredSection color="#f1f3f5">
      <div className="flex flex-col items-center justify-center py-12 max-w-7xl mx-auto px-4">
        <Gift className="text-yellow-500 w-12 h-12 mb-4" />
        <h2 className="text-3xl font-semibold mb-6">Special Offers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <Sandwich className="text-yellow-500 w-12 h-12 mb-4" />
            <p className="text-xl font-semibold text-center">
              Buy 2 get 1 free on all Banh Mi sandwiches.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <Coffee className="text-yellow-500 w-12 h-12 mb-4" />
            <p className="text-xl font-semibold text-center">
              Buy 1 get 1 free on milk tea.
            </p>
          </div>
        </div>
      </div>
    </ColoredSection>
  );
};
