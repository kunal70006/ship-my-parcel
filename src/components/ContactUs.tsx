import Image from 'next/image';

const ContactUs = () => {
  return (
    <div className="pl-10 pr-10 pb-10 lg:pl-24 lg:pr-24 lg:pb-24">
      <h1 className="text-center mt-10 text-4xl font-semibold">Contact Us</h1>
      <div className="flex flex-row mt-10 lg:gap-10 shadow-lg p-10">
        <div className="hidden lg:block basis-1/2">
          <div className="w-[400px] h-[400px] relative">
            <Image
              src="/contact.svg"
              alt="contact us"
              fill
              className=" object-contain"
            />
          </div>
        </div>
        <div className="lg:basis-1/2">
          <input
            className="w-full rounded-md border-[0.5px] shadow-md p-2 mb-2 lg:mb-10"
            placeholder="Enter Name"
          />
          <input
            className="w-full rounded-md border-[0.5px] shadow-md p-2 mb-2 lg:mb-10"
            placeholder="Enter Email"
          />
          <textarea
            className="w-full rounded-md border-[0.5px] shadow-md p-2 mb-2 lg:mb-10 h-[100px]"
            placeholder="Your Query"
          />
          <button className="shadow-md w-full text-center p-2 rounded-md bg-yellow-300 text-black hover:bg-white hover:text-[#1D4695]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
