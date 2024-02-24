import { useEffect, useRef, useState } from "react";
import { links } from "../data";
import Link from "./Link";
import moon from "./moon.jpg";

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
        className="opacity-75 h-full mx-auto object-cover object-center"
        src={moon}
        alt="moon"
      />

      <div
        className="text-center w-full font-main inset-0 mx-auto absolute transition-opacity text-white h-full"
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
          <h1 className="text-4xl font-extralight top-14 left-8 absolute short:text-3xl">
            t a y l o r
          </h1>
          <h1 className="text-4xl font-extralight absolute right-8 bottom-11 short:text-3xl">
            l a n d r e s s
          </h1>
        </div>
        <div
          className="h-1/2 flex justify-center items-center relative"
          style={{
            maxWidth: maxWidth,
          }}
        >
          <div className="grid gap-4 justify-center z-20">
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
