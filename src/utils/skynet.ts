export default async function skynet(trackingNumber: string) {
  const endpoint = 'https://api.skynetww.com/api/Client/ShipmentTracking';
  const headers = {
    'Content-Type': 'application/json',
  };

  const body = {
    Token: process.env.NEXT_PUBLIC_ClientToken,
    ClientToken: process.env.NEXT_PUBLIC_ClientToken,
    ClientCode: process.env.NEXT_PUBLIC_ClientCode,
    ShipmentOrderID: trackingNumber,
  };
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
}
