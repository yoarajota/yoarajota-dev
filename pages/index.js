import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useScroll, useTransform } from
  "framer-motion"
import { Box, Button, Center, ChakraProvider, CircularProgress, CircularProgressLabel, SlideFade, useDisclosure } from '@chakra-ui/react'
import Levelers from '../public/components/levelers';
import Content from '../public/components/content';
import Nav from '../public/components/nav';
import Info from '../public/components/info';

export default function Home() {
  const [navBar, setNavBar] = useState(false);
  const [home, setHome] = useState(true);
  const [info, setInfo] = useState(false);

  return (
    <div>
      <Head>
        <title>aaaaaaaa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {navBar && <Nav />}
        <ChakraProvider>
          <Content home={home} setHome={setHome} setInfo={setInfo} />
          <Info info={info} setHome={setHome} setInfo={setInfo} />
        </ChakraProvider>
      </main>

      <footer>

      </footer>

      <style jsx>{`

.f {
  width: 200px;
  height: 20px;
  background-color: blue;
}

      .circle{
        stroke-width: 10px;
        stroke-linecap: round;
        fill: transparent;
      }

      .left-bar-fixed {
        position: absolute;
        height: 100%;
        background-color: blue;
        width: 35vw;
      }

        .teste {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .header {
          font-size: 5rem;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: 'Aleo';
          margin: 0 auto;
        }
  
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Ubuntu;
          -ms-overflow-style: none;
          scrollbar-width: 0;
          background-color: #0D0D0D;
        }

      `}</style>
    </div >
  )
}
