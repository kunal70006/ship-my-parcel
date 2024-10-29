import AboutUs from '@/components/AboutUs';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import HowItWorksAndPartners from '@/components/HowItWorksAndPartners';
import Navbar from '@/components/Navbar';
import Solutions from '@/components/Solutions';
import Script from 'next/script';
import Head from 'next/head';
import PopupImage from '@/components/Popup';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from '@/firebase';
import { InferGetStaticPropsType } from 'next';
import CarouselComponent from '@/components/Carousel';

function Home({ urls }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8505585627000025"
        crossOrigin="anonymous"
      />
      <Script
        async
        src="https://api.countapi.xyz/hit/ShipEzy.co.in/4be4f751-d651-48f6-ac0c-7f20790aa8e0?callback=websiteVisits"
      />

      <Script id="track-visits" strategy="afterInteractive">
        {`function websiteVisits(response){
          document.getElementById("visitors").textContent = response.value
        }`}
      </Script>
      <Head>
        <title>ShipEzy</title>
        <meta
          name="description"
          content="Delivering Happiness to you!"
          key="desc"
        />
        <meta property="og:title" content="ShipEzy" />
        <meta
          property="og:description"
          content="Delivering Happiness to you!"
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/ship-my-parcel-41b0f.appspot.com/o/logo.png?alt=media&token=b93ecfd9-2c85-4248-9496-3239bb504943"
        />
      </Head>
      <div className="relative">
        {/* <PopupImage /> */}
        <Navbar />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full relative"
        >
          <source src="/vid1.mp4" type="video/mp4" />
        </video>
        <h1 className="absolute font-semibold sm:text-7xl text-white  px-8 text-xl sm:top-[5%] top-[150px]">
          Delivering Happiness <br /> to you!
        </h1>
        <CarouselComponent urls={urls} />
        <AboutUs />
        <Features />
        <Solutions />
        <HowItWorksAndPartners />
        <Footer />
        <div className="fixed bg-black/30 backdrop-blur-md rounded-md right-4 bottom-4 w-fit px-2 py-1 flex items-center justify-center">
          <h1 className="text-lg font-semibold text-white">
            Visitors: <span id="visitors"></span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Home;

export const getStaticProps = async () => {
  const storageRef = ref(storage, '/reviews');
  const urlArr: string[] = [];

  try {
    const list = await listAll(storageRef);

    // Use Promise.all to wait for all promises to resolve
    await Promise.all(
      list.items.map(async (item) => {
        const url = await getDownloadURL(item);
        urlArr.push(url);
      })
    );
  } catch (error) {
    console.error('Error listing files:', error);
  }

  return { props: { urls: urlArr ?? [] } };
};
