import { collection, getDocs, query, where } from 'firebase/firestore';
import { NextApiRequest, NextApiResponse } from 'next';

import { db } from '../../firebase';
import dhl from '@/utils/dhl';
import fedex from '@/utils/fedex';
import skynet from '@/utils/skynet';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dbInstance = collection(db, 'shipments');
  const { body } = req;
  const reqBody = JSON.parse(body);

  const q = query(dbInstance, where('trackingId', '==', reqBody.id));
  const querySnapshot = await getDocs(q);
  let dataFromFirebase: any = undefined;

  querySnapshot.forEach((doc) => {
    dataFromFirebase = doc.data();
  });
  const { service, awbId } = dataFromFirebase;
  let dataFromTrackingService = undefined;
  try {
    switch (service) {
      case 'DHL': {
        const res = await dhl(awbId);
        dataFromTrackingService = res.shipments;
        break;
      }
      case 'Skynet': {
        const res = await skynet(awbId);
        dataFromTrackingService = res.Data;
        break;
      }
      case 'Fedex': {
        const res = await fedex(awbId);
        dataFromTrackingService = res.output.completeTrackResults;
        break;
      }
      default:
        break;
    }

    const finalData = {
      ...dataFromFirebase,
      trackingInfo: dataFromTrackingService,
    };

    res.status(200).json({ shipmentData: finalData });
  } catch (error) {
    res.status(500).json({ shipmentData: 'Something went wrong' });
  }
}
