import AboutUs from '@/components/AboutUs';
import Features from '@/components/Features';
import HowItWorksAndPartners from '@/components/HowItWorksAndPartners';
import Navbar from '@/components/Navbar';
import Solutions from '@/components/Solutions';

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <video autoPlay loop muted playsInline className="w-full h-full relative">
        <source src="/vid1.mp4" type="video/mp4" />
      </video>
      <h1 className="absolute font-semibold text-7xl text-white top-1/3 px-8">
        Delivering Happiness <br /> to you!
      </h1>
      <AboutUs />
      <Features />
      <Solutions />
      <HowItWorksAndPartners />
    </div>
  );
};

export default Home;
