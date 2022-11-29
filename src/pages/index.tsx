import Head from "next/head";
import Contact from "../components/Contact ";
import Final from "../components/Final";
import Footer from "../components/Footer";
import Nav from "../components/Header/nav/Navbar";
import Card from "../components/Main/cardInfos";
import Main from "../components/Main/Main";
import Solutions from "../components/Soluções";
import WaCapable from "../components/Wecapable";

export default function Home() {
  return (
    <div id="App">
      <Head>
        <title>Erwin System</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="shortcut icon"
          href="../../public/logo.png"
          type="image/x-icon"
        />
      </Head>
      <div className="flex flex-col">
        <Nav />
        <Main />
        <Card />
        <Contact />
        <WaCapable />
        <Solutions />
        <Final />
        <Footer />
      </div>
    </div>
  );
}
