import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SideBar from "./../components/SideBar";
import Feed from "./../components/Feed";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>TwitterClone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black flex min-h-screen mx-auto max-w-screen-xl">
        <SideBar />
        <Feed/>
      </main>
    </div>
  );
};

export default Home;
