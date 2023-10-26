import moon from "./moon2.jpg";
import bullet from "./moon_1.png";
import { links } from "../data";
import Link from "./Link";
import { useEffect, useRef, useState } from "react";

function App() {
  const ref = useRef<HTMLImageElement>(null);
  const [maxWidth, setMaxWidth] = useState<number>();

  useEffect(() => {
    setMaxWidth(ref.current ? ref.current.offsetWidth : 0);
  }, []);

  return (
    <div
      className="text-center font-main relative mx-auto text-white h-full"
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
      <div className="absolute grid justify-stretch items-center h-1/2 bottom-0 w-full z-10">
        {links.map((_, i) => (
          <img
            src={bullet}
            className={`max-w-[2rem] h-auto`}
            style={{
              justifySelf: i % 2 === 0 ? "start" : "end",
              marginLeft: i % 2 === 0 ? 20 : 0,
              marginRight: i % 2 === 1 ? 20 : 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
