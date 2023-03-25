import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const AWB = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col px-8 my-24 items-center">
        <h1 className="sm:text-4xl text-2xl font-semibold mb-8">
          AWB Number Tracker
        </h1>
        <input
          type="text"
          className="rounded-md px-4 py-1 text-lg border-2 focus:outline-none shadow-md focus:border-orange-500 transition-colors mb-4 sm:w-1/4 w-full"
          placeholder="Enter AWB Number"
        />
        <select className="rounded-md px-4 py-1 text-lg border-2 focus:outline-none shadow-md focus:border-orange-500 transition-colors mb-4 sm:w-1/4 w-full">
          <option value="DHL">DHL</option>
          <option value="Skynet">Skynet</option>
          <option value="Fedex">Fedex</option>
        </select>
        <button className="bg-yellow-300 rounded-md py-2 px-4 hover:bg-orange-500 transition-colors hover:text-white">
          Track Now
        </button>
      </div>

      <Footer />
    </>
  );
};

export default AWB;
