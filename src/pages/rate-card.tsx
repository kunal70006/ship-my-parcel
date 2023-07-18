import Footer from '@/components/Footer';
import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

type Location = 'australia' | 'uk' | 'usa' | 'canada';

interface LocationAndWeight {
  location: Location;
  weight: string;
}

const RateCardPage = () => {
  const [locationAndWeight, setLocationAndWeight] = useState<LocationAndWeight>(
    {
      location: 'australia',
      weight: '<0.5',
    }
  );

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.id === 'country') {
      setLocationAndWeight((l) => ({
        ...l,
        location: e.target.value as Location,
      }));
    } else {
      setLocationAndWeight((l) => ({
        ...l,
        weight: e.target.value,
      }));
    }
  }
  return (
    <Layout>
      <Navbar />
      <div className="flex flex-col min-h-screen py-24">
        <h1 className="text-4xl mb-8 font-semibold text-center">Rate List</h1>
        <div className="flex flex-col items-center">
          <label htmlFor="country" className="text-lg mb-2">
            Select Destination Country
          </label>
          <select
            name="country"
            id="country"
            className="px-4 py-1 border border-black rounded-md"
            onChange={handleChange}
            value={locationAndWeight.location}
          >
            <option value="australia">Australia</option>
            <option value="uk">United Kingdom</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
          </select>
          <label htmlFor="weight" className="text-lg mb-2">
            Select Shipment Weight
          </label>
          <select
            name="weight"
            id="weight"
            className="px-4 py-1 border border-black rounded-md"
            onChange={handleChange}
            value={locationAndWeight.weight}
          >
            <option value="<0.5">0.5kg</option>
            <option value="<1">1kg</option>
            <option value="<2">2kg</option>
            <option value="<3">3kg</option>
            <option value="<4">4kg</option>
            <option value="<5">5kg</option>
            <option value="<6">6kg</option>
            <option value="<7">7kg</option>
          </select>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default RateCardPage;
