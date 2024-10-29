import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-x-8 min-h-[40vh] p-8 text-white bg-blue-700 justify-between">
      <div className="sm:w-1/3 mt-16">
        <Image
          src="/logo.png"
          width={300}
          height={300}
          alt="logo"
          className=" object-contain"
        />

        <p className="">
          ShipEzy is global shipping service that allows you to send business
          packages, important documents, e-commerce orders, or simply love l
          etter to your partner - around the world at rates you&apos;ll simply
          love.
        </p>
      </div>

      <div className="sm:w-1/3 mt-16 flex flex-col items-center text-center">
        {/* <Image
          src="/maps.png"
          width={400}
          height={400}
          className=" object-contain"
          alt="map"
        /> */}
        <div className="grow lg:hidden"></div>
        <h2 className="text-2xl mb-2">Contact</h2>
        <p>Mobile: +919266911194, +919266911195</p>
        <p>Address: Address: Plot Number 174, Pratap Nagar, Delhi-110064</p>
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
