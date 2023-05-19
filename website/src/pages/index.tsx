import type { NextPage } from "next";
import Image from "next/image";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import React from "react";
import { Spinner } from "@/components/Spinner";
import { Layout } from "@/components/layout";
import { read } from "fs";
import Background from "@/components/Background"
import { Footer } from "@/components/footer";

const Home: NextPage<any> = ({ }) => {
  return (
    <Layout>
      <div className='relative w-full m-0 h-screen'>
        <Background className='opacity-30' />
        <main className='relative w-full min-h-screen bg-transparent'>
          <div className="h-screen flex flex-col justify-center items-center">
            <div className="">
              <h1 className="text-white text-3xl font-bold animate-bounce">Chroma<span className="font-thin"> | Re-thinking college consulting 🏫🌎</span></h1>
              <p className="text-white text-xl font-light">By recent student admits to Harvard, Stanford, Princeton, Oxford etc.</p>
            </div>
          </div>
          <Footer />
        </main>
      </div>

    </Layout>
  );
};


export default Home;
