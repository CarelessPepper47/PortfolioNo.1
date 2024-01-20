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

function App() {
  const [zero, setZero] = useState(0);

  function nowaFunkcja(morel) {
    setZero(morel);
  }

  // !!!!!!!!!!!!!!!!!!!!! robienie przyciskow toggle do faq
  const [isToggled, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!isToggled);
  };

  function rozwinFaq() {
    setToggle(!isToggled);

    return <button onClick={handleToggle}>{isToggled ? "ON" : "OFF"}</button>;
  }
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
    <>
      {/* hover:m-10 */}
      <img
        src={backg}
        alt="tlo"
        className="absolute right-0 z-0 hidden md:block"
      />
      <header className="relative z-10 flex p-5 font-semibold transition-all md:flex-col">
        <nav className="flex w-full items-center justify-around">
          <img class="w-40" src={zdjecie} alt="Logo" />
          <div className="flex space-x-6 py-8 text-center">
            <div className="">Home</div>
            <div className="">About</div>
            <div className="">Vehicle Models</div>
            <div className="">Testimonials</div>
            <div className="">Our Team</div>
            <div className="">Contact</div>
          </div>
          <div className="py-5">
            <button className="px-5 py-2.5">Sign In</button>
            <button className=" bg-[#ff4d30] px-5 py-2.5 text-white shadow-md shadow-black/30">
              Register
            </button>
          </div>
        </nav>
      </header>
      <main className="z-10 mt-10 bg-[#FFF]">
        <article className="mx-5 flex flex-col font-bold md:flex-row">
          <div className="ml-10 flex flex-col justify-center">
            <div className="text-lg">Plan your trip now</div>
            <div className="text-5xl">
              Save <span className="text-[#ff4d30]">big</span> with our car
              rental
            </div>
            <div className="mt-4 w-full text-justify font-medium text-black/60">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more
            </div>
            <div className="mt-10 flex gap-10">
              <button className="flex gap-2 bg-[#ff4d30] p-6 text-white">
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
              <button className="flex bg-black p-6 text-white">
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
            <img src={volk} alt="volks" className="relative" />
          </div>
        </article>
        <section className="relative h-fit w-full">
          <form
            className="m-10 mb-20 flex flex-col gap-3 p-20 shadow-2xl"
            action=""
          >
            <h2 className="text-2xl font-bold">Book a Car</h2>
            <div className="flex gap-3">
              <div className="w-1/3">
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
              <div className="w-1/3">
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
              <div className="w-1/3">
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
            <div className="flex w-full gap-3">
              <div className="w-1/3">
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
              <div className="w-1/3">
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
              <div className="flex w-1/3 flex-col justify-end shadow-lg">
                <button className="h-2/3 w-full bg-[#ff4d30] text-lg font-bold text-white shadow-white">
                  Search
                </button>
              </div>
            </div>
          </form>
          <div className="mb-20">
            <h2 className="text-center text-2xl font-semibold">
              Plan your trip now
            </h2>
            <h1 className="text-center text-5xl font-bold">
              Quick & easy car rental
            </h1>
          </div>

          <div className="flex w-full justify-center gap-20 px-20">
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
          <div className="mt-20 flex justify-center">
            <div className="w-1/2 px-20">
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
          <section className="mb-20 flex h-fit w-full items-center">
            {/* kolumna z przyciskami JS */}
            <div className="flex h-fit w-1/4 flex-col justify-center gap-2 pl-10 text-xl font-bold">
              <button
                onClick={() => {
                  nowaFunkcja(0);
                }}
                className="bg-[#e9e9e9] p-5 transition-all hover:bg-[#ff4d30] hover:text-white"
                id="auto1"
              >
                Audi
              </button>
              <button
                onClick={() => {
                  nowaFunkcja(1);
                }}
                className="bg-[#e9e9e9] p-5 transition-all hover:bg-[#ff4d30] hover:text-white"
                id="auto2"
              >
                VW
              </button>
              <button
                onClick={() => {
                  nowaFunkcja(2);
                }}
                className="bg-[#e9e9e9] p-5 transition-all hover:bg-[#ff4d30] hover:text-white"
                id="auto3"
              >
                Toyota
              </button>
              <button
                onClick={() => {
                  nowaFunkcja(3);
                }}
                className="bg-[#e9e9e9] p-5 transition-all hover:bg-[#ff4d30] hover:text-white"
                id="auto4"
              >
                BMW
              </button>
              <button
                onClick={() => {
                  nowaFunkcja(4);
                }}
                className="bg-[#e9e9e9] p-5 transition-all hover:bg-[#ff4d30] hover:text-white"
                id="auto5"
              >
                Mercedes
              </button>
              <button
                onClick={() => {
                  nowaFunkcja(5);
                }}
                className="bg-[#e9e9e9] p-5 transition-all hover:bg-[#ff4d30] hover:text-white"
                id="auto6"
              >
                Passat
              </button>
            </div>
            {/* kolumna ze zmieniajacymi sie fotkami aut */}
            <div className="m-10 flex h-min w-1/2 justify-center">
              <img src={models[zero].img} alt="auto1" />
            </div>
            {/* kolumna z tabelkami */}
            <div className="mx-3 flex h-fit w-1/4 flex-col gap-2 pr-10">
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
              <button className="mt-2 bg-[#ff4d30] p-3 text-lg font-bold text-white shadow-[5px_5px_0_0_rgba(0,0,0,.2)] duration-150 hover:brightness-95 active:scale-95 active:shadow-none">
                RESERVE NOW
              </button>
            </div>
          </section>
          <section className="flex h-fit flex-col items-center justify-center gap-5 bg-[#2d2d2d]">
            <div className="py-[45px]">
              <h1 className="text-6xl font-bold text-white">
                Save big with our cheap car rental!
              </h1>
              <p className="text-3xl text-white">
                Top Airports. Local Suppliers.{" "}
                <span className="text-[#ff4d30]">24/7</span> Support.
              </p>
            </div>
          </section>

          <img src={tlo2} alt="tlo2" className="mx-auto my-10" />
          <div className="relative flex">
            <img
              src={sladyopon}
              alt="sladyopon"
              className="absolute -top-[300px] z-0 h-[738px] w-[80%]"
            />
            <div className="w-1/2 gap-5 pl-40">
              <h2 className="text-xl font-bold">Why Choose Us</h2>
              <h1 className="text-5xl font-bold">
                Best valued deals you will ever find
              </h1>
              <p className="mt-4 text-[#706f7b]">
                Discover the best deals you'll ever find with our unbeatable
                offers. We're dedicated to providing you with the best value for
                your money, so you can enjoy top-quality services and products
                without breaking the bank. Our deals are designed to give you
                the ultimate renting experience, so don't miss out on your
                chance to save big.
              </p>
              <button className="mt-5 flex rounded bg-[#ff4d30] px-6 py-4 font-bold text-white">
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
            <div className="w-1/2 space-y-10">
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
              <div className="flex gap-3 px-20">
                <img src={ccd} alt="ccd" />
                <div>
                  <h1 className="text-2xl font-bold">Cross Country Drive</h1>
                  <p className="w-[75%] text-[#706f7b]">
                    Take your driving experience to the next level with our
                    top-notch vehicles for your cross-country adventures.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 px-20">
                <img src={aip} alt="aip" />
                <div>
                  <h1 className="text-2xl font-bold">All Inclusive Pricing</h1>
                  <p className="w-[77%] text-[#706f7b]">
                    Get everything you need in one convenient, transparent price
                    with our all-inclusive pricing policy.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 px-20">
                <img src={nhc} alt="nhc" />
                <div>
                  <h1 className="text-2xl font-bold">No Hidden Charges</h1>
                  <p className="w-[75%] text-[#706f7b]">
                    Enjoy peace of mind with our no hidden charges policy. We
                    believe in transparent and honest pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex h-fit w-full flex-col bg-[#f8f8f8] pb-40 pt-20">
            <div className="mx-auto w-1/2 text-center">
              <h2 className="text-xl font-bold">Reviewed by People</h2>
              <h1 className="text-5xl font-bold">Client's Testimonials</h1>
              <p className="mt-4 text-[#706f7b]">
                Discover the positive impact we've made on the our clients by
                reading through their testimonials. Our clients have experienced
                our service and results, and they're eager to share their
                positive experiences with you.
              </p>
            </div>
            <div className="relative z-20 flex justify-center gap-5">
              <div className="ml-[10%] mt-20 h-fit w-[60%] border-white bg-white p-10 text-left text-xl shadow-md">
                <p className="mt-5 font-semibold">
                  "We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable. "
                </p>
                <div className="mt-20 flex justify-around gap-20">
                  <div className="flex">
                    <img src={heri} alt="heri" className="w-20 rounded-full" />
                    <div className="ml-5  mt-3">
                      <h1 className="font-bold">Heri Porter</h1>
                      <p className="text-[16px]">Pruszcz Gdański</p>
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
              <div className="mr-[10%] mt-20 h-fit w-[60%] border-white bg-white p-10 text-left text-xl shadow-md">
                <p className="mt-5 font-semibold">
                  "The car was in great condition and made our trip even better.
                  Highly recommend for this car rental website!"
                </p>
                <div className="mt-20 flex justify-around gap-20">
                  <div className="flex">
                    <img src={ron} alt="ron" className="w-20 rounded-full" />
                    <div className="ml-5 mt-3">
                      <h1 className="font-bold">Roland Wololo</h1>
                      <p className="text-[16px]">Wroclove</p>
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
            </div>
          </div>
        </section>
        <section className="relative z-10 flex h-screen w-full flex-col items-center gap-20 bg-white">
          <div className="space-y-10 text-center">
            <h5 className="pt-20 text-2xl font-bold">FAQ</h5>
            <h1 className="text-5xl font-bold">Frequently Asked Questions</h1>
            <p className="mx-auto w-[80%]">
              Frequently Asked Questions About the Car Rental Booking Process on
              Our Website: Answers to Common Concerns and Inquiries.
            </p>
          </div>
          <div className="relative z-10 flex w-[60%] flex-col bg-white shadow-md shadow-black/50">
            {/* <button
                onClick={() => {
                  nowaFunkcja(3);
                }} */}
            <button
              onClick={() => {
                rozwinFaq;
              }}
              className="flex h-20 items-center justify-between px-10 text-left text-lg font-semibold transition-all active:bg-[#ff4d30] active:text-white"
            >
              1. What is special about comparing rental car deals?
              <div className="hidden">
                Comparing rental car deals is important as it helps find the
                best deal that fits your budget and requirements, ensuring you
                get the most value for your money. By comparing various options,
                you can find deals that offer lower prices, additional services,
                or better car models. You can find car rental deals by
                researching online and comparing prices from different rental
                companies.
              </div>
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
            </button>
            <button className="flex h-20 items-center  justify-between px-10 text-left text-lg font-semibold transition-all active:bg-[#ff4d30] active:text-white">
              2. How do I find the car rental deals?
              <div className="hidden">
                You can find car rental deals by researching online and
                comparing prices from different rental companies. Websites such
                as Expedia, Kayak, and Travelocity allow you to compare prices
                and view available rental options. It is also recommended to
                sign up for email newsletters and follow rental car companies on
                social media to be informed of any special deals or promotions.
              </div>
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
            </button>
            <button className="flex h-20 items-center justify-between px-10 text-left text-lg font-semibold transition-all active:bg-[#ff4d30]  active:text-white">
              3. How do I find such low rental car prices?
              <div className="hidden">
                Book in advance: Booking your rental car ahead of time can often
                result in lower prices. Compare prices from multiple companies:
                Use websites like Kayak, Expedia, or Travelocity to compare
                prices from multiple rental car companies. Look for discount
                codes and coupons: Search for discount codes and coupons that
                you can use to lower the rental price. Renting from an
                off-airport location can sometimes result in lower prices.
              </div>
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
            </button>
          </div>
          <img
            src={faqcar}
            alt="faqcar"
            className="absolute left-0 top-72 z-0"
          />
        </section>
      </main>
    </>
  );
}

export default App;
