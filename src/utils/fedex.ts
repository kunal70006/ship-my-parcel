// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const fedexAPI = require('@kronsi/fedex');

// export default async function fedex(trackingNumber: string) {
//   const fx = new fedexAPI({
//     environment: 'sandbox', // or live
//     debug: true,
//     debugOutput: 'xml',
//     key: process.env.FEDEX_API_KEY,
//     password: process.env.FEDEX_PASSWORD,
//     account_number: process.env.FEDEX_ACCOUNT_NUMBER,
//     meter_number: process.env.FEDEX_METER_NUMBER,
//     imperial: false,
//   });

//   fx.track(
//     {
//       SelectionDetails: {
//         PackageIdentifier: {
//           Type: 'TRACKING_NUMBER_OR_DOORTAG',
//           Value: trackingNumber,
//         },
//       },
//     },
//     function (err: any, res: any) {
//       if (err) {
//         return console.error(err);
//       }
//       return res;
//     }
//   );
// }

export default async function fedex(trackingNumber: string) {
  const tokenURL = 'https://apis.fedex.com/oauth/token';

  const tokenBody = `grant_type=client_credentials&client_id=${process.env.FEDEX_API_KEY}&client_secret=${process.env.FEDEX_API_SECRET}`;

  const res = await fetch(tokenURL, {
    method: 'POST',
    body: tokenBody,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': tokenBody.length.toLocaleString(),
    },
  });

  const data = await res.json();
  const token = data.access_token;

  const trackingURL = 'https://apis.fedex.com/track/v1/trackingnumbers';
  const trackingBody = {
    includeDetailedScans: true,
    trackingInfo: [
      {
        trackingNumberInfo: {
          trackingNumber: trackingNumber,
        },
      },
    ],
  };

  const trackingRes = await fetch(trackingURL, {
    method: 'POST',
    body: JSON.stringify(trackingBody),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const trackingData = await trackingRes.json();
  return trackingData;
}
