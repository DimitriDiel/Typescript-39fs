import { useState } from "react";

import "./styles.css";

import Button from "../Button/Button";

function Counter() {
  // Функция-хук useSate() возвращает массив из 2 элементов
  // - 1 элемент - это переменная сотояния
  // - 2 элемент - функция, которая меняет это состояние
  // По умолчанию count = undefined, если мы ничего не передадим в качестве аргумента в функцию useState()
  const [count, setCount] = useState<number>(0);

  const onPlus = (): void => {
    setCount((prevValue: number) => {
      return prevValue + 1;
    });
  };

  const onMinus = (): void => {
    setCount((prevValue: number) => {
      return prevValue - 1;
    });
  };

  // Пример работы со стейтом
  // const [animals, setAnimals] = useState(["Tiger", "Lion", "Dog"]);
  // console.log(animals);

  // const addAnimal = () => {
  //   setAnimals((prevValue) => {
  //     return [...prevValue, "Cat"];
  //   });
  // };

  // const [userName, setUserName] = useState("Maxim");
  // console.log(userName);

  // const changeUserName = () => {
  //   setUserName("John")
  // };

  return (
    <div className="counter-wrapper">
      <div className="button-control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button-control">
        <Button name="+" onClick={onPlus} />
      </div>
      {/* Пример работы со стейтом */}
      {/* <button onClick={addAnimal}>Set Animal</button>
      <button onClick={changeUserName}>Change user name</button> */}
    </div>
  );
}

export default Counter;
