import { collection, getDocs } from 'firebase/firestore';
import { NextApiRequest, NextApiResponse } from 'next';

import { db } from '../../firebase';

import { AllShipment, IBaseShipment } from '@/utils/types';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const dbInstance = collection(db, 'shipments');
  const querySnapshot = await getDocs(dbInstance);
  const shipmentData: AllShipment[] = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data() as IBaseShipment;
    shipmentData.push({ shipment: data, docId: doc.id });
  });
  res.status(200).json({ shipmentData });
}
