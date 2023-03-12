import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex bg-yellow-300 justify-between px-8 py-2 items-center">
      <Link href="/">
        <Image src="/logo.png" alt="logo" height={96} width={96} />
      </Link>
      <div className="flex gap-x-6 text-lg">
        <Link href="/">
          <button
            className={`${
              router.pathname === '/' && 'underline text-orange-500'
            } hover:underline underline-offset-8 hover:text-orange-500 transition-colors pt-2`}
          >
            Home
          </button>
        </Link>
        <Link href="/about">
          <button
            className={`${
              router.pathname === '/about' && 'underline text-orange-500'
            } hover:underline underline-offset-8 hover:text-orange-500 transition-colors pt-2`}
          >
            About us
          </button>
        </Link>
        <Link href="/features">
          <button
            className={`${
              router.pathname === '/features' && 'underline text-orange-500'
            } hover:underline underline-offset-8 hover:text-orange-500 transition-colors pt-2`}
          >
            Features
          </button>
        </Link>
        <Link href="/contact">
          <button
            className={`${
              router.pathname === '/contact' && 'underline text-orange-500'
            } hover:underline underline-offset-8 hover:text-orange-500 transition-colors pt-2`}
          >
            Contact
          </button>
        </Link>
        <Link href="/smp-tracking">
          <button className="bg-white rounded-md py-2 px-4 hover:bg-orange-500 transition-colors hover:text-white">
            SMP Tracking
          </button>
        </Link>
        <Link href="/awb-tracking">
          <button className="bg-white rounded-md py-2 px-4 hover:bg-orange-500 transition-colors hover:text-white">
            AWB Tracking
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
