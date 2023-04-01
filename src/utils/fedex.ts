// eslint-disable-next-line @typescript-eslint/no-var-requires
const fedexAPI = require('@kronsi/fedex');

export default async function fedex(trackingNumber: string) {
  const fx = new fedexAPI({
    environment: 'sandbox', // or live
    debug: true,
    debugOutput: 'xml',
    key: process.env.FEDEX_API_KEY,
    password: process.env.FEDEX_PASSWORD,
    account_number: process.env.FEDEX_ACCOUNT_NUMBER,
    meter_number: process.env.FEDEX_METER_NUMBER,
    imperial: false,
  });

  fx.track(
    {
      SelectionDetails: {
        PackageIdentifier: {
          Type: 'TRACKING_NUMBER_OR_DOORTAG',
          Value: trackingNumber,
        },
      },
    },
    function (err: any, res: any) {
      if (err) {
        return console.log(err);
      }
      return res;
    }
  );
}
