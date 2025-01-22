const GetLocation = () => {
  return (
    <div
      className="w-[90%] bg-white shadow-lg rounded-lg p-8 mt-8 flex
    flex-col items-center"
    >
      <h3 className="text-3xl font-semibold mb-6">Find Us on the Map</h3>
      <div className="w-full h-80 overflow-hidden rounded-lg shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.920057509048!2d-117.924212684692!3d33.87036598065914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd77b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2s1000%20S%20Harbor%20Blvd%2C%20Fullerton%2C%20CA%2092843!5e0!3m2!1sen!2sus!4v1633024800000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          loading="lazy"
          className="border-0"
        ></iframe>
      </div>
    </div>
  );
};

export default GetLocation;
