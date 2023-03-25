import AboutUs from '@/components/AboutUs';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import HowItWorksAndPartners from '@/components/HowItWorksAndPartners';
import Navbar from '@/components/Navbar';
import Solutions from '@/components/Solutions';

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <video autoPlay loop muted playsInline className="w-full h-full relative">
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
    </div>
  );
};

export default Home;
