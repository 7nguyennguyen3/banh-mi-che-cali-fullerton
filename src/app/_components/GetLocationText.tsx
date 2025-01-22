import { MapPin } from "lucide-react";
import ColoredSection from "./ColoredSection";

const GetLocationText = () => {
  return (
    <ColoredSection color="#e9ecef">
      <div className="flex flex-col items-center justify-center py-12 max-w-7xl mx-auto">
        <MapPin className="text-yellow-500 w-12 h-12 mb-4" />
        <h2 className="text-3xl font-semibold mb-2">Visit Us Today!</h2>
        <h3 className="text-xl mb-4">
          1000 S Harbor Blvd, Fullerton, CA 92843
        </h3>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=1000+S+Harbor+Blvd,+Fullerton,+CA+92832"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 text-lg font-semibold bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition-colors duration-300"
        >
          Get Directions
        </a>
      </div>
    </ColoredSection>
  );
};

export default GetLocationText;
