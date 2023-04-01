import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { NextApiRequest, NextApiResponse } from 'next';

import dhl from '@/utils/dhl';
import fedex from '@/utils/fedex';
import skynet from '@/utils/skynet';
import { IReqBody } from '@/utils/types';

import { db } from '../../firebase';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dbInstance = collection(db, 'shipments');
  const { body } = req;
  const reqBody: IReqBody = JSON.parse(body);
  let data = undefined;
  const q = query(dbInstance, where('awbId', '==', reqBody.shipment.awbId));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    res.status(200).json({ smpID: doc.data().trackingId });
  });
  try {
    switch (reqBody.shipment.service) {
      case 'DHL': {
        const res = await dhl(reqBody.shipment.awbId);
        data = res.shipments;
        break;
      }
      case 'Skynet': {
        const res = await skynet(reqBody.shipment.awbId);
        data = res.Data;
        break;
      }
      case 'Fedex': {
        const res = await fedex(reqBody.shipment.awbId);
        console.log(res);
        break;
      }
      default:
        break;
    }
    const finalData = {
      ...reqBody.shipment,
      trackingInfo: data,
    };
    await setDoc(doc(dbInstance), finalData);
    res.status(200).json({ smpID: reqBody.shipment.trackingId });
  } catch (err) {
    res.status(400).json({ error: 'Something went wrong' });
  }
}
