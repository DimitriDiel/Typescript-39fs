import { v4 } from "uuid";
import "./styles.css";
import { Car } from "./types";

function Homework_06() {
  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  const addCards = cars.map((car: Car) => {
    return (
      <div key={v4()} className="card">
        <h2>Brand name: {car.brand}</h2>
        <h2>Price: {car.price}</h2>
        <h2>Type of engine : {car.isDiesel ? "Disel" : "Benzin"}</h2>
      </div>
    );
  });

  return <div className="page_wrapper">{addCards}</div>;
}

export default Homework_06;