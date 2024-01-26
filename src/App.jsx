import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import zdjecie from "./assets/Logo.png";
import volk from "./assets/Volks.png";
import check from "./assets/Check.png";
import backg from "./assets/BG.png";
import select from "./assets/Select.jpg";
import contact from "./assets/Contact.jpg";
import drive from "./assets/Drive.jpg";
import models from "./data.js";
import tlo2 from "./assets/WiecejTlo.png";
import ccd from "./assets/CCD.jpg";
import nhc from "./assets/NHC.jpg";
import aip from "./assets/AIP.jpg";
import sladyopon from "./assets/SladyOpon.png";
import heri from "./assets/Heri.jpg";
import ron from "./assets/Ron.jpg";
import faqcar from "./assets/faqcar.png";
import droga from "./assets/Droga.png";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function App() {
  const [parent] = useAutoAnimate();
  const [zero, setZero] = useState(0);
  const [dark, setDark] = useState(false);
  const [collapse, setCollapse] = useState(false);

  function nowaFunkcja(morel) {
    setZero(morel);
  }

  const zmienDark = () => {
    setDark(!dark);
  };

  const zmienCollapse = () => {
    console.log("zjeb");
    setCollapse(!collapse);
  };

  // !!!!!!!!!!!!!!!!!!!!! robienie przyciskow toggle do faq
  const [isToggled, setToggle] = useState(true);
  const [isFaq, setFaq] = useState(true);
  const [isFaqqed, setFaqqed] = useState(true);
  const handleToggle = () => {
    setToggle(!isToggled);
  };
  const handleFaq = () => {
    setFaq(!isFaq);
  };
  const toggleFaq = () => {
    setFaqqed(!isFaqqed);
  };

  // const toggleFaq = () => {
  //   const [isToggled, setToggle] = useState(false);

  //   const handleToggle = () => {
  //     setToggle(!isToggled);
  //   };
  // };

  // return <button onClick={handleToggle}>{isToggled ? "ON" : "OFF"}</button>;

  // UCZONKO JS

  // definiowanie zmiennych

  // string
  let dupa1 = "pięć";
  // boolean
  let dupa2 = true;
  // number
  let dupa3 = 2;
  // array
  let dupa4 = [1, 2, dupa1, true];
  // object
  let dupaobject = { klucz1: "wartość", ryj1: "jop", ryj2: "aha" };

  let numer = 0;

  // consolujemy

  console.log(dupa4[2]);
  console.log(dupaobject);
  console.log(dupaobject.klucz1);
  console.log(models[2].year);

  // SAMOCHÓD

  return (
    <div className={`${dark ? "dark" : ""}`}>
      {/* hover:m-10 */}
      <img
        id="home"
        src={backg}
        alt="tlo"
        className="absolute right-0 z-0 hidden lg:block "
      />
      <header
        ref={parent}
        className="relative z-10 p-5 font-semibold md:flex-col lg:flex dark:bg-slate-700"
      >
        <nav className="relative z-10 hidden w-full items-center justify-around lg:flex dark:bg-slate-700 dark:text-white">
          <img class="w-40" src={zdjecie} alt="Logo" />
          <div className="flex space-x-6 py-8 text-center">
            <div className="">Home</div>
            <div className="">About</div>
            <div className="">Vehicle Models</div>
            <div className="">Testimonials</div>
            <div className="">Our Team</div>
            <div className="">Contact</div>
            <div>
              <button
                onClick={() => {
                  zmienDark();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-eclipse"
                  className=""
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a7 7 0 1 0 10 10" />
                </svg>
              </button>
            </div>
          </div>
          <div className="py-5">
            <button className="px-5 py-2.5">Sign In</button>
            <button className=" bg-[#ff4d30] px-5 py-2.5 text-white shadow-md shadow-black/30">
              Register
            </button>
          </div>
        </nav>
        <svg
          onClick={() => {
            zmienCollapse();
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-menu"
          className="mt-5 flex lg:hidden"
        >
          {collapse ? (
            <path d="M18 6 6 18 M6 6 18 18" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
        {collapse ? (
          <nav className="flex w-full flex-col items-center justify-around lg:hidden dark:bg-slate-700 dark:text-white">
            <img class="w-40" src={zdjecie} alt="Logo" />
            <div className="flex flex-col space-y-6 pt-4 text-center">
              <div className="">Home</div>
              <div className="">About</div>
              <div className="">Vehicle Models</div>
              <div className="">Testimonials</div>
              <div className="">Our Team</div>
              <div className="">Contact</div>
              <div>
                <button
                  onClick={() => {
                    zmienDark();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-eclipse"
                    className=""
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a7 7 0 1 0 10 10" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <button className="px-5 py-2.5">Sign In</button>
              <button className=" bg-[#ff4d30] px-5 py-2.5 text-white shadow-md shadow-black/30">
                Register
              </button>
            </div>
          </nav>
        ) : null}
      </header>
      <main className="z-10 mt-10 bg-[#FFF] dark:bg-slate-700">
        <button className="fixed bottom-0 right-0 z-30 m-10 scale-75 rounded-full bg-[#ff4d30] p-1 text-white lg:scale-100">
          <a href="#home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-up-to-line"
            >
              <path d="M5 3h14" />
              <path d="m18 13-6-6-6 6" />
              <path d="M12 7v14" />
            </svg>
          </a>
        </button>
        <article className="mb-10 flex flex-col font-bold md:flex-row lg:mx-5 lg:mb-0">
          <div className="flex flex-col justify-center lg:ml-10">
            <div className="m-3 text-3xl">Plan your trip now</div>
            <div className="m-3 text-5xl">
              Save <span className="text-[#ff4d30]">big</span> with our car
              rental
            </div>
            <div className="m-3 mt-4 w-full text-left font-medium text-black/60">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more
            </div>
            <div className="mt-10 flex flex-col gap-5 lg:flex-row">
              <button className="flex justify-center gap-2 bg-[#ff4d30] p-6 text-white lg:rounded">
                Book Ride
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="tabler-icon tabler-icon-circle-check"
                  className="mr-2"
                >
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                  <path d="M9 12l2 2l4 -4"></path>
                </svg>
              </button>
              <button className="git flex justify-center bg-black p-6 text-white lg:rounded">
                Learn More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="tabler-icon tabler-icon-chevron-right"
                >
                  <path d="M9 6l6 6l-6 6"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="">
            <img src={volk} alt="volks" className="relative hidden lg:flex" />
          </div>
        </article>
        <section className="relative h-fit w-full">
          <form
            className="flex flex-col gap-3 shadow-2xl lg:m-10 lg:mb-20 lg:p-20"
            action=""
          >
            <h2 className="text-2xl font-bold lg:mb-2">Book a Car</h2>
            <div className="flex flex-col gap-3 lg:flex-row">
              <div className="lg:w-1/3">
                <label
                  htmlFor=""
                  for="AutoChoice"
                  className="mb-3 flex font-semibold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="input-icon"
                  >
                    <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
                  </svg>
                  &nbsp; Select Your Car Type
                </label>
                <select
                  name=""
                  id="AutoChoice"
                  className="w-full  border-2 px-5 py-2 text-[#ababab]"
                >
                  <option>Select your car type</option>
                  <option value="Audi">Audi</option>
                  <option value="VW">VW</option>
                  <option value="Toyota">Toyota</option>
                  <option value="BMW">BMW</option>
                  <option value="Mercedes">Mercedes</option>
                </select>
              </div>
              <div className="lg:w-1/3">
                <label
                  htmlFor=""
                  for="PickUpChoice"
                  className="mb-3 flex  font-semibold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="input-icon"
                  >
                    <path
                      d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                      fill="currentColor"
                      stroke-width="0"
                    ></path>
                  </svg>
                  &nbsp; Pick-Up
                </label>
                <select
                  name=""
                  id="PickUpChoice"
                  className="w-full border-2 px-5 py-2 text-[#ababab]"
                >
                  <option>Select pick up location</option>
                  <option value="Gdansk">Gdańsk</option>
                  <option value="Tczew">Tczew</option>
                  <option value="Warszawa">Warszawa</option>
                  <option value="Wroclaw">Wrocław</option>
                  <option value="Krakow">Kraków</option>
                </select>
              </div>
              <div className="lg:w-1/3">
                <label
                  htmlFor=""
                  for="DropOffChoice"
                  className="mb-3 flex font-semibold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="input-icon"
                  >
                    <path
                      d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                      fill="currentColor"
                      stroke-width="0"
                    ></path>
                  </svg>
                  &nbsp; Drop Off
                </label>
                <select
                  name=""
                  id="DropOffChoice"
                  className="w-full border-2 px-5 py-2 text-[#ababab]"
                >
                  <option>Select drop off location</option>
                  <option value="Gdansk">Gdańsk</option>
                  <option value="Tczew">Tczew</option>
                  <option value="Warszawa">Warszawa</option>
                  <option value="Wroclaw">Wrocław</option>
                  <option value="Krakow">Kraków</option>
                </select>
              </div>
            </div>
            <div className="flex w-full flex-col gap-3 lg:flex-row">
              <div className="lg:w-1/3">
                <label
                  htmlFor=""
                  for="PickUpChoice"
                  className="mb-3 flex  font-semibold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="input-icon"
                  >
                    <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M16 3l0 4"></path>
                    <path d="M8 3l0 4"></path>
                    <path d="M4 11l16 0"></path>
                    <path d="M8 15h2v2h-2z"></path>
                  </svg>
                  &nbsp; Pick-Up
                </label>
                <input
                  type="date"
                  id="PickUpChoice"
                  className="w-full border-2 px-5 py-2 text-[#ababab]"
                />
              </div>
              <div className="lg:w-1/3">
                <label
                  htmlFor=""
                  for="DropOffDay"
                  className="mb-3 flex font-semibold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="input-icon"
                  >
                    <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M16 3l0 4"></path>
                    <path d="M8 3l0 4"></path>
                    <path d="M4 11l16 0"></path>
                    <path d="M8 15h2v2h-2z"></path>
                  </svg>
                  &nbsp; Drop Off
                </label>
                <input
                  type="date"
                  id="DropOffDay"
                  className="w-full border-2 px-5 py-2  text-[#ababab]"
                />
              </div>
              <div className="flex flex-col justify-end shadow-lg sm:h-[10vh] sm:w-full lg:w-1/3">
                <button className="h-2/3 w-full bg-[#ff4d30] py-5 text-lg font-bold text-white shadow-white lg:py-0">
                  Search
                </button>
              </div>
            </div>
          </form>
          <div className="my-10 lg:my-20 lg:mb-20">
            <h2 className="text-center text-2xl font-semibold">
              Plan your trip now
            </h2>
            <h1 className="text-center text-5xl font-bold">
              Quick & easy car rental
            </h1>
          </div>

          <div className="flex w-full flex-col justify-center lg:flex-row lg:gap-20 lg:px-20">
            <div className="flex flex-1 flex-col items-center">
              <img src={select} alt="select" />
              <h2 className="mb-5 text-xl font-bold">Select Car</h2>
              <p className="max-w-xs text-center text-black/50">
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs
              </p>
            </div>
            <div className="flex flex-1 flex-col items-center">
              <img src={contact} alt="contact" />
              <h2 className="mb-5 text-xl font-bold">Contact Operator</h2>
              <p className="max-w-xs text-center text-black/50">
                Our knowledgeable and friendly operators are always ready to
                help with any questions or concerns
              </p>
            </div>
            <div className="flex flex-1 flex-col items-center">
              <img src={drive} alt="drive" className="mb-5" />
              <h2 className="mb-5 text-xl font-bold">Let's Drive</h2>
              <p className="max-w-xs text-center text-black/50">
                Whether you're hitting the open road, we've got you covered with
                our wide range of cars
              </p>
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-center lg:flex-row">
            <div className="lg:w-1/2 lg:px-20">
              <h2 className="text-center text-lg font-semibold">
                Vehicle Models
              </h2>
              <h1 className="text-center text-4xl font-bold">
                Our rental fleet
              </h1>
              <p className="space-x-10 px-10 py-5 text-center text-black/50">
                Choose from a variety of our amazing vehicles to rent for your
                next adventure or business trip
              </p>

              {/* tutaj kolejny div wleci, tym razem z lista, wiec obczaic jak sie robi liste. 3 kolumny, po lewej lista, srodek to fotka, po prawej rysopis */}
            </div>
          </div>
          <section className="mb-20 flex h-fit w-full flex-col items-center lg:flex-row">
            {/* kolumna z przyciskami JS */}
            <div className="flex h-fit w-full flex-col gap-2 px-3 text-xl font-bold lg:w-1/4 lg:flex-col lg:justify-center lg:px-0 lg:pl-10">
              <div className="flex justify-between gap-2 lg:flex-col">
                <button
                  onClick={() => {
                    nowaFunkcja(0);
                  }}
                  className="w-full bg-[#e9e9e9] p-5 transition-all hover:bg-[#ff4d30] hover:text-white"
                  id="auto1"
                >
                  Audi
                </button>
                <button
                  onClick={() => {
                    nowaFunkcja(1);
                  }}
                  className="w-full bg-[#e9e9e9] p-5 transition-all hover:bg-[#ff4d30] hover:text-white lg:block"
                  id="auto2"
                >
                  VW
                </button>
                <button
                  onClick={() => {
                    nowaFunkcja(2);
                  }}
                  className="w-full bg-[#e9e9e9] p-5 transition-all hover:bg-[#ff4d30] hover:text-white lg:block"
                  id="auto3"
                >
                  Toyota
                </button>
              </div>
              <div className="flex justify-between gap-2 lg:flex-col">
                <button
                  onClick={() => {
                    nowaFunkcja(3);
                  }}
                  className="w-full bg-[#e9e9e9] p-5 transition-all hover:bg-[#ff4d30] hover:text-white lg:block"
                  id="auto4"
                >
                  BMW
                </button>
                <button
                  onClick={() => {
                    nowaFunkcja(4);
                  }}
                  className="w-full bg-[#e9e9e9] p-5 transition-all hover:bg-[#ff4d30] hover:text-white lg:block"
                  id="auto5"
                >
                  Mercedes
                </button>
                <button
                  onClick={() => {
                    nowaFunkcja(5);
                  }}
                  className="w-full bg-[#e9e9e9] p-5 transition-all hover:bg-[#ff4d30] hover:text-white lg:block"
                  id="auto6"
                >
                  Passat
                </button>
              </div>
            </div>
            {/* kolumna ze zmieniajacymi sie fotkami aut */}
            <div className="m-10 flex h-min justify-center lg:w-1/2">
              <img src={models[zero].img} alt="auto1" />
            </div>
            {/* kolumna z tabelkami */}
            <div className="mx-3 flex h-fit w-full flex-col gap-2 lg:w-1/4 lg:pr-10">
              <div className="">
                <div className="flex items-center justify-center gap-3 bg-[#ff4d30] p-3 text-white">
                  <span className="text-2xl font-bold">
                    ${models[zero].price}
                  </span>
                  /rent per day
                </div>
                <div className="border-2 border-[#706f7b] border-t-[#ff4d30]">
                  <div className="divide-gray flex divide-x-2 divide-solid divide-[#706f7b] border-b-2 border-[#706f7b] p-3 text-center">
                    <div className="w-1/2">Model</div>
                    <div className="w-1/2">{models[zero].brand}</div>
                  </div>
                  <div className="divide-gray flex divide-x-2 divide-solid divide-[#706f7b] border-b-2 border-[#706f7b] p-3 text-center">
                    <div className="w-1/2">Mark</div>
                    <div className="w-1/2">{models[zero].model}</div>
                  </div>
                  <div className="divide-gray flex divide-x-2 divide-solid divide-[#706f7b] border-b-2 border-[#706f7b] p-3 text-center">
                    <div className="w-1/2">Year</div>
                    <div className="w-1/2">{models[zero].year}</div>
                  </div>
                  <div className="divide-gray flex divide-x-2 divide-solid divide-[#706f7b] border-b-2 border-[#706f7b] p-3 text-center">
                    <div className="w-1/2">Doors</div>
                    <div className="w-1/2">{models[zero].doors}</div>
                  </div>
                  <div className="divide-gray flex divide-x-2 divide-solid divide-[#706f7b] border-b-2 border-[#706f7b] p-3 text-center">
                    <div className="w-1/2">AC</div>
                    <div className="w-1/2">
                      {models[zero].AC ? "Yes" : "No"}
                    </div>
                  </div>
                  <div className="divide-gray flex divide-x-2 divide-solid divide-[#706f7b] border-b-2 border-[#706f7b] p-3 text-center">
                    <div className="w-1/2">Transmission</div>
                    <div className="w-1/2">{models[zero].transmission}</div>
                  </div>
                  <div className="divide-gray flex divide-x-2 divide-solid divide-[#706f7b] p-3 text-center">
                    <div className="w-1/2">Fuel</div>
                    <div className="w-1/2">{models[zero].fuel}</div>
                  </div>
                </div>
              </div>
              <button className="bg-[#ff4d30] p-3 text-lg font-bold text-white shadow-[5px_5px_0_0_rgba(0,0,0,.2)] duration-150 hover:brightness-95 active:scale-95 active:shadow-none lg:mt-2">
                RESERVE NOW
              </button>
            </div>
          </section>
          <section className="flex h-fit flex-col items-center justify-center gap-5 bg-[#2d2d2d]">
            <div className="py-[45px] lg:space-y-5">
              <h1 className="mx-auto text-center text-3xl font-bold text-white lg:text-6xl">
                Save big with our cheap car rental!
              </h1>
              <p className="mx-auto mt-5 w-[80%] text-center text-white lg:mt-0 lg:w-full lg:text-3xl">
                Top Airports. Local Suppliers.{" "}
                <span className="text-[#ff4d30]">24/7</span> Support.
              </p>
            </div>
          </section>

          <img src={tlo2} alt="tlo2" className="mx-auto my-10" />
          <div className="relative mb-5 flex flex-col lg:mb-0 lg:flex-row">
            <img
              src={sladyopon}
              alt="sladyopon"
              className="absolute -top-[300px] z-0 hidden h-[738px] w-[80%] lg:block"
            />
            <div className="w-full gap-5 lg:w-1/2 lg:px-10 lg:pl-40">
              <h2 className="text-center text-xl font-bold lg:text-left">
                Why Choose Us
              </h2>
              <h1 className="mt-4 text-center text-3xl font-bold lg:text-left lg:text-5xl">
                Best valued deals you will ever find
              </h1>
              <p className="mt-5 px-5 text-[#706f7b] lg:px-0">
                Discover the best deals you'll ever find with our unbeatable
                offers. We're dedicated to providing you with the best value for
                your money, so you can enjoy top-quality services and products
                without breaking the bank. Our deals are designed to give you
                the ultimate renting experience, so don't miss out on your
                chance to save big.
              </p>
              <button className="mx-auto my-10 mt-5 flex w-full justify-center bg-[#ff4d30] py-4 font-bold text-white lg:mx-0 lg:w-[35%] lg:rounded lg:px-6">
                Find Details{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="tabler-icon tabler-icon-chevron-right"
                >
                  <path d="M9 6l6 6l-6 6"></path>
                </svg>
              </button>
            </div>
            <div className="w-full space-y-10 lg:w-1/2">
              {/* <img
                src={sladyopon}
                alt="sladyopon"
                className="absolute bottom-20 z-0"
              />
              <img
                src={sladyopon}
                alt="sladyopon"
                className="absolute bottom-20 left-0 z-0"
              /> */}
              <div className="flex flex-col gap-3 px-5 lg:flex-row lg:px-20">
                <img src={ccd} alt="ccd" className="px-20 lg:px-0" />
                <div>
                  <h1 className="text-center text-2xl font-bold lg:text-left">
                    Cross Country Drive
                  </h1>
                  <p className="text-center text-[#706f7b] lg:w-[75%] lg:text-left">
                    Take your driving experience to the next level with our
                    top-notch vehicles for your cross-country adventures.
                  </p>
                </div>
              </div>
              <div className="flex  flex-col gap-3 px-5 lg:flex-row lg:px-20">
                <img src={aip} alt="aip" className="px-20 lg:px-0" />
                <div>
                  <h1 className="text-center text-2xl font-bold lg:text-left">
                    All Inclusive Pricing
                  </h1>
                  <p className="text-center text-[#706f7b] lg:w-[77%] lg:text-left">
                    Get everything you need in one convenient, transparent price
                    with our all-inclusive pricing policy.
                  </p>
                </div>
              </div>
              <div className="flex  flex-col gap-3 px-5 lg:flex-row lg:px-20">
                <img src={nhc} alt="nhc" className="px-20 lg:px-0" />
                <div>
                  <h1 className="text-center text-2xl font-bold lg:text-left">
                    No Hidden Charges
                  </h1>
                  <p className="text-center text-[#706f7b] lg:w-[75%] lg:text-left">
                    Enjoy peace of mind with our no hidden charges policy. We
                    believe in transparent and honest pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-fit w-full flex-col bg-[#f8f8f8] pb-10 pt-10 lg:mt-10 lg:pb-40 lg:pt-20">
            <div className="mx-auto w-[80%] text-center lg:w-1/2">
              <h2 className="text-center text-lg font-semibold lg:text-xl">
                Reviewed by People
              </h2>
              <h1 className="mt-2 text-3xl font-bold lg:text-5xl">
                Client's Testimonials
              </h1>
              <p className="mt-4 text-[#706f7b]">
                Discover the positive impact we've made on the our clients by
                reading through their testimonials. Our clients have experienced
                our service and results, and they're eager to share their
                positive experiences with you.
              </p>
            </div>
            <div className="relative z-20 flex flex-col justify-center lg:flex-row  lg:gap-5">
              <div className="mt-20 h-fit border-white bg-white p-10 text-left text-xl shadow-md lg:ml-[10%] lg:w-[60%]">
                <p className="mt-5 text-sm font-semibold lg:text-xl">
                  "We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable. "
                </p>
                <div className="mt-10 flex justify-around lg:mt-20 lg:gap-20">
                  <div className="flex">
                    <img
                      src={heri}
                      alt="heri"
                      className="mt-4 h-[60%] w-[20%] rounded-full lg:h-20 lg:w-20"
                    />
                    <div className="ml-2  mt-3 lg:ml-5">
                      <h1 className="text-[80%] font-bold lg:text-[100%]">
                        Heri Porter
                      </h1>
                      <p className="text-[12px] lg:text-[16px]">
                        Pruszcz Gdański
                      </p>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="tabler-icon tabler-icon-quote"
                    className="mt-3  text-[#ff4d30]"
                  >
                    <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                    <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                  </svg>
                </div>
              </div>
              <div className="mt-20 h-fit border-white bg-white p-10 text-left text-xl shadow-md lg:mr-[10%] lg:w-[60%]">
                <p className="mt-5 text-sm font-semibold lg:text-xl">
                  "The car was in great condition and made our trip even better.
                  Highly recommend for this car rental website!"
                </p>
                <div className="mt-10 flex justify-around  lg:mt-20 lg:gap-20">
                  <div className="flex">
                    <img
                      src={ron}
                      alt="ron"
                      className="mt-4 h-[65%] w-[20%] rounded-full lg:h-20 lg:w-20"
                    />
                    <div className="ml-2 mt-3 lg:ml-5">
                      <h1 className=" text-[80%] font-bold lg:text-[100%]">
                        Roland Wololo
                      </h1>
                      <p className="text-[12px] lg:text-[16px]">Wroclove</p>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="tabler-icon tabler-icon-quote"
                    className="mt-3 w-40 text-[#ff4d30] lg:w-20"
                  >
                    <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                    <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative z-10 flex h-screen w-full flex-col items-center gap-10 bg-white lg:gap-20">
          <div className="space-y-5 text-center lg:space-y-10">
            <h5 className="pt-10 text-2xl font-bold lg:pt-20">FAQ</h5>
            <h1 className="mx-auto w-[70%] text-2xl font-bold lg:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto w-[80%]">
              Frequently Asked Questions About the Car Rental Booking Process on
              Our Website: Answers to Common Concerns and Inquiries.
            </p>
          </div>
          <div className="relative z-10 flex flex-col bg-white/[80%] shadow-md shadow-black/50 lg:w-[60%]">
            {/* <button
                onClick={() => {
                  nowaFunkcja(3);
                }} */}
            <button
              onClick={() => {
                handleToggle();
              }}
              className="flex h-fit flex-col justify-between p-2 text-left text-lg font-semibold transition-all active:bg-[#ff4d30] active:text-white lg:p-5 lg:px-10"
            >
              <span className="flex w-full justify-between text-xs lg:text-lg">
                1.&#160;
                <span className="w-[85%] lg:w-[100%]">
                  What is special about comparing rental car deals?
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="tabler-icon tabler-icon-chevron-down"
                  className=""
                >
                  <path d="M6 9l6 6l6 -6"></path>
                </svg>
              </span>
              <div
                className={`${
                  isToggled ? "hidden" : "flex"
                } mt-1 px-5 text-xs font-thin lg:mt-0 lg:text-base `}
              >
                Comparing rental car deals is important as it helps find the
                best deal that fits your budget and requirements, ensuring you
                get the most value for your money. By comparing various options,
                you can find deals that offer lower prices, additional services,
                or better car models. You can find car rental deals by
                researching online and comparing prices from different rental
                companies.
              </div>
            </button>
            <button
              onClick={() => {
                handleFaq();
              }}
              className="flex h-fit flex-col items-center justify-between  p-2 text-left text-lg font-semibold transition-all active:bg-[#ff4d30] active:text-white lg:p-5 lg:px-10"
            >
              <span className="flex w-full justify-between text-xs lg:text-lg">
                2. How do I find the car rental deals?{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="tabler-icon tabler-icon-chevron-down"
                  className=""
                >
                  <path d="M6 9l6 6l6 -6"></path>
                </svg>
              </span>
              <div
                className={`${
                  isFaq ? "hidden" : "flex"
                } px-5 text-xs font-thin lg:text-base`}
              >
                You can find car rental deals by researching online and
                comparing prices from different rental companies. Websites such
                as Expedia, Kayak, and Travelocity allow you to compare prices
                and view available rental options. It is also recommended to
                sign up for email newsletters and follow rental car companies on
                social media to be informed of any special deals or promotions.
              </div>
            </button>
            <button
              onClick={() => {
                toggleFaq();
              }}
              className="flex h-fit flex-col items-center justify-between p-2 text-left text-lg font-semibold transition-all active:bg-[#ff4d30] active:text-white lg:p-5  lg:px-10"
            >
              <span className="flex w-full justify-between text-xs lg:text-lg">
                3. How do I find such low rental car prices?{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="tabler-icon tabler-icon-chevron-down"
                  className=""
                >
                  <path d="M6 9l6 6l6 -6"></path>
                </svg>
              </span>
              <div
                className={`${
                  isFaqqed ? "hidden" : "flex"
                } px-5 text-xs font-thin lg:text-base`}
              >
                Book in advance: Booking your rental car ahead of time can often
                result in lower prices. Compare prices from multiple companies:
                Use websites like Kayak, Expedia, or Travelocity to compare
                prices from multiple rental car companies. Look for discount
                codes and coupons: Search for discount codes and coupons that
                you can use to lower the rental price. Renting from an
                off-airport location can sometimes result in lower prices.
              </div>
            </button>
          </div>
          <img
            src={faqcar}
            alt="faqcar"
            className="absolute left-0 top-72 z-0"
          />
        </section>
        <footer className="h-screen w-full"></footer>
      </main>
    </div>
  );
}

export default App;
