import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import TextBlock from "../src/Components/TextBlock";
import Form from "../src/Components/Form";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title> Cat Cat Cat Cat Cat Cat</title>
      </Head>
      <Parallax
        pages={1.5}
        style={{
          top: "0",
          left: "0",
          background: "linear-gradient(to bottom, #ff9966, #ccffcc)",
        }}
        className="animation"
      >
        <ParallaxLayer offset={0} speed={0.5}>
          <TextBlock />
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={2.5}>
          <div className="animation_layer parallax" id="paw1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={1}>
          <div className="animation_layer parallax" id="paw2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.7} speed={0.5}>
          <Form />
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={0.5}>
          <div className="animation_layer parallax" id="cat"></div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
