import moon from "./moon2.jpg";
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
      className="text-center flex font-main relative mx-auto text-white justify-center h-screen"
      style={{
        maxWidth: maxWidth,
      }}
    >
      <img
        ref={ref}
        className="opacity-75 h-full object-cover object-center absolute"
        src={moon}
        alt="Taylor Landress"
      />
      {/* <div className="overflow-hidden relative"> */}
      <h1 className="text-4xl font-extralight absolute top-24 left-10 short:top-8 short:text-2xl">
        t a y l o r
      </h1>
      <h1 className="text-4xl font-extralight absolute right-10 top-80 short:top-8 short:text-2xl">
        l a n d r e s s
      </h1>
      {/* </div> */}
      <div className="grid gap-4 justify-center absolute bottom-24">
        {links.map((link, i) => (
          <Link key={i} {...link} i={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
