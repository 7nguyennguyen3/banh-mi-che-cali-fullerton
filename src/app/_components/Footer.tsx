const Footer = () => {
  return (
    <section className="w-full flex justify-between items-center bg-zinc-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
        <div
          className="flex flex-col sm:flex gap-2 w-full sm:w-2/3 text-white  
        text-opacity-80 p-5"
        >
          <img
            src="/logo.png"
            alt="Banh Mi Che Cali"
            className="h-40 w-60 flex sm:hidden"
          />
          <div>
            <h4 className="font-semibold text-lg">Hours</h4>
            <p>Monday - Friday: 10am - 9pm</p>
            <p>Saturday - Sunday: 10am - 10pm</p>
          </div>
          <div className="my-5">
            <h4 className="font-semibold text-lg">Location</h4>
            <p>1000 S Harbor Blvd</p>
            <p>Fullerton, CA 92843</p>
            <p>Phone: (714) 555-1234</p>
          </div>
        </div>
        <img
          src="/logo.png"
          alt="Banh Mi Che Cali"
          className="h-40 w-auto hidden sm:flex"
        />
      </div>
    </section>
  );
};

export default Footer;
