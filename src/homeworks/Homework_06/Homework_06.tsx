import { v4 } from "uuid";
import { PageWrapper, Card } from "./styles";
import { Car } from "./types";
import { ReactNode } from "react";

function Homework_06() {
  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  const addCards: ReactNode[] = cars.map((car: Car) => {
    return (
      <Card key={v4()}>
        <h2>Brand name: {car.brand}</h2>
        <h2>Price: {car.price}</h2>
        <h2>Type of engine : {car.isDiesel ? "Disel" : "Benzin"}</h2>
      </Card>
    );
  });

  return <PageWrapper>{addCards}</PageWrapper>;
}

export default Homework_06;
