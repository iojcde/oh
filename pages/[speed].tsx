import Head from 'next/head'
import { useState } from 'react'
import DVDLogo from '../components/dvd'
import{ useRouter }from 'next/router'

export default function Home() {

  const svgWidth = 1000
  const svgHeight = 800
  const router = useRouter()
  const speed = router.query["speed"];
  if(!speed) {
    return <></>;
  }
else{
  return (
    <div className="h-screen flex items-center justify-center">
      <Head>
        <title>wtf hammy</title>
        <meta name="description" content="hammy wtf" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <svg width={svgWidth} height={svgHeight} style={{ backgroundColor: 'black'}}  >
        <DVDLogo width={svgWidth} height={svgHeight} speed={parseInt(speed as string)} />
      </svg>
    </div>
  )}
}