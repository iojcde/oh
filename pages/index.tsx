import Head from 'next/head'
import DVDLogo from '../components/dvd'

let svgWidth:number
let svgHeight:number

export default function Home() {
  if (typeof window == 'undefined'){
    return <Head>
        <title>dvd logo thing</title>
        <meta name="description" content="dvd logo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  }
  svgHeight = window.innerHeight
  svgWidth = window.innerWidth

  return (
    <div className="h-screen flex items-center justify-center">
      <Head>
        <title>dvd logo thing</title>
        <meta name="description" content="dvd logo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <svg width={svgWidth} height={svgHeight} style={{ backgroundColor: 'black'}}  >
        <DVDLogo width={svgWidth} height={svgHeight} speed={2} />
      </svg>
    </div>
  )
}
