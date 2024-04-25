import moment from 'moment';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import {
  IShipmentDataDHL,
  IShipmentDataFedex,
  IShipmentDataSkynet,
} from '@/utils/types';
import { Loader } from '@/utils/useLoader';
import Layout from '@/components/Layout';
import PopupImage from '@/components/Popup';

const SMP = () => {
  const router = useRouter();
  const id = router.query.id;

  const [shipmentData, setShipmentData] = useState<
    IShipmentDataDHL[] | IShipmentDataSkynet[] | IShipmentDataFedex[]
  >();

  const [userDetails, setUserDetails] = useState({
    name: '',
    address: '',
    actualWeight: '',
    volWeight: '',
    trackingId: '',
    isPaid: false,
  });

  useEffect(() => {
    const getShipmentData = async () => {
      try {
        const res = await fetch('/api/get-shipment-data', {
          method: 'POST',
          body: JSON.stringify({
            id: id,
          }),
        });
        if (res.status === 200) {
          const data = await res.json();
          const detailsObj = {
            name: data.shipmentData?.name,
            address: data.shipmentData?.address,
            actualWeight: data.shipmentData?.actualWeight,
            volWeight: data.shipmentData?.volWeight,
            trackingId: data.shipmentData?.trackingId,
            isPaid: data.shipmentData?.isPaid,
          };
          setUserDetails(detailsObj);
          if (data.shipmentData.service === 'Skynet') {
            setShipmentData(
              data.shipmentData.trackingInfo as IShipmentDataSkynet[]
            );
          } else if (data.shipmentData.service === 'SkynetNew') {
            const { trackingInfo } = data.shipmentData;
            const shipmentDataArr: IShipmentDataSkynet[] = [];
            (trackingInfo as any[])?.forEach((data) => {
              shipmentDataArr.push({
                Status: data?.ShipmentStatus ?? '',
                Remarks: data?.ShipmentDetails ?? '',
                ShipDate: data?.Date,
              });
            });
            setShipmentData(shipmentDataArr);
          } else if (data.shipmentData.service === 'DHL') {
            setShipmentData(
              data.shipmentData.trackingInfo[0].events as IShipmentDataDHL[]
            );
          } else if (data.shipmentData.service === 'Fedex') {
            setShipmentData(
              data.shipmentData.trackingInfo[0].trackResults[0].scanEvents
            );
          }
        }
      } catch (err) {
        console.error(err);
        alert('Something went wrong');
      }
    };

    if (id) {
      getShipmentData();
    }
  }, [id]);

  return (
    <Layout>
      {/* <PopupImage /> */}
      <Navbar />
      <div className="flex flex-col px-8 mt-24 items-center mb-36">
        {shipmentData ? (
          <>
            {userDetails && (
              <div className="block text-center items-center">
                <h1 className="mt-8 font-semibold text-xl">
                  Consignee Name: {userDetails.name}
                </h1>
                <h1 className="font-semibold text-xl break-words">
                  Consignee Address: {userDetails.address}
                </h1>
                {/* <h1 className="font-semibold text-xl">
                  Actual Weight: {userDetails.actualWeight}
                </h1>
                <h1 className="font-semibold text-xl">
                  Volumetric Weight: {userDetails.volWeight}
                </h1> */}
                <h1 className="font-semibold text-xl">
                  Tracking ID: {userDetails.trackingId}
                </h1>
              </div>
            )}
            {userDetails.isPaid ? (
              <table className="table-auto w-full border-spacing-6 mt-16 border-2 shadow-lg rounded-md">
                <thead>
                  <tr>
                    <th className="py-4 border">Date</th>
                    <th className="py-4 border">Status</th>
                    <th className="py-4 border">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {shipmentData?.map((item, idx) => {
                    if (Object.hasOwn(item, 'ShipDate')) {
                      return (
                        <tr key={idx} className=" border ">
                          <td className="w-1/3 py-4 border text-center">
                            {'ShipDate' in item && item.ShipDate}
                          </td>
                          <td className="w-1/3 py-4 border text-center">
                            {'Status' in item && item.Status}
                          </td>
                          <td className="w-1/3 py-4 border text-center">
                            {'Remarks' in item && item.Remarks}
                          </td>
                        </tr>
                      );
                    }
                    if (Object.hasOwn(item, 'timestamp')) {
                      return (
                        <tr key={idx} className=" border ">
                          <td className="w-1/3 py-4 border text-center">
                            {'timestamp' in item &&
                              moment(item.timestamp).format(
                                'dddd, MMMM Do YYYY, h:mm a'
                              )}
                          </td>
                          <td className="w-1/3 py-4 border text-center">
                            {'location' in item &&
                              item.location.address.addressLocality}
                          </td>
                          <td className="w-1/3 py-4 border text-center">
                            {'description' in item && item.description}
                          </td>
                        </tr>
                      );
                    }
                    if (Object.hasOwn(item, 'scanLocation')) {
                      return (
                        <tr key={idx} className=" border ">
                          <td className="w-1/3 py-4 border text-center">
                            {'date' in item &&
                              moment(item.date).format(
                                'dddd, MMMM Do YYYY, h:mm a'
                              )}
                          </td>
                          <td className="w-1/3 py-4 border text-center">
                            {'derivedStatus' in item && item.derivedStatus} -{' '}
                            {'scanLocation' in item && item.scanLocation.city}
                          </td>
                          <td className="w-1/3 py-4 border text-center">
                            {'exceptionDescription' in item &&
                              item.exceptionDescription}
                          </td>
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table>
            ) : (
              <div className="mt-16 text-2xl font-bold text-center">
                Shipment has been halted until all shipment fees are settled.
              </div>
            )}
          </>
        ) : (
          <div className="flex h-full items-center justify-center">
            <Loader />
          </div>
        )}
      </div>
      <Footer />
    </Layout>
  );
};

export default SMP;
