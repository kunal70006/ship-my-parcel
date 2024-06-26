import {
  collection,
  DocumentData,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { NextApiRequest, NextApiResponse } from 'next';

import { db } from '../../firebase';
import dhl from '@/utils/dhl';
import fedex from '@/utils/fedex';
import skynet from '@/utils/skynet';
import skynetNew from '@/utils/skynetNew';

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
  const promiseArr: Promise<any>[] = [];
  dataArr.map(async (data) => {
    const { service, awbId } = data;
    const lCaseService = service.toLowerCase();
    switch (lCaseService) {
      case 'dhl': {
        promiseArr.push(dhl(awbId));
        break;
      }
      case 'skynet': {
        promiseArr.push(skynet(awbId));
        break;
      }
      case 'fedex': {
        promiseArr.push(fedex(awbId));
        break;
      }

      case 'skynetnew': {
        promiseArr.push(skynetNew(awbId));
      }
      default:
        break;
    }
  });
  const promiseArrRes = await Promise.all(promiseArr);
  const finalData = {
    userData: dataArr,
    trackingData: promiseArrRes,
  };

  res.status(200).json({ shipmentData: finalData });
}
