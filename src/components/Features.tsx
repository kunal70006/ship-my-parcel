import Image from 'next/image';
import { useRouter } from 'next/router';

const Features = () => {
  const router = useRouter();
  return (
    <div
      className={`flex flex-col min-h-screen ${
        router.pathname === '/' ? 'bg-blue-700 text-white' : 'bg-white'
      } py-24`}
    >
      <h1 className="text-4xl mb-8 font-semibold text-center">Features</h1>
      <div
        className="sm:mx-8 sm:grid sm:place-content-center sm:gap-16 flex flex-col gap-4 items-center text-center px-8 sm:text-left sm:items-start sm:px-0"
        style={{ gridTemplateColumns: 'auto auto' }}
      >
        <div className="flex flex-col items-center">
          <div className="relative sm:h-[400px] sm:w-[400px] w-[200px] h-[200px]">
            <Image src="/calendar.svg" alt="calendar svg features" fill />
          </div>
          <h2 className="text-2xl font-semibold mb-4">
            No Monthly Fees. No Minimum Order Commitment
          </h2>
          <p className="text-center">
            Want to ship a single order? We&apos;re here! We only believe in
            long term relationships, monthly commitments is not our thing. Pay
            for what you ship. You scale, we scale with you.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative sm:h-[400px] sm:w-[400px] w-[200px] h-[200px]">
            <Image src="/shipping.svg" alt="shipping svg features" fill />
          </div>
          <h2 className="text-2xl font-semibold mb-4">
            Lowest Shipping Rate. Reliable Transit Times
          </h2>
          <p className="text-center">
            We understand how important it is for you to ship at a competitive
            rates, without compromising on the speedy delivery. You grow your
            business, we will take care of the logistics.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative sm:h-[400px] sm:w-[400px] w-[200px] h-[200px]">
            <Image src="/clock.svg" alt="clock svg features" fill />
          </div>
          <h2 className="text-2xl font-semibold mb-4">
            24 Hour Onboarding Promise
          </h2>
          <p className="text-center">
            We don&apos;t want your customers to wait. Quick and easy
            onboarding, submit your KYC documents and start shipping now. We
            believe every company deserves to feel the excitement of going
            global, regardless of size.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative sm:h-[400px] sm:w-[400px] w-[200px] h-[200px]">
            <Image src="/track.svg" alt="track svg features" fill />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Real Time Tracking</h2>
          <p className="text-center">
            The ability to get real-time updates about your shipment is
            essential for any business. We offer complete visibility of your
            parcel&apos;s journey from pickup location to its destination. Track
            your shipment status anytime, anywhere.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative sm:h-[400px] sm:w-[400px] w-[200px] h-[200px]">
            <Image src="/warehouse.svg" alt="warehouse svg features" fill />
          </div>
          <h2 className="text-2xl font-semibold mb-4">
            Simplified eCommerce fulfillment, Warehousing, and Logistics
            Solutions
          </h2>
          <p className="text-center">
            Store inventory closer to your customers across India and give a
            premium e-commerce shipping experience with same-day/next-day
            delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
