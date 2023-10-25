import bullet from "./bullet.png";
import enough from "./enough.jpg";
import moon from "./moon2.jpg";
import { links } from "../data";
import Link from "./Link";

function App() {
  return (
    <div className="text-center flex font-main text-white justify-center h-screen">
      <img
        className="opacity-75 h-full object-cover object-center absolute"
        src={moon}
        alt="Taylor Landress"
      />
      {/* <img
        className="opacity-75 absolute"
        src={taylorImg}
        alt="Taylor Landress"
      /> */}
      <div className="overflow-hidden relative">
        <h1 className="text-4xl font-extralight fixed top-24 left-10">
          t a y l o r
        </h1>
        <h1 className="text-4xl font-extralight fixed right-10 top-80">
          l a n d r e s s
        </h1>
      </div>
      <div className="grid gap-4 justify-center absolute bottom-24">
        {links.map((link, i) => (
          <Link {...link} i={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
