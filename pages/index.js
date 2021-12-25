import Head from "next/head";
import Intro from "../components/Home/Intro";
import { getServicesData } from "../data/data";
import Services from "../components/home/Services";

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Welcome to Home page." />
      </Head>
      <Intro />
      <Services servicesData={props.services} />
    </>
  );
}

export async function getStaticProps() {
  const servicesData = getServicesData();

  return {
    props: {
      services: servicesData,
    },
  };
}
