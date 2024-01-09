import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import zdjecie from "./assets/Logo.png";
import volk from "./assets/Volks.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* hover:m-10 */}
      <header className="m-4 flex bg-green-100 p-5 font-semibold transition-all">
        <nav className="flex w-full items-center justify-around bg-blue-100">
          <div className="flex space-x-1">
            <div>
              <img class="w-40" src={zdjecie} alt="Logo" />
            </div>
          </div>
          <div className="flex space-x-6 py-8 text-center">
            <div className="">Home</div>
            <div className="">About</div>
            <div className="">Vehicle Models</div>
            <div className="">Testimonials</div>
            <div className="">Our Team</div>
            <div className="">Contact</div>
          </div>
          <div className="py-5">
            <button className=" bg-white px-5 py-2.5">Sign In</button>
            <button className=" bg-red-700 px-5 py-2.5 text-white shadow-md shadow-black/50">
              Register
            </button>
          </div>
        </nav>
      </header>

      {/* <div class="mx-auto flex max-w-sm items-center space-x-4 rounded-xl bg-pink-500 p-6 shadow-lg">
        <div class="shrink-0">
          <img class="h-12 w-12" src={zdjecie} alt="ChitChat Logo" />
        </div>
        <div>
          <div class="text-xl font-medium text-black">ChitChat</div>
          <p class="text-slate-500">You have a new message!</p>
        </div>
      </div> */}

      {/* <div className="flex h-screen w-full flex-col items-center justify-center bg-purple-300">
        <div className="m-2 flex h-10 w-10 items-center justify-center bg-black text-white">
          1
        </div>
        <div className="m-2 flex h-10 w-10 items-center justify-center bg-black text-white">
          2
        </div>
        <div className="m-2 flex h-10 w-10 items-center justify-center bg-black text-white">
          3
        </div>
        <div className="m-2 flex h-10 w-10 items-center justify-center bg-black text-white">
          4
        </div>

      </div> */}
      <div className="flex h-screen w-full items-center justify-center bg-purple-300">
        <div>
          <div className="m-2 flex h-10 w-10 items-center justify-center bg-black text-white">
            1
          </div>
          <div className="m-2 flex h-10 w-10 items-center justify-center bg-black text-white">
            1
          </div>
          <div className="m-2 flex h-10 w-10 items-center justify-center bg-black text-white">
            1
          </div>
        </div>
        <div>
          <div className="m-2 flex h-10 w-10 items-center justify-center bg-black text-white">
            2
          </div>
          <div className="m-2 flex h-10 w-10 items-center justify-center bg-black text-white">
            2
          </div>
          <div className="m-2 flex h-10 w-10 items-center justify-center bg-black text-white">
            2
          </div>
        </div>
        <div>
          <div className="m-2 flex h-10 w-10 items-center justify-center bg-black text-white">
            3
          </div>
          <div className="m-2 flex h-10 w-10 items-center justify-center bg-black text-white">
            3
          </div>
          <div className="m-2 flex h-10 w-10 items-center justify-center bg-black text-white">
            3
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
