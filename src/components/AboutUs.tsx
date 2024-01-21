import Image from 'next/image';
import { useRouter } from 'next/router';

const AboutUs = () => {
  const router = useRouter();
  return (
    <div
      className={`flex px-8 my-24 gap-x-8 ${
        router.pathname === '/about' ? 'flex-col' : 'flex-col-reverse'
      } sm:flex-row`}
    >
      <div className="flex flex-col sm:w-1/2 w-full mt-8 sm:mt-0">
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
      {router.pathname === '/about' && (
        <div className="sm:w-1/2 flex flex-col sm:flex-row justify-between mt-8 sm:mt-0">
          <div className="">
            <h1 className="text-4xl font-semibold mb-8">Founders</h1>
            <p className="font-semibold text-xl">Mr. Ajit Pratap Singh</p>
            <p className="font-semibold text-xl">Mr. Gurpreet Singh</p>
          </div>
          <div className="">
            <h1 className="text-4xl font-semibold mb-8 mt-8 sm:mt-0">
              Contact
            </h1>
            <p className="font-semibold text-xl">
              Mobile: +918448668558, +918860502024
            </p>
            <p className="font-semibold text-xl">
              Address: GB 5, Street No-5, G Block, Shiv Nagar, <br />
              Jail Road, Opposite Om Sweets, New Delhi, Delhi 110058
            </p>
          </div>
        </div>
      )}
      {router.pathname === '/' && (
        <div>
          <Image
            src="/truck.svg"
            alt="about us cover image"
            height={420}
            width={1000}
          />
        </div>
      )}
    </div>
  );
};

export default AboutUs;
