import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import zdjecie from "./assets/Logo.png";
import volk from "./assets/Volks.png";
import check from "./assets/Check.png";
import backg from "./assets/BG.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* hover:m-10 */}
      <header className="m-4 flex p-5 font-semibold transition-all">
        <nav className="flex w-full items-center justify-around">
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
            <button className=" bg-[#ff4d30] px-5 py-2.5 text-white shadow-md shadow-black/30">
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
      {/* <div className="h-100 w-100 flex items-center justify-center bg-purple-300">
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
      </div> */}
      <main className="bg-white/50">
        <article className="mx-5 flex font-bold">
          <div className="flex flex-col justify-center">
            <div className="text-lg">Plan your trip now</div>
            <div className="text-5xl">
              Save <span className="text-[#ff4d30]">big</span> with our car
              rental
            </div>
            <div className="my-4 text-black/60">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more
            </div>
            <div className="flex">
              <button className="m-7 flex bg-[#ff4d30] p-4 text-white">
                Book Ride <img className="mx-1 h-4 w-4" src={check} alt="jo" />
              </button>
              <button className="m-7 bg-black p-4 text-white">
                Learn More &#62;
              </button>
            </div>
          </div>
          <div>
            <img src={volk} alt="volks" />
          </div>
        </article>
      </main>
    </>
  );
}

export default App;
