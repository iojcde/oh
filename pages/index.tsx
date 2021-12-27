import Head from 'next/head'
import DVDLogo from '../components/dvd'
import{ useRouter }from 'next/router'
import { useEffect, useState } from 'react'

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export default function Home() {
  const router = useRouter()
  const [svgWidth,svgHeight] = useWindowSize()

  let { speed } = router.query;
  useEffect(() => {
    if (speed == undefined){

      router.push({query:{speed:2}})
    }
  })

  if(!speed) {
    return <Head>
        <title>dvd logo thing</title>
        <meta name="description" content="dvd logo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  } 
  
  else{

    return (
      <div>
        <Head>
          <title>dvd logo</title>
          <meta name="description" content="dvd logo" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
     
        <svg width={svgWidth} height={svgHeight} style={{ backgroundColor: 'black'}}  >
          <DVDLogo width={svgWidth} height={svgHeight} speed={parseInt(speed as string)} />
        </svg>
      </div>
    )
  }
}

export {useWindowSize}
