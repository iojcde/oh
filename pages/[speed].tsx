import Head from 'next/head'
import DVDLogo from '../components/dvd'
import{ useRouter }from 'next/router'

let svgWidth:number
let svgHeight:number

export default function Home() {
  const router = useRouter()
  if (typeof window == 'undefined'){
    return <Head>
        <title>dvd logo thing</title>
        <meta name="description" content="dvd logo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  }
  svgHeight = window.innerHeight
  svgWidth = window.innerWidth
  const speed = router.query["speed"];
  if(!speed) {
    return <Head>
        <title>dvd logo thing</title>
        <meta name="description" content="dvd logo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  }
else{
  return (
    <div className="h-screen flex items-center justify-center">
      <Head>
        <title>dvd logo</title>
        <meta name="description" content="dvd logo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <svg width={svgWidth} height={svgHeight} style={{ backgroundColor: 'black'}}  >
        <DVDLogo width={svgWidth} height={svgHeight} speed={parseInt(speed as string)} />
      </svg>
    </div>
  )}
}
