import { updateDoc, doc } from 'firebase/firestore';
import { NextApiRequest, NextApiResponse } from 'next';

import { db } from '../../firebase';

import { AllShipment } from '@/utils/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req;

  const ship: AllShipment = JSON.parse(body);
  if (ship.shipment.isPaid) {
    ship.shipment.isPaid = true;
  } else {
    ship.shipment.isPaid = false;
  }
  await updateDoc(doc(db, 'shipments', ship.docId), {
    ...ship.shipment,
  });

  res.status(200).json('ok');
}
