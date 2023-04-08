import {
  collection,
  DocumentData,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { NextApiRequest, NextApiResponse } from 'next';

import { db } from '../../firebase';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dbInstance = collection(db, 'shipments');
  const { body } = req;
  const reqBody = JSON.parse(body);
  const ids = reqBody.ids;

  const q = query(dbInstance, where('trackingId', 'in', ids));
  const querySnapshot = await getDocs(q);
  const dataArr: DocumentData[] = [];
  querySnapshot.forEach((doc) => {
    dataArr.push(doc.data());
  });
  res.status(200).json({ shipmentData: dataArr });
}
