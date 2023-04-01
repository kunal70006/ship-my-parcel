import { collection, getDocs, query, where } from 'firebase/firestore';
import { NextApiRequest, NextApiResponse } from 'next';

import { db } from '../../firebase';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dbInstance = collection(db, 'shipments');
  const { body } = req;
  const reqBody = JSON.parse(body);

  const q = query(dbInstance, where('trackingId', '==', reqBody.id));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    res.status(200).json({ shipmentData: doc.data() });
  });
}
