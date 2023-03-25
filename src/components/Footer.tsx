import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-x-8 min-h-[40vh] p-8 bg-yellow-300 justify-between">
      <div className="sm:w-1/3 mt-16">
        <Image
          src="/logo.png"
          width={300}
          height={300}
          alt="logo"
          className=" object-contain"
        />

        <p className="">
          ShipMyParcel is global shipping service that allows you to send
          business packages, important documents, e-commerce orders, or simply
          love l etter to your partner - around the world at rates you&apos;ll
          simply love.
        </p>
      </div>

      <div className="sm:w-1/3 mt-16 flex flex-col items-center">
        <Image
          src="/maps.png"
          width={400}
          height={400}
          className=" object-contain"
          alt="map"
        />

        <h2 className="text-2xl mb-2">Contact</h2>
        <p>Mobile: +918448668558, +918860502024</p>
        <p>
          Address: WZ-399, Shop No.2, Street 22, Shiv Nagar, New Delhi, Delhi
          110058
        </p>
      </div>
      <div className="sm:w-1/3 mt-16 flex flex-col sm:items-end ">
        <h2 className="text-2xl mb-2">Information</h2>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/features">Features</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms & Conditions</Link>
      </div>
    </div>
  );
};

export default Footer;
