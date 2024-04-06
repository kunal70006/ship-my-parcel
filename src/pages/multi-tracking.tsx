import moment from 'moment';
import { useRouter } from 'next/router';
import { useState } from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import {
  IMultiTrackingDHL,
  IMultiTrackingFedex,
  IMultiTrackingSkynet,
  IService,
} from '@/utils/types';
import Layout from '@/components/Layout';

const MultiTracking = () => {
  const router = useRouter();
  const [ids, setIds] = useState('');
  const [skynetShipmentData, setSkynetShipmentData] = useState<
    IMultiTrackingSkynet[]
  >([]);
  const [dhlShipmentData, setDhlShipmentData] = useState<IMultiTrackingDHL[]>(
    []
  );
  const [fedexShipmentData, setFedexShipmentData] = useState<
    IMultiTrackingFedex[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  const getShipmentData = async () => {
    try {
      setIsLoading(true);
      const finalIds = ids.trim().split(',');
      const res = await fetch('/api/get-multiple-shipment-data', {
        method: 'POST',
        body: JSON.stringify({
          ids: finalIds,
        }),
      });
      const data = await res.json();

      const dhlArr: IMultiTrackingDHL[] = [];
      const skynetArr: IMultiTrackingSkynet[] = [];
      const fedexArr: IMultiTrackingFedex[] = [];

      data.shipmentData.userData.map((item: any) => {
        const { service } = item;
        const userDetails = {
          name: item.name,
          address: item.address,
          actualWeight: item.actualWeight,
          volWeight: item.volWeight,
        };
        switch (service as IService) {
          case 'Skynet':
            data.shipmentData.trackingData.forEach((trackingItem: any) => {
              if ('Data' in trackingItem) {
                skynetArr.push({
                  trackingInfo: trackingItem.Data,
                  userDetails: userDetails,
                });
              }
            });
            break;
          case 'DHL':
            data.shipmentData.trackingData.forEach((trackingItem: any) => {
              if ('shipments' in trackingItem) {
                dhlArr.push({
                  trackingInfo: trackingItem.shipments[0].events,
                  userDetails: userDetails,
                });
              }
            });
            break;

          case 'Fedex':
            data.shipmentData.trackingData.forEach((trackingItem: any) => {
              if ('output' in trackingItem) {
                fedexArr.push({
                  trackingInfo:
                    trackingItem.output.completeTrackResults[0].trackResults[0]
                      .scanEvents,
                  userDetails: userDetails,
                });
              }
            });
            break;
          default:
            break;
        }
      });

      if (dhlArr.length > 0) setDhlShipmentData(dhlArr);
      if (skynetArr.length > 0) setSkynetShipmentData(skynetArr);
      if (fedexArr.length > 0) setFedexShipmentData(fedexArr);
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
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
          {skynetShipmentData &&
            skynetShipmentData?.map((shipment, idx) => (
              <>
                {shipment.userDetails && (
                  <div className="block text-center items-center">
                    <h1 className="mt-8 font-semibold text-xl">
                      Consignee Name: {shipment.userDetails.name}
                    </h1>
                    <h1 className="font-semibold text-xl break-words">
                      Consignee Address: {shipment.userDetails.address}
                    </h1>
                    {/* <h1 className="font-semibold text-xl">
                      Actual Weight: {shipment.userDetails.actualWeight}
                    </h1>
                    <h1 className="font-semibold text-xl">
                      Volumetric Weight: {shipment.userDetails.volWeight}
                    </h1> */}
                  </div>
                )}
                <table
                  key={idx}
                  className="table-auto  w-full border-spacing-6 mt-16 border-2 shadow-lg rounded-md"
                >
                  <thead>
                    <tr>
                      <th className="py-4 border">Date</th>
                      <th className="py-4 border">Status</th>
                      <th className="py-4 border">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shipment.trackingInfo.map((item, idx) => (
                      <tr key={idx} className=" border ">
                        <td className="w-1/3 py-4 border text-center">
                          {moment(item.ShipDate, 'DD/MM/YYYY').format(
                            'MMMM DD, YYYY'
                          )}
                        </td>
                        <td className="w-1/3 py-4 border text-center text-black">
                          {item.Status}
                        </td>
                        <td className="w-1/3 py-4 border text-center">
                          {item.Remarks}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            ))}
          {dhlShipmentData &&
            dhlShipmentData?.map((shipment, idx) => (
              <>
                {shipment.userDetails && (
                  <div className="block text-center items-center">
                    <h1 className="mt-8 font-semibold text-xl">
                      Consignee Name: {shipment.userDetails.name}
                    </h1>
                    <h1 className="font-semibold text-xl break-words">
                      Consignee Address: {shipment.userDetails.address}
                    </h1>
                    {/* <h1 className="font-semibold text-xl">
                      Actual Weight: {shipment.userDetails.actualWeight}
                    </h1>
                    <h1 className="font-semibold text-xl">
                      Volumetric Weight: {shipment.userDetails.volWeight}
                    </h1> */}
                  </div>
                )}
                <table
                  className="table-auto w-full border-spacing-6 mt-16 border-2 shadow-lg rounded-md"
                  key={idx}
                >
                  <thead>
                    <tr>
                      <th className="py-4 border">Date</th>
                      <th className="py-4 border">Status</th>
                      <th className="py-4 border">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shipment.trackingInfo.map((item, i) => (
                      <tr key={i} className=" border ">
                        <td className="w-1/3 py-4 border text-center">
                          {moment(item.timestamp).format(
                            'dddd, MMMM Do YYYY, h:mm a'
                          )}
                        </td>
                        <td className="w-1/3 py-4 border text-center">
                          {item.location?.address?.addressLocality}
                        </td>
                        <td className="w-1/3 py-4 border text-center">
                          {item.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            ))}
          {fedexShipmentData &&
            fedexShipmentData?.map((shipment, idx) => (
              <>
                {shipment.userDetails && (
                  <div className="block text-center items-center">
                    <h1 className="mt-8 font-semibold text-xl">
                      Consignee Name: {shipment.userDetails.name}
                    </h1>
                    <h1 className="font-semibold text-xl break-words">
                      Consignee Address: {shipment.userDetails.address}
                    </h1>
                    {/* <h1 className="font-semibold text-xl">
                      Actual Weight: {shipment.userDetails.actualWeight}
                    </h1>
                    <h1 className="font-semibold text-xl">
                      Volumetric Weight: {shipment.userDetails.volWeight}
                    </h1> */}
                  </div>
                )}
                <table
                  className="table-auto w-full border-spacing-6 mt-16 border-2 shadow-lg rounded-md"
                  key={idx}
                >
                  <thead>
                    <tr>
                      <th className="py-4 border">Date</th>
                      <th className="py-4 border">Status</th>
                      <th className="py-4 border">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shipment.trackingInfo.map((item, i) => (
                      <tr key={i} className=" border ">
                        <td className="w-1/3 py-4 border text-center">
                          {moment(item.date).format(
                            'dddd, MMMM Do YYYY, h:mm a'
                          )}
                        </td>
                        <td className="w-1/3 py-4 border text-center">
                          {item.derivedStatus} - {item.scanLocation.city}
                        </td>
                        <td className="w-1/3 py-4 border text-center">
                          {item.exceptionDescription}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            ))}
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default MultiTracking;
