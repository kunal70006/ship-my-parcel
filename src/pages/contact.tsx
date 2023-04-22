import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';
import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';

const contact = () => {
  return (
    <Layout>
      <Navbar />
      <ContactUs />
      <Footer />
    </Layout>
  );
};

export default contact;
