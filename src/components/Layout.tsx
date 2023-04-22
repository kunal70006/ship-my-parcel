import Head from 'next/head';

const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Ship My Parcel</title>
        <meta
          name="description"
          content="Delivering Happiness to you!"
          key="desc"
        />
        <meta property="og:title" content="Ship My Parcel" />
        <meta
          property="og:description"
          content="Delivering Happiness to you!"
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/ship-my-parcel-41b0f.appspot.com/o/logo.png?alt=media&token=b93ecfd9-2c85-4248-9496-3239bb504943"
        />
      </Head>
      {...children}
    </>
  );
};

export default Layout;
