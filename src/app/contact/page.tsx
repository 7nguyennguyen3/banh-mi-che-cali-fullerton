import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import Banner from "../_components/Banner";
import GetLocation from "../_components/GetLocation";

const ContactPage = () => {
  return (
    <section className="min-h-screen">
      <Banner imgSrc="/location-2.jpg" pageTitle="Contact Us" />
      <div className="flex flex-col items-center justify-center py-12 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-semibold mb-6">Get in Touch</h2>
        <p className="text-lg mb-4">
          {`We'd love to hear from you! Here's how you can reach us:`}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-[90%] bg-white shadow-lg rounded-lg p-8">
          <div className="text-lg text-center md:text-left md:w-1/2">
            <div className="mb-4">
              <h4 className="font-semibold">Hours</h4>
              <p>Mon-Fri: 10am - 9pm</p>
              <p>Weekend: 10am - 10pm</p>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold">Location</h4>
              <p>1000 S Harbor Blvd</p>
              <p>Fullerton, CA 92843</p>
              <p>Phone: (714) 555-1234</p>
            </div>
            <div className="flex gap-3 justify-center md:justify-start">
              <Facebook size={30} className="text-blue-600" />
              <Instagram size={30} className="text-pink-600" />
              <Twitter size={30} className="text-blue-400" />
              <Mail size={30} className="text-gray-600" />
            </div>
          </div>
          <div className="w-full md:w-1/2 h-80 overflow-hidden rounded-lg shadow-lg">
            <img
              src="/location.jpg"
              alt="Restaurant"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div
          className="w-[90%] bg-gray-100 shadow-lg 
        rounded-lg p-8 mt-8"
        >
          <h3 className="text-3xl font-semibold mb-6">Send Us a Message</h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg border border-gray-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg border border-gray-300"
            />
            <textarea
              placeholder="Your Message"
              className="p-3 rounded-lg border border-gray-300 h-32"
            ></textarea>
            <button
              type="submit"
              className="px-8 py-4 text-lg font-semibold bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        <GetLocation />
      </div>
    </section>
  );
};

export default ContactPage;
