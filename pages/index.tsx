import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Masthead from "../components/masthead";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Margelo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Masthead />
    </div>
  );
};

export default Home;
