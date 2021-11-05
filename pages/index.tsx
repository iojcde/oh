import Head from 'next/head'
import DVDLogo from '../components/bounce'

export default function Home() {

  const svgWidth = 1000
  const svgHeight = 800

  return (
    <div className="h-screen flex items-center justify-center">
      <Head>
        <title>wtf hammy</title>
        <meta name="description" content="hammy wtf" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <svg width={svgWidth} height={svgHeight} style={{ backgroundColor: 'black'}}  >
        <DVDLogo width={svgWidth} height={svgHeight} />
      </svg>
    </div>
  )
}