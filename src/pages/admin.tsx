import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { IService, IShipment } from '@/utils/types';

const AWB = () => {
  const [info, setInfo] = useState<IShipment>({
    id: '',
    service: 'DHL',
    name: '',
    address: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [ID, setID] = useState('');

  const handleGenerate = async () => {
    const trackingId = `SMP${uuid().substring(0, 8)}`;
    try {
      setIsLoading(true);
      const res = await fetch('/api/generate-tracking-id', {
        method: 'POST',
        body: JSON.stringify({
          shipment: {
            trackingId: trackingId,
            service: info.service,
            awbId: info.id.trim(),
            name: info.name.trim(),
            address: info.address.trim(),
          },
        }),
      });
      if (res.status === 200) {
        const data = await res.json();
        setID(data.smpID);
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    } finally {
      setIsLoading(false);
      setInfo({ id: '', service: 'DHL', name: '', address: '' });
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col px-8 my-24 items-center">
        <h1 className="sm:text-4xl text-2xl font-semibold mb-8">
          Generate Tracking ID
        </h1>
        <input
          type="text"
          className="rounded-md px-4 py-1 text-lg border-2 focus:outline-none shadow-md focus:border-orange-500 transition-colors mb-4 sm:w-1/4 w-full"
          placeholder="Enter AWB Number"
          value={info.id}
          onChange={(e) =>
            setInfo((state) => ({ ...state, id: e.target.value }))
          }
        />
        <input
          type="text"
          className="rounded-md px-4 py-1 text-lg border-2 focus:outline-none shadow-md focus:border-orange-500 transition-colors mb-4 sm:w-1/4 w-full"
          placeholder="Enter Consignee name"
          value={info.name}
          onChange={(e) =>
            setInfo((state) => ({ ...state, name: e.target.value }))
          }
        />
        <input
          type="text"
          className="rounded-md px-4 py-1 text-lg border-2 focus:outline-none shadow-md focus:border-orange-500 transition-colors mb-4 sm:w-1/4 w-full"
          placeholder="Enter Consignee address"
          value={info.address}
          onChange={(e) =>
            setInfo((state) => ({ ...state, address: e.target.value }))
          }
        />
        <select
          className="rounded-md px-4 py-1 text-lg border-2 focus:outline-none shadow-md focus:border-orange-500 transition-colors mb-4 sm:w-1/4 w-full"
          onChange={(e) =>
            setInfo((state) => ({
              ...state,
              service: e.target.value as IService,
            }))
          }
          value={info.service}
        >
          <option value="DHL">DHL</option>
          <option value="Skynet">Skynet</option>
          {/* <option value="Fedex">Fedex</option> */}
        </select>
        <button
          onClick={handleGenerate}
          className="bg-yellow-300 rounded-md py-2 px-4 hover:bg-orange-500 transition-colors hover:text-white disabled:bg-slate-300 disabled:cursor-not-allowed disabled:text-black"
          disabled={
            isLoading ||
            info.id.length === 0 ||
            info.address.length === 0 ||
            info.name.length === 0
          }
        >
          Generate
        </button>
        {ID && <h2 className="text-lg mt-4">Tracking ID: {ID}</h2>}
      </div>

      <Footer />
    </>
  );
};

export default AWB;
