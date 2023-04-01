export default async function skynet(trackingNumber: string) {
  const endpoint =
    'https://services.skynetww.com/api/Skynet/GetShipmentHistory';
  const headers = {
    'Content-Type': 'application/json',
    username: 'TESTSKY',
    password: 'SKY',
    Acesskey: 'SKY@2022',
  };
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ Awbno: trackingNumber }),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
}
