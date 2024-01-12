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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* hover:m-10 */}
      <img src={backg} alt="tlo" className="absolute right-0 z-0" />
      <header className="relative z-10 flex p-5 font-semibold transition-all">
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
            <button className="px-5 py-2.5">Sign In</button>
            <button className=" bg-[#ff4d30] px-5 py-2.5 text-white shadow-md shadow-black/30">
              Register
            </button>
          </div>
        </nav>
      </header>
      <main className="z-10 bg-white/50">
        <article className="mx-5 flex font-bold">
          <div className="flex flex-col justify-center">
            <div className="text-lg">Plan your trip now</div>
            <div className="text-5xl">
              Save <span className="text-[#ff4d30]">big</span> with our car
              rental
            </div>
            <div className="mt-4 w-full text-justify text-black/60">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more
            </div>
            <div className="flex">
              <button className="m-7 flex gap-2 bg-[#ff4d30] p-4 text-white">
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
              <button className="m-7 flex bg-black p-4 text-white">
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
          <div>
            <img src={volk} alt="volks" className="relative z-20" />
          </div>
        </article>
        <section className="relative h-screen w-full">
          <div className="">
            <form
              className="m-10 flex flex-col gap-3 p-20 shadow-2xl"
              action=""
            >
              <h2 className="text-2xl font-bold">Book a Car</h2>
              <div className="flex gap-3">
                <div className="w-1/3">
                  <label htmlFor="" for="AutoChoice" className="mb-3 flex">
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
                    className="w-full  border-2 px-5 py-2"
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
                  <label htmlFor="" for="PickUpChoice" className="mb-3 flex">
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
                    className="w-full border-2 px-5 py-2"
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
                  <label htmlFor="" for="DropOffChoice" className="mb-3 flex">
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
                    className="w-full border-2 px-5 py-2"
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
                  <label htmlFor="" for="PickUpChoice" className="mb-3 flex">
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
                    className="w-full border-2 px-5 py-2"
                  />
                </div>
                <div className="w-1/3">
                  <label htmlFor="" for="DropOffDay" className="mb-3 flex">
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
                    className="w-full border-2 px-5 py-2"
                  />
                </div>
                <div className="flex w-1/3 flex-col justify-end shadow-lg">
                  <button className="h-2/3 w-full bg-[#ff4d30] text-lg font-bold text-white shadow-white">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div>
            <div className="flex justify-center pt-20 font-semibold">
              <h2>Plan your trip now</h2>
            </div>
            <div className="flex justify-center p-5 text-5xl font-bold">
              <h1>Quick & easy car rental</h1>
            </div>
          </div>
          <div className="flex w-full justify-center gap-20 pl-40 pr-40 pt-10">
            <div className="flex flex-col items-center">
              <img src={select} alt="select" />
              <h2 className="mb-5 text-xl font-bold">Select Car</h2>
              <p className="text-center text-black/50">
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={contact} alt="contact" />
              <h2 className="mb-5 text-xl font-bold">Contact Operator</h2>
              <p className="text-center text-black/50">
                Our knowledgeable and friendly operators are always ready to
                help with any questions or concerns
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={drive} alt="drive" className="mb-5" />
              <h2 className="mb-5 text-xl font-bold">Let's Drive</h2>
              <p className="text-center text-black/50">
                Whether you're hitting the open road, we've got you covered with
                our wide range of cars
              </p>
            </div>
          </div>
          <div className="flex justify-center bg-slate-200 p-20">
            <div>
              <h2 className="text-center text-lg font-semibold">
                Vehicle Models
              </h2>
              <h1 className="text-center text-4xl font-bold">
                Our rental fleet
              </h1>
              <p className="space-x-10 bg-slate-400 p-10 text-center">
                Choose from a variety of our amazing vehicles to rent for your
                next adventure or business trip
              </p>
            </div>
            {/* tutaj kolejny div wleci, tym razem z lista, wiec obczaic jak sie robi liste. 3 kolumny, po lewej lista, srodek to fotka, po prawej rysopis */}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
