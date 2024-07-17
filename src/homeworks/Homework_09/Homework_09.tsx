import { useState, useEffect } from "react";
import axios from "axios";

import {
  Homework09Wrapper,
  ButtonControl,
  JokeCard,
  ErrorCard,
} from "./styles";

import Button from "components/Button/Button";


function Homework_09() {
  const [randomJoke, setRandomJoke] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  // const getRandomJoke = async () => {
  //   setError(undefined);
  //   setRandomJoke(undefined);

  //   const response = await fetch(
  //     "https://official-joke-api.appspot.com/random_joke"
  //   );

  //   const result = await response.json();

  //   if (response.ok) {
  //     setRandomJoke(`${result.setup} ${result.punchline}`);
  //   } else {
  //     setError("Ошибка при получении данных");
  //   }
  // };

  const getRandomJoke = async () => {
    setError(undefined);
    setRandomJoke(undefined);
    try {
      const response = await axios.get(
        "https://official-joke-api.appspot.com/random_joke"
      );
      setRandomJoke(`${response.data.setup} ${response.data.punchline}`);
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getRandomJoke();
  }, []);

  return (
    <Homework09Wrapper>
      {randomJoke && <JokeCard>{randomJoke}</JokeCard>}
      {error && <ErrorCard>{error}</ErrorCard>}
      <ButtonControl>
        <Button name="getJoke" onClick={getRandomJoke} />
      </ButtonControl>
    </Homework09Wrapper>
  );
}

export default Homework_09;
