import Image from 'next/image';

const HowItWorksAndPartners = () => {
  return (
    <div className="flex flex-col min-h-screen py-24 mx-8">
      <h1 className="text-4xl mb-8 font-semibold text-center">How it works?</h1>
      <div className="flex flex-col sm:flex-row gap-8">
        <div className="flex flex-col sm:w-1/4 p-4 border rounded-lg shadow-lg">
          <div className="h-[300px] relative w-full">
            <Image src="/onboard.svg" fill alt="onboard" />
          </div>
          <h2 className="text-2xl mb-2 text-center">Onboarding</h2>
          <p className="">
            Quick & easy onboarding process to get your account live
          </p>
        </div>
        <div className="flex flex-col sm:w-1/4 p-4 border rounded-lg shadow-lg">
          <div className="h-[300px] relative w-full">
            <Image src="/ship.svg" fill alt="shipment" />
          </div>
          <h2 className="text-2xl mb-2 text-center">Create a shipment</h2>
          <p className="">Simply add the shipment details</p>
        </div>
        <div className="flex flex-col sm:w-1/4 p-4 border rounded-lg shadow-lg">
          <div className="h-[300px] relative w-full">
            <Image src="/pack.svg" fill alt="pack" />
          </div>
          <h2 className="text-2xl mb-2 text-center">Pack & Ship</h2>
          <p className="">
            Pack your orders and hand it over to the pickup partner
          </p>
        </div>
        <div className="flex flex-col sm:w-1/4 p-4 border rounded-lg shadow-lg">
          <div className="h-[300px] relative w-full">
            <Image src="/location.svg" fill alt="location" />
          </div>
          <h2 className="text-2xl mb-2 text-center">Track</h2>
          <p className="">
            Keep your customers updated with end-to-end tracking
          </p>
        </div>
      </div>
      <h1 className="text-4xl mt-24 mb-8 font-semibold text-center">
        Our Partners
      </h1>
      <div className="overflow-x-hidden">
        <div className="py-12 sm:animate-marquee-infinite animate-marquee-infinite-phone whitespace-nowrap flex">
          <div className="relative sm:sm:h-[150px] h-[100px] sm:w-[250px] w-[200px] sm:mx-16 mx-8 aspect-video">
            <Image src="/partners/amazon.png" alt="partner logo" fill />
          </div>
          <div className="relative sm:sm:h-[150px] h-[100px] sm:w-[250px] w-[200px] sm:mx-16 mx-8 aspect-video">
            <Image src="/partners/aramex.png" alt="partner logo" fill />
          </div>
          <div className="relative sm:sm:h-[150px] h-[100px] sm:w-[250px] w-[200px] sm:mx-16 mx-8 aspect-video">
            <Image src="/partners/dhl.png" alt="partner logo" fill />
          </div>
          <div className="relative sm:sm:h-[150px] h-[100px] sm:w-[250px] w-[200px] sm:mx-16 mx-8 aspect-video">
            <Image src="/partners/dpd.png" alt="partner logo" fill />
          </div>
          <div className="relative sm:sm:h-[150px] h-[100px] sm:w-[250px] w-[200px] sm:mx-16 mx-8 aspect-video">
            <Image src="/partners/dtdc.webp" alt="partner logo" fill />
          </div>
          <div className="relative sm:sm:h-[150px] h-[100px] sm:w-[250px] w-[200px] sm:mx-16 mx-8 aspect-video">
            <Image src="/partners/ebay.png" alt="partner logo" fill />
          </div>
          <div className="relative sm:sm:h-[150px] h-[100px] sm:w-[250px] w-[200px] sm:mx-16 mx-8 aspect-video">
            <Image src="/partners/etsy.png" alt="partner logo" fill />
          </div>
          <div className="relative sm:sm:h-[150px] h-[100px] sm:w-[250px] w-[200px] sm:mx-16 mx-8 aspect-video">
            <Image src="/partners/fedex.png" alt="partner logo" fill />
          </div>
          <div className="relative sm:sm:h-[150px] h-[100px] sm:w-[250px] w-[200px] sm:mx-16 mx-8 aspect-square">
            <Image src="/partners/ups.png" alt="partner logo" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksAndPartners;
