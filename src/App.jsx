import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* hover:m-10 */}
      <header className="m-4 flex bg-green-100 p-5 font-semibold transition-all">
        <nav className="flex w-full justify-around bg-blue-100">
          <div>
            <div>
              <img
                class="h-12 w-12"
                src="C:\Users\mtszr\Downloads\LogoAuto.jpg"
                alt="Logo"
              />
            </div>
            <p>
              <span className="text-lg">CAR</span>Rental
            </p>
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
            <button className=" bg-red-700 px-5 py-2.5 text-white">
              Register
            </button>
          </div>
        </nav>
      </header>
      <div class="mx-auto flex max-w-sm items-center space-x-4 rounded-xl bg-pink-500 p-6 shadow-lg">
        <div class="shrink-0">
          <img
            class="h-12 w-12"
            src="C:\Users\mtszr\Downloads\LogoAuto.jpg"
            alt="ChitChat Logo"
          />
        </div>
        <div>
          <div class="text-xl font-medium text-black">ChitChat</div>
          <p class="text-slate-500">You have a new message!</p>
        </div>
      </div>
    </>
  );
}

export default App;
