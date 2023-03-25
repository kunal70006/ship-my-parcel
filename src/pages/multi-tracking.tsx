import { useRouter } from 'next/router';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const MultiTracking = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <div className="flex flex-col px-8 my-24 items-center">
        <h1 className="sm:text-4xl text-2xl font-semibold mb-8">
          Multiple Shipment Tracker
        </h1>
        <input
          type="text"
          className="rounded-md px-4 py-1 text-lg border-2 focus:outline-none shadow-md focus:border-orange-500 transition-colors mb-4 sm:w-1/3 w-full"
          placeholder="Enter Tracking Numbers separated by a ,"
        />

        <div className="flex sm:w-1/3 flex-col sm:flex-row gap-8 sm:gap-0 justify-between">
          <button className="bg-yellow-300 rounded-md py-2 px-4 hover:bg-orange-500 transition-colors hover:text-white">
            Track Now
          </button>
          <button
            onClick={() => router.push('/smp-tracking')}
            className="bg-yellow-300 rounded-md py-2 px-4 hover:bg-orange-500 transition-colors hover:text-white"
          >
            Single Track
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MultiTracking;
