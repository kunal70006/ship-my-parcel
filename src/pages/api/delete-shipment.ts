import { deleteDoc, doc } from 'firebase/firestore';
import { NextApiRequest, NextApiResponse } from 'next';

import { db } from '../../firebase';

import { AllShipment } from '@/utils/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req;
  const ship: AllShipment = JSON.parse(body);
  await deleteDoc(doc(db, 'shipments', ship.docId));

  res.status(200).json('ok');
}
