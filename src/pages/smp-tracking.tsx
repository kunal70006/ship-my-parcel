import { useRouter } from 'next/router';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const SMP = () => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className="flex flex-col px-8 mt-24 items-center mb-36">
        <h1 className="sm:text-4xl text-2xl font-semibold mb-8">
          Shipment Tracker
        </h1>
        <input
          type="text"
          className="rounded-md px-4 py-1 text-lg border-2 focus:outline-none shadow-md focus:border-orange-500 transition-colors mb-4 sm:w-1/3 w-full"
          placeholder="Enter Tracking Number"
        />
        <div className="flex sm:w-1/3 flex-col sm:flex-row gap-8 sm:gap-0 justify-between">
          <button className="bg-yellow-300 rounded-md py-2 px-4 hover:bg-orange-500 transition-colors hover:text-white">
            Track Now
          </button>
          <button
            onClick={() => router.push('/multi-tracking')}
            className="bg-yellow-300 rounded-md py-2 px-4 hover:bg-orange-500 transition-colors hover:text-white"
          >
            Multi Track
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SMP;
