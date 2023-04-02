import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Breezo</title>
        <meta name="description" content="What's the weather like?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="absolute h-20 w-screen border-b-4 border-blue-400 bg-white py-5"></nav>
      <Component {...pageProps} />
    </>
  );
};

export default api.withTRPC(MyApp);
