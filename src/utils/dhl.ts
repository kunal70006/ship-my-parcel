export default async function dhl(trackingNumber: string) {
  const endpoint = `https://api-eu.dhl.com/track/shipments?trackingNumber=${trackingNumber}`;

  try {
    const res = await fetch(endpoint, {
      headers: {
        'DHL-API-Key': process.env.DHL_API_KEY!,
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
}
