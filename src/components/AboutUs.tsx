import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="flex px-8 my-24">
      <div className="flex flex-col w-1/2">
        <h1 className="text-4xl font-semibold mb-8">About Us</h1>
        <p className="text-justify">
          First, let&apos;s get to know each other. As simple as our name, we
          are a global shipping service that allows you to send business
          packages, important documents, e-commerce orders, or simply love
          letters to your partners - around the world at rates you&apos;ll
          simply love. Backed by our strong network and industry experience,
          ShipMyParcel offers a complete range of cross-border shipping services
          covering more than 220 countries across the globe. With economical
          shipping options and reliable transit times, we offer complete
          visibility of the parcel&apos;s journey and take care of all the
          customs, clearance formalities and other requirements.
        </p>
      </div>
      <div>
        <Image
          src="/truck.svg"
          alt="about us cover image"
          height={420}
          width={1000}
        />
      </div>
    </div>
  );
};

export default AboutUs;
