import audi from "./assets/samochody/Audi.jpg";
import bmw from "./assets/samochody/BMW.jpg";
import mercedes from "./assets/samochody/Mercedes.jpg";
import passat from "./assets/samochody/Passat.jpg";
import toyota from "./assets/samochody/Toyota.jpg";
import vw from "./assets/samochody/VW.jpg";

const models = [
    {
      brand: "Toyota",
      model: "Camry",
      year: 2022,
      doors: 4,
      AC: true,
      transmission: "Automatic",
      fuel: "Gasoline",
      img: audi,
      price: 80,
    },
    {
      brand: "Honda",
      model: "Civic",
      year: 2023,
      doors: 4,
      AC: true,
      transmission: "Manual",
      fuel: "Petrol",
      img: bmw,
      price: 65,
    },
    {
      brand: "Ford",
      model: "Escape",
      year: 2021,
      doors: 5,
      AC: true,
      transmission: "Automatic",
      fuel: "Hybrid",
      img: mercedes,
      price: 120,
    },
    {
      brand: "Chevrolet",
      model: "Malibu",
      year: 2022,
      doors: 4,
      AC: true,
      transmission: "Automatic",
      fuel: "Gasoline",
      img: passat,
      price: 90,
    },
    {
      brand: "Nissan",
      model: "Altima",
      year: 2023,
      doors: 4,
      AC: true,
      transmission: "CVT",
      fuel: "Electric",
      img: toyota,
      price: 55,
    },
    {
      brand: "BMW",
      model: "3 Series",
      year: 2022,
      doors: 4,
      AC: true,
      transmission: "Automatic",
      fuel: "Diesel",
      img: vw,
      price: 150,
    }
  ]



export default models;