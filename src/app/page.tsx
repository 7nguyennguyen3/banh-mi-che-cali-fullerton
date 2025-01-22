import GetLocationText from "./_components/GetLocationText";
import HeroBanner from "./_components/HeroBanner";
import OurValue from "./_components/OurValue";
import SignatureDishesGallery from "./_components/SignatureDishesGallery";
import { SpecialOffer } from "./_components/SpecialOffer";
import Testimonials from "./_components/Testimonials";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <OurValue />
      <SignatureDishesGallery />
      <Testimonials />
      <SpecialOffer />
      <GetLocationText />
    </>
  );
};

export default HomePage;
