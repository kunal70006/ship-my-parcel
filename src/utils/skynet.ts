export default async function skynet(trackingNumber: string) {
  const endpoint = 'https://api.skynetww.com/api/Client/ShipmentTracking';
  const headers = {
    'Content-Type': 'application/json',
  };

  const body = {
    Token: '0DFA62BE-ED79-44C4-AA6C-E0B8D8050651',
    ClientToken: '0DFA62BE-ED79-44C4-AA6C-E0B8D8050651',
    ClientCode: 'H1005',
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
