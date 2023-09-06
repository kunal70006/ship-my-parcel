import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import signInWithGoogle from '@/utils/signInWithGoogle';
import { type AllShipment } from '@/utils/types';
import { useEffect, useState } from 'react';

const AllShipments = () => {
  const [admin, setAdmin] = useState<string>('');
  const [shipmentData, setShipmentData] = useState<AllShipment[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (localStorage) {
      const email = localStorage.getItem('adminEmail');
      if (email) {
        setAdmin(email);
      }
    }
  }, []);

  useEffect(() => {
    if (admin.length === 0 && shipmentData.length === 0) {
      const getData = async () => {
        try {
          const res = await fetch('/api/get-all-shipments');
          const data = await res.json();
          setShipmentData(data.shipmentData);
        } catch (error) {
          console.error(error);
          throw new Error('Shit done goofed');
        }
      };

      getData();
    }
  }, [admin, shipmentData]);

  const handleSignIn = async () => {
    const user = await signInWithGoogle();
    if (user) {
      if (user.email) {
        if (
          user.email.toLowerCase() === 'apsmarinelogistics@gmail.com' ||
          user.email.toLowerCase() === 'singhkunaldeep@gmail.com'
        ) {
          setAdmin(user.email);
          localStorage.setItem('adminEmail', user.email);
        }
      }
    }
  };

  const handleFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    trackingId: string
  ) => {
    const shipment = shipmentData.filter(
      (data) => data.shipment.trackingId === trackingId
    )[0];
    // @ts-expect-error i dont feel like dealing w this err
    shipment.shipment[event.target.id] = event.target.value;

    setShipmentData((t) => [
      ...t.filter((d) => d.shipment.trackingId !== trackingId),
      shipment,
    ]);
  };

  const handleUpdateShipment = async (shipment: AllShipment) => {
    try {
      if (Object.values(shipment.shipment).every((val) => Boolean(val))) {
        const res = await fetch('/api/update-shipment', {
          method: 'POST',
          // headers: {
          //   Accept: 'application/json',
          //   'Content-Type': 'application/json',
          // },
          body: JSON.stringify(shipment),
        });
        const data = await res.json();
        window.alert(data);
      }
    } catch (error) {
      console.error(error);
      throw new Error('huh');
    }
  };

  const handleDeleteShipment = async (shipment: AllShipment) => {
    try {
      const res = await fetch('/api/delete-shipment', {
        method: 'POST',
        body: JSON.stringify(shipment),
      });
      const data = await res.json();
      setShipmentData((t) => [...t.filter((d) => d.docId !== shipment.docId)]);
      window.alert(data);
    } catch (error) {
      console.error(error);
      throw new Error('huh');
    }
  };

  if (!admin.length) {
    return (
      <Layout>
        <Navbar />
        <div className="flex h-screen items-center justify-center">
          <button
            onClick={handleSignIn}
            className="rounded-md shadow-lg font-semibold text-xl px-4 py-1 bg-slate-200"
          >
            Sign in With Google
          </button>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <Navbar />
      <div className="flex flex-col items-center my-8 gap-8">
        <h1 className="text-2xl font-semibold">Tracking IDs</h1>
        <input
          className="bg-slate-100 px-2 py-1 rounded-lg w-1/3 text-lg placeholder:text-black"
          placeholder="Search using Tracking ID..."
          value={searchQuery}
          onChange={(ev) => setSearchQuery(ev.target.value)}
        />
        {shipmentData
          .filter((q) =>
            q.shipment.trackingId.toLowerCase().includes(searchQuery)
          )
          .map((shipment) => (
            <div
              className="shadow-lg rounded-lg px-8 py-4 bg-slate-200 flex flex-col gap-4 text-lg w-1/3"
              key={shipment.docId}
            >
              <div className="flex justify-between items-center">
                <span className="">Name: </span>
                <input
                  type="text"
                  value={shipment.shipment.name}
                  id="name"
                  className="bg-slate-100 px-2 py-1 rounded-lg w-1/2"
                  onChange={(ev) =>
                    handleFieldChange(ev, shipment.shipment.trackingId)
                  }
                />
              </div>
              <div className="flex justify-between">
                <span className="">Service: </span>
                <input
                  type="text"
                  value={shipment.shipment.service}
                  id="service"
                  className="bg-slate-100 px-2 py-1 rounded-lg w-1/2"
                  onChange={(ev) =>
                    handleFieldChange(ev, shipment.shipment.trackingId)
                  }
                />
              </div>
              <div className="flex justify-between">
                <span className="">Actual Weight: </span>
                <input
                  type="text"
                  value={shipment.shipment.actualWeight}
                  id="actualWeight"
                  className="bg-slate-100 px-2 py-1 rounded-lg w-1/2"
                  onChange={(ev) =>
                    handleFieldChange(ev, shipment.shipment.trackingId)
                  }
                />
              </div>
              <div className="flex justify-between">
                <span className="">Volume Weight: </span>
                <input
                  type="text"
                  value={shipment.shipment.volWeight}
                  id="volWeight"
                  className="bg-slate-100 px-2 py-1 rounded-lg w-1/2"
                  onChange={(ev) =>
                    handleFieldChange(ev, shipment.shipment.trackingId)
                  }
                />
              </div>
              <div className="flex justify-between">
                <span className="">AWB ID: </span>
                <input
                  type="text"
                  value={shipment.shipment.awbId}
                  id="awbId"
                  className="bg-slate-100 px-2 py-1 rounded-lg w-1/2"
                  onChange={(ev) =>
                    handleFieldChange(ev, shipment.shipment.trackingId)
                  }
                />
              </div>

              <div className="flex justify-between">
                <span className="">Address: </span>
                <input
                  type="text"
                  value={shipment.shipment.address}
                  id="address"
                  className="bg-slate-100 px-2 py-1 rounded-lg w-1/2"
                  onChange={(ev) =>
                    handleFieldChange(ev, shipment.shipment.trackingId)
                  }
                />
              </div>
              <div className="flex justify-between">
                <span className="">Tracking ID: </span>
                <input
                  type="text"
                  value={shipment.shipment.trackingId}
                  disabled
                  id="address"
                  className="bg-slate-100 px-2 py-1 rounded-lg w-1/2"
                />
              </div>
              <div className="flex justify-between mt-4">
                <button
                  className="rounded-lg text-lg px-4 py-2 font-semibold text-white drop-shadow-xl bg-slate-600 hover:bg-slate-900 transition-colors"
                  onClick={() => handleUpdateShipment(shipment)}
                >
                  Update
                </button>
                <button
                  className="rounded-lg text-lg px-4 py-2 font-semibold text-white drop-shadow-xl bg-red-500 hover:bg-red-600 transition-colors"
                  onClick={() => handleDeleteShipment(shipment)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default AllShipments;
