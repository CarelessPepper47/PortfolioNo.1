import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center transition-all hover:m-10">
        <div className="m-4 h-10 w-10 bg-slate-400"></div>
        <div className="h-10 w-10 bg-slate-400"></div>
        <div className="h-10 w-10 bg-slate-400"></div>
        <div className="h-10 w-10 bg-slate-400"></div>
        <div className="h-10 w-10 bg-slate-400"></div>
        <div className="h-10 w-10 bg-red-400"></div>
        <div className="h-10 w-10 bg-red-400"></div>
        <div className="h-10 w-10 bg-red-400"></div>
        <div className="h-10 w-10 bg-red-400"></div>
      </div>
    </>
  );
}

export default App;
