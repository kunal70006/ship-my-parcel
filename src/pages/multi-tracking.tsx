import { useRouter } from 'next/router';
import { useState } from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { IShipmentDataDHL, IShipmentDataSkynet } from '@/utils/types';

const MultiTracking = () => {
  const router = useRouter();
  const [ids, setIds] = useState('');
  const [skynetShipmentData, setSkynetShipmentData] =
    useState<IShipmentDataSkynet[]>();
  const [dhlShipmentData, setDhlShipmentData] = useState<IShipmentDataDHL[]>();
  const [isLoading, setIsLoading] = useState(false);

  const getShipmentData = async () => {
    try {
      setIsLoading(true);
      const finalIds = ids.split(',');
      const resJSON = await Promise.all(
        finalIds.map((id) => {
          return fetch('/api/get-shipment-data', {
            method: 'POST',
            body: JSON.stringify({
              id: id,
            }),
          });
        })
      );
      const data = await Promise.all(resJSON.map((r) => r.json()));
      const dhlArr: IShipmentDataDHL[] = [];
      const skynetArr: IShipmentDataSkynet[] = [];

      data.map((item) => {
        if (item.shipmentData.service === 'Skynet') {
          skynetArr.push(item.shipmentData.trackingInfo);
        } else if (item.shipmentData.service === 'DHL') {
          dhlArr.push(item.shipmentData.trackingInfo[0].events);
        }
      });

      setTimeout(() => {
        setDhlShipmentData(dhlArr);
        setSkynetShipmentData(skynetArr);
      }, 10);
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    } finally {
      setIsLoading(false);
      setIds('');
    }
  };
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
          value={ids}
          onChange={(e) => setIds(e.target.value)}
        />

        <div className="flex sm:w-1/3 flex-col sm:flex-row gap-8 sm:gap-0 justify-between">
          <button
            className="bg-yellow-300 rounded-md py-2 px-4 hover:bg-orange-500 transition-colors hover:text-white disabled:bg-slate-300 disabled:cursor-not-allowed disabled:text-black"
            disabled={ids.length === 0 || isLoading}
            onClick={getShipmentData}
          >
            Track Now
          </button>
          <button
            onClick={() => router.push('/smp-tracking')}
            className="bg-yellow-300 rounded-md py-2 px-4 hover:bg-orange-500 transition-colors hover:text-white"
          >
            Single Track
          </button>
        </div>
        {skynetShipmentData && (
          <table className="table-auto w-full border-spacing-6 mt-16 border-2 shadow-lg rounded-md">
            <thead>
              <tr>
                <th className="py-4 border">Date</th>
                <th className="py-4 border">Status</th>
                <th className="py-4 border">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {skynetShipmentData?.map((item, idx) => {
                if (Object.hasOwn(item, 'ShipDate')) {
                  return (
                    <tr key={idx} className=" border ">
                      <td className="w-1/3 py-4 border text-center">
                        {item.ShipDate}
                      </td>
                      <td className="w-1/3 py-4 border text-center">
                        {item.Status}
                      </td>
                      <td className="w-1/3 py-4 border text-center">
                        {item.Remarks}
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        )}
        {dhlShipmentData && (
          <table className="table-auto w-full border-spacing-6 mt-16 border-2 shadow-lg rounded-md">
            <thead>
              <tr>
                <th className="py-4 border">Date</th>
                <th className="py-4 border">Status</th>
                <th className="py-4 border">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {dhlShipmentData?.map((item, idx) => {
                if (Object.hasOwn(item, 'timestamp')) {
                  return (
                    <tr key={idx} className=" border ">
                      <td className="w-1/3 py-4 border text-center">
                        {item.timestamp.split('T')[0]}
                      </td>
                      <td className="w-1/3 py-4 border text-center">
                        {item.location.address.addressLocality}
                      </td>
                      <td className="w-1/3 py-4 border text-center">
                        {item.description}
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MultiTracking;
