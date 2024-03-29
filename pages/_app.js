import Head from "next/head";
import "../styles/globals.css";
import "../styles/Navbar.scss";
import "../styles/loginmodal.scss";
import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
