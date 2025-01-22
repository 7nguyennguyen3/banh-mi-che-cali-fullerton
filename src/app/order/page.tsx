import { Button } from "@/components/ui/button";
import { Clock, MapPin, ShoppingBag, Truck } from "lucide-react";
import Banner from "../_components/Banner";

const OrderPage = () => {
  return (
    <section className="min-h-screen">
      <Banner imgSrc="/good-pic-2.jpg" pageTitle="Order" />
      <div className="flex flex-col items-center py-12 px-4 bg-white shadow-lg rounded-lg max-w-3xl mx-auto mt-8">
        <h2 className="text-3xl font-semibold mb-8">
          We are currently not accepting online orders
        </h2>
        <p className="text-lg mb-4">
          We deliver with Postmates, UberEats, DoorDash, & Grubhub
        </p>
        <p className="text-lg mb-4">We also accept orders by phone.</p>
        <p className="text-lg mb-4">
          Please contact us at
          <span className="font-bold"> 714-123-4567 </span>
          to place your order.
        </p>
        <div className="flex gap-4 mt-4">
          <div className="flex items-center gap-2">
            <Truck className="text-yellow-500" size={24} />
            <span className="text-lg font-semibold">Postmates</span>
          </div>
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-green-500" size={24} />
            <span className="text-lg font-semibold">UberEats</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="text-red-500" size={24} />
            <span className="text-lg font-semibold">DoorDash</span>
          </div>
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-orange-500" size={24} />
            <span className="text-lg font-semibold">Grubhub</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center py-12 px-4 bg-gray-100 shadow-lg rounded-lg max-w-3xl mx-auto mt-8">
        <h2 className="text-3xl font-semibold mb-8">Operating Hours</h2>
        <div className="flex items-center gap-2 mb-4">
          <Clock className="text-yellow-500" size={24} />
          <span className="text-lg font-semibold">Mon-Fri: 10am - 9pm</span>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <Clock className="text-yellow-500" size={24} />
          <span className="text-lg font-semibold">Sat-Sun: 10am - 10pm</span>
        </div>
      </div>

      <div className="flex flex-col items-center py-12 px-4 bg-white shadow-lg rounded-lg max-w-3xl mx-auto mt-8">
        <h2 className="text-3xl font-semibold mb-8">Our Location</h2>
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="text-yellow-500" size={24} />
          <span className="text-lg font-semibold">
            1000 S Harbor Blvd, Fullerton, CA 92832
          </span>
        </div>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=1000+S+Harbor+Blvd,+Fullerton,+CA+92832"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4"
        >
          <Button className="px-8 py-4 text-lg font-semibold bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition-colors duration-300">
            Get Directions
          </Button>
        </a>
      </div>
    </section>
  );
};

export default OrderPage;
