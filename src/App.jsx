import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* hover:m-10 */}
      <header className="m-4 flex bg-green-100 p-5 transition-all">
        <nav className="flex w-full justify-around bg-blue-100 hover:justify-center">
          <div>
            <div>
              <img src="C:\Users\mtszr\Downloads\LogoAuto.jpg" alt="Logo" />
              Logo
            </div>
          </div>
          <div className="flex">
            <div className="">Home</div>
            <div className="">About</div>
            <div className="">Vehicle Models</div>
            <div className="">Testimonials</div>
            <div className="">Our Team</div>
            <div className="">Contact</div>
          </div>
          <div>
            <button className=" bg-white">Sign In</button>
            <button className=" bg-red-700 px-10 py-5 text-white">
              Register
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default App;
