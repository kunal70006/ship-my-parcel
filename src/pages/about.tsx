import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const about = () => {
  return (
    <>
      <Navbar />
      <video autoPlay loop muted playsInline className="w-full h-full relative">
        <source src="/vid2.mp4" type="video/mp4" />
      </video>
      <AboutUs />
      <Footer />
    </>
  );
};

export default about;
