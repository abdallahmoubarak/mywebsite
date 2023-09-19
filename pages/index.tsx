import TopBar from "@/components/section/TopBar";
import Head from "next/head";
import Footer from "@/components/section/Footer";
import dynamic from "next/dynamic";
const Home = dynamic(() => import("@/components/pages/home"));

export default function Index() {
  return (
    <>
      <Head>
        <title>Abdallah Moubarak</title>
      </Head>
      <Home />
      <Footer />
    </>
  );
}
