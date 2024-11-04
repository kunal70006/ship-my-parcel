import Head from 'next/head';

const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Shipezy</title>
        <meta
          name="description"
          content="Delivering Happiness to you!"
          key="desc"
        />
        <meta property="og:title" content="Shipezy" />
        <meta
          property="og:description"
          content="Delivering Happiness to you!"
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/ship-my-parcel-demo.appspot.com/o/logo.JPG?alt=media&token=b4348f71-d67e-4342-8814-c74fc2223933/o/logo.png?alt=media&token=b93ecfd9-2c85-4248-9496-3239bb504943"
        />
      </Head>
      {children}
    </>
  );
};

export default Layout;
