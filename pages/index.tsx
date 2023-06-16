import Head from "next/head";
import DVDLogo from "../components/dvd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function useWindowSize() {
  const [size, setSize] = useState<[number, number, boolean]>([0, 0, false]);
  useEffect(() => {
    let doit: ReturnType<typeof setTimeout>;
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight, true]);
      clearTimeout(doit);
      doit = setTimeout(
        () => setSize([window.innerWidth, window.innerHeight, false]),
        100
      );
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export default function Home() {
  const router = useRouter();
  const [svgWidth, svgHeight, resizing] = useWindowSize();

  let { speed, embed, color } = router.query;

  useEffect(() => {
    if (!router.isReady) return;
    if (speed == undefined) {
      router.push({ query: { speed: 2 } });
    }
  });

  if (!router.isReady) {
    return (
      <Head>
        <title>DVD</title>
        <meta name="title" content="The Bouncing DVD Logo, but in React." />
        <meta
          name="description"
          content="The iconic bouncing DVD logo, now implemented in React."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dvd.jcde.xyz/" />
        <meta
          property="og:title"
          content="The Bouncing DVD Logo, but in React."
        />
        <meta
          property="og:description"
          content="The iconic bouncing DVD logo, now implemented in React."
        />
        <meta
          property="og:image"
          content="https://dvd.jcde.xyz/dvdlogo-export.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dvd.jcde.xyz/" />
        <meta
          property="twitter:title"
          content="The Bouncing DVD Logo, but in React."
        />
        <meta
          property="twitter:description"
          content="The iconic bouncing DVD logo, now implemented in React."
        />
        <meta
          property="twitter:image"
          content="https://dvd.jcde.xyz/dvdlogo-export.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    );
  }

  if (speed != undefined) {
    return (
      <div className="bg-black h-screen w-screen">
        <Head>
          <title>DVD Logo</title>
          <meta name="title" content="The Bouncing DVD Logo, but in React." />
          <meta
            name="description"
            content="The iconic bouncing DVD logo, now implemented in React."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://dvd.jcde.xyz/" />
          <meta
            property="og:title"
            content="The Bouncing DVD Logo, but in React."
          />
          <meta
            property="og:description"
            content="The iconic bouncing DVD logo, now implemented in React."
          />
          <meta
            property="og:image"
            content="https://dvd.jcde.xyz/dvdlogo-export.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://dvd.jcde.xyz/" />
          <meta
            property="twitter:title"
            content="The Bouncing DVD Logo, but in React."
          />
          <meta
            property="twitter:description"
            content="The iconic bouncing DVD logo, now implemented in React."
          />
          <meta
            property="twitter:image"
            content="https://dvd.jcde.xyz/dvdlogo-export.png"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <svg
          width={svgWidth}
          height={svgHeight}
          style={{ backgroundColor: "black" }}
          className="h-screen"
        >
          <DVDLogo
            width={svgWidth}
            height={svgHeight}
            color={color == "true"}
            speed={parseFloat(speed as string)}
            resizing={resizing}
          />
        </svg>
        {(embed as string) != "true" && (
          <div className="absolute bottom-10 right-12 flex flex-col text-xs gap-1 text-right">
            <span className="text-gray-300">
              <a
                href="https://github.com/jcdea/dvdlogo"
                className=" text-gray-300 border-b border-transparent hover:border-gray-300"
              >
                view source
              </a>
              {` `}on github
            </span>
            <span className="text-gray-300 ">
              inspired by{` `}
              <a
                href="https://github.com/andrewchmr/BouncingDVDLogoReactSVG"
                className=" text-gray-300 border-b border-transparent hover:border-gray-300"
              >
                Andriy Chemerynskiy
              </a>
            </span>
          </div>
        )}
      </div>
    );
  } else {
    return <></>;
  }
}

export { useWindowSize };
