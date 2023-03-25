import Image from 'next/image';

const Solutions = () => {
  return (
    <div className="flex flex-col min-h-screen py-24 sm:mx-8">
      <h1 className="text-4xl mb-8 font-semibold text-center">Solutions</h1>
      <div className="flex sm:flex-row flex-col-reverse">
        <div className="sm:w-1/2 w-full bg-orange-300 flex flex-col p-4 sm:h-[332px] px-8 sm:px-0">
          <h2 className="text-3xl mb-4">Amazon & Ebay Global Logistics</h2>
          <p>
            Already selling internationally on marketplaces like Amazon, Ebay or
            Walmart? Partner with us today to gain a competitive edge with
            timely deliveries and better shipping rates. We help you send your
            FBA inventory or MFN orders hassle-free.
          </p>
          <ul className="list-disc px-8 mt-2">
            <li>Amazon FBA (Fulfilled By Amazon)</li>
            <li>Amazon MFN (Merchant Fulfilled Network)</li>
            <li>Ebay, Walmart and other international marketplaces</li>
            <li>3PL warehouses</li>
          </ul>
        </div>
        <div className="sm:w-1/2 w-full sm:my-4 my-0 sm:h-[300px] h-[200px] sm:bg-white bg-orange-300 relative">
          <Image src="/ecomm.svg" fill alt="ecommerce" />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col">
        <div className="sm:w-1/2 w-full sm:my-4 my-0 sm:h-[300px] h-[200px] sm:bg-white bg-yellow-300 relative">
          <Image src="/globe.svg" fill alt="globe" />
        </div>
        <div className="sm:w-1/2  bg-yellow-300 flex flex-col p-4 sm:h-[332px]">
          <h2 className="text-3xl mb-4">Businesses</h2>
          <p>
            Running a global business? Interacting with customers or suppliers
            across the globe? Be it important business documents or product
            samples for approval, we ship it all. You grow your business, we
            will take care of the logistics.
          </p>
          <ul className="list-disc px-8 mt-2">
            <li>B2B Businesses</li>
            <li>Multinational Companies</li>
            <li>Exporters</li>
          </ul>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col-reverse">
        <div className="sm:w-1/2 bg-orange-300 flex flex-col  p-4 sm:h-[332px]">
          <h2 className="text-3xl mb-4">Cross Border E-Commerce Sellers</h2>
          <p>
            Now sell worldwide. We believe every e-commerce company deserves to
            feel the excitement of going global and reaching out to
            international customers. With no order commitments we are enabling
            you to expand your e-commerce store front to over 220 countries. We
            aim on making the world closer to your business.
          </p>
          <ul className="list-disc px-8 mt-2">
            <li>Instagram Sellers</li>
            <li>Shopify or Own Website</li>
          </ul>
        </div>
        <div className="sm:w-1/2 sm:my-4 my-0 sm:h-[300px] h-[200px] sm:bg-white bg-orange-300 relative">
          <Image src="/cross.svg" fill alt="cross" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-1/2 sm:h-[300px] h-[200px] relative sm:my-4 bg-yellow-300 sm:bg-white">
          <Image src="/gift.svg" fill alt="gift" />
        </div>
        <div className="sm:w-1/2 bg-yellow-300 flex flex-col p-4 sm:h-[332px]">
          <h2 className="text-3xl mb-4">Personal Shipments</h2>
          <p>
            Whether you want to send a small package for an occasion, gifts for
            friends and family or university application documents,
            ShipGlobal&apos;s personal shipment service has got you covered. Now
            ship hassle-free.
          </p>
          <ul className="list-disc px-8 mt-2">
            <li>
              University application documents or excess luggage support for
              students
            </li>
            <li>Invitations & Gifting</li>
            <li>Anything Personal</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
