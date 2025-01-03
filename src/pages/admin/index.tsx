import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { IService, IShipment } from '@/utils/types';
import Layout from '@/components/Layout';

const AWB = () => {
  const [info, setInfo] = useState<IShipment>({
    id: '',
    service: 'DHL',
    name: '',
    address: '',
    actualWeight: '',
    volWeight: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [ID, setID] = useState('');
  const [trackingURL, setTrackingURL] = useState('');

  const handleGenerate = async () => {
    const trackingId = `SZY${uuid().substring(0, 8)}`;
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
            actualWeight: info.actualWeight.trim(),
            volWeight: info.volWeight.trim(),
            isPaid: true,
          },
        }),
      });
      if (res.status === 200) {
        const data = await res.json();
        setID(data.smpID);
        setTrackingURL(`https://shipezy.co.in/szy-tracking/${data.smpID}`);
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    } finally {
      setIsLoading(false);
      setInfo({
        id: '',
        service: 'DHL',
        name: '',
        address: '',
        actualWeight: '',
        volWeight: '',
      });
    }
  };

  return (
    <Layout>
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
        <input
          type="text"
          className="rounded-md px-4 py-1 text-lg border-2 focus:outline-none shadow-md focus:border-orange-500 transition-colors mb-4 sm:w-1/4 w-full"
          placeholder="Enter Actual Weight"
          value={info.actualWeight}
          onChange={(e) =>
            setInfo((state) => ({ ...state, actualWeight: e.target.value }))
          }
        />
        <input
          type="text"
          className="rounded-md px-4 py-1 text-lg border-2 focus:outline-none shadow-md focus:border-orange-500 transition-colors mb-4 sm:w-1/4 w-full"
          placeholder="Enter Volumetric Weight"
          value={info.volWeight}
          onChange={(e) =>
            setInfo((state) => ({ ...state, volWeight: e.target.value }))
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
          <option value="Fedex">Fedex</option>
          <option value="SkynetNew">Skynet New</option>
          <option value="atlantic">Atlantic</option>
        </select>
        <button
          onClick={handleGenerate}
          className="bg-blue-700 rounded-md py-2 px-4 hover:bg-orange-500 transition-colors hover:text-white disabled:bg-slate-300 disabled:cursor-not-allowed disabled:text-black"
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
        {trackingURL && (
          <>
            <h2 className="text-lg mt-4">Tracking URL: {trackingURL}</h2>
            <button
              onClick={() => navigator.clipboard.writeText(trackingURL)}
              className="bg-blue-700 rounded-md py-2 px-4 hover:bg-orange-500 transition-colors hover:text-white disabled:bg-slate-300 disabled:cursor-not-allowed disabled:text-black mt-4"
            >
              Copy URL
            </button>
          </>
        )}
      </div>
      <Footer />
    </Layout>
  );
};

export default AWB;
