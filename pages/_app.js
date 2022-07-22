import Head from "next/head";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
