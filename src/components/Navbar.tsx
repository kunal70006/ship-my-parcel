import Hamburger from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { useWindowSize } from '@/utils/useWindowResize';

const Navbar = () => {
  const router = useRouter();
  const [width] = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex bg-blue-700 justify-between px-8 py-2 items-center text-white">
        <Link href="/">
          <Image src="/logo.png" alt="logo" height={96} width={96} />
        </Link>
        {width > 700 ? (
          <div className="flex gap-x-6 text-lg">
            <Link href="/">
              <button
                className={`${
                  router.pathname === '/' && 'underline text-white'
                } hover:underline underline-offset-8 hover:text-white transition-colors pt-2`}
              >
                Home
              </button>
            </Link>
            <Link href="/about">
              <button
                className={`${
                  router.pathname === '/about' && 'underline text-white'
                } hover:underline underline-offset-8 hover:text-white transition-colors pt-2`}
              >
                About us
              </button>
            </Link>
            <Link href="/features">
              <button
                className={`${
                  router.pathname === '/features' && 'underline text-white'
                } hover:underline underline-offset-8 hover:text-white transition-colors pt-2`}
              >
                Features
              </button>
            </Link>
            <Link href="/contact">
              <button
                className={`${
                  router.pathname === '/contact' && 'underline text-white'
                } hover:underline underline-offset-8 hover:text-white transition-colors pt-2`}
              >
                Contact
              </button>
            </Link>

            {/* <Link href="/rate-card">
              <button
                className={`${
                  router.pathname === '/rate-card' && 'underline text-white'
                } hover:underline underline-offset-8 hover:text-white transition-colors pt-2`}
              >
                Rate Card
              </button>
            </Link> */}

            <Link href="/smp-tracking">
              <button className="bg-white text-black rounded-md py-2 px-4 ">
                SMP Tracking
              </button>
            </Link>
          </div>
        ) : (
          <Hamburger
            size={24}
            toggled={isOpen}
            toggle={setIsOpen}
            color="white"
          />
        )}
      </div>
      {isOpen && (
        <div className="absolute z-[99999] h-[90vh] w-full text-white bg-blue-700 flex flex-col items-center text-center justify-around overflow-hidden">
          <div className="flex flex-col gap-y-6 text-lg">
            <Link href="/">
              <button
                className={`${
                  router.pathname === '/' && 'underline text-white'
                } hover:underline underline-offset-8 hover:text-white transition-colors pt-2`}
              >
                Home
              </button>
            </Link>
            <Link href="/about">
              <button
                className={`${
                  router.pathname === '/about' && 'underline text-white'
                } hover:underline underline-offset-8 hover:text-white transition-colors pt-2`}
              >
                About us
              </button>
            </Link>
            <Link href="/features">
              <button
                className={`${
                  router.pathname === '/features' && 'underline text-white'
                } hover:underline underline-offset-8 hover:text-white transition-colors pt-2`}
              >
                Features
              </button>
            </Link>
            <Link href="/contact">
              <button
                className={`${
                  router.pathname === '/contact' && 'underline text-white'
                } hover:underline underline-offset-8 hover:text-white transition-colors pt-2`}
              >
                Contact
              </button>
            </Link>

            {/* <Link href="/rate-card">
              <button
                className={`${
                  router.pathname === '/rate-card' && 'underline text-white'
                } hover:underline underline-offset-8 hover:text-white transition-colors pt-2`}
              >
                Rate Card
              </button>
            </Link> */}

            <Link href="/smp-tracking">
              <button className="bg-white text-black rounded-md py-2 px-4">
                SMP Tracking
              </button>
            </Link>
            {/* <Link href="/awb-tracking">
              <button className="bg-white rounded-md py-2 px-4 hover:bg-orange-500 transition-colors hover:text-white">
                AWB Tracking
              </button>
            </Link> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
