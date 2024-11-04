export default async function atlantic(trackingNumber: string) {
  const endpoint = `http://live.tccs.in/api/v1/Tracking/Tracking`;

  try {
    const res = await fetch(endpoint, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        UserID: '',
        Password: '',
        AWBNo: trackingNumber,
      }),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
}
