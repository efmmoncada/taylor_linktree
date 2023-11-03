import moon from "./moon.jpg";
import { links } from "../data";
import Link from "./Link";
import { useEffect, useRef, useState } from "react";

function App() {
  const ref = useRef<HTMLImageElement>(null);
  const [maxWidth, setMaxWidth] = useState<number>();

  useEffect(() => {
    setTimeout(() => {
      setMaxWidth(ref.current ? ref.current.offsetWidth : 0);
    }, 500);
  }, []);

  return (
    <div
      className="text-center font-main relative mx-auto text-white h-full w-full"
      style={{
        maxWidth: maxWidth,
      }}
    >
      <img
        ref={ref}
        className="opacity-75 h-full object-cover object-center absolute"
        src={moon}
        alt="moon"
      />
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
  );
}

export default App;
