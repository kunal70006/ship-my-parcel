import AboutUs from '@/components/AboutUs';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import HowItWorksAndPartners from '@/components/HowItWorksAndPartners';
import Navbar from '@/components/Navbar';
import Solutions from '@/components/Solutions';
import Script from 'next/script';

const Home = () => {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8505585627000025"
        crossOrigin="anonymous"
      />
      <Script
        async
        src="https://api.countapi.xyz/hit/shipmyparcel.co.in/4be4f751-d651-48f6-ac0c-7f20790aa8e0?callback=websiteVisits"
      />

      <Script id="track-visits" strategy="afterInteractive">
        {`function websiteVisits(response){
          document.getElementById("visitors").textContent = response.value
        }`}
      </Script>

      <div className="relative">
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
};

export default Home;
