import { collection, getCountFromServer } from 'firebase/firestore';
import { NextApiRequest, NextApiResponse } from 'next';

import { db } from '../../firebase';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const collectionRef = collection(db, 'cities');
    const snapshot = await getCountFromServer(collectionRef);
    res.status(200).json({ count: snapshot.data().count });
    console.log(snapshot.data().count);
  } catch (error) {
    console.log(error);
    res.status(500).json({ shipmentData: 'Something went wrong' });
  }
}
