import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';

const features = () => {
  return (
    <Layout>
      <Navbar />
      <Features />
      <Footer />
    </Layout>
  );
};

export default features;
