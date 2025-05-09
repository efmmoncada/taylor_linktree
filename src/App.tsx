import { useEffect, useRef, useState } from "react";
import { links } from "../data";
import Link from "./Link";
import background from "./background.jpeg";

function App() {
  const ref = useRef<HTMLImageElement>(null);
  const [maxWidth, setMaxWidth] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setMaxWidth(ref.current ? ref.current.offsetWidth : 0);
    }, 250);
  }, [ref.current]);

  return (
    <>
      <img
        ref={ref}
        className="mx-auto h-full object-cover object-center opacity-75"
        src={background}
        alt="neon lights"
      />

      <div
        className="absolute inset-0 mx-auto h-full w-full text-center font-main text-white transition-opacity"
        style={{
          maxWidth: maxWidth,
          opacity: maxWidth === 0 ? 0 : 1,
        }}
      >
        <div
          className="relative h-1/2"
          style={{
            maxWidth: maxWidth,
          }}
        >
          <h1 className="absolute left-8 top-14 text-4xl font-extralight short:text-3xl">
            t a y l o r
          </h1>
          <h1 className="absolute bottom-11 right-8 text-4xl font-extralight short:text-3xl">
            l a n d r e s s
          </h1>
        </div>
        <div
          className="relative flex h-1/2 items-center justify-center"
          style={{
            maxWidth: maxWidth,
          }}
        >
          <div className="z-20 grid justify-center gap-4">
            {links.map((link, i) => (
              <Link key={i} {...link} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
