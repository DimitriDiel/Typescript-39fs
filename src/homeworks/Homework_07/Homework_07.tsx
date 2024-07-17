import { useState } from "react";

import Feedback from "components/Feedback/Feedback";
import Input from "components/Input/Input";
import LoginForm from "components/LoginForm/LoginForm";
import SimponsCard from "components/SimponsCard/SimponsCard";

import { Homework07Wrapper } from "./styles";

function Homework_07() {
  const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);

  const onLike = (): void => {
    setLike((prevValue: number) => prevValue + 1);
  };

  const onDislike = (): void => {
    setDislike((prevValue: number) => prevValue + 1);
  };
  const resetResults = (): void => {
    setLike(0);
    setDislike(0);
  };

  return (
    <Homework07Wrapper>
      <div>
        <Input
          id="1"
          name="FirstNameInput"
          type="text"
          placeholder="Enter first name"
          label="First name"
          disabled={false}
          error={undefined}
        />
      </div>
      <div>
        <LoginForm />
      </div>
      <div>
        <SimponsCard
          avatar="https://w7.pngwing.com/pngs/214/3/png-transparent-homer-simpson-illustration-homer-simpson-bart-simpson-lisa-simpson-simpson-family-character-homer-television-vertebrate-cartoon-thumbnail.png"
          firstName="Homer"
          lastName="Simson"
          job="Nuclear Technician"
          hobby="Beer"
        />
      </div>
      <div>
        <Feedback
          like={like}
          dislike={dislike}
          onLike={onLike}
          onDislike={onDislike}
          resetResults={resetResults}
        />
      </div>
    </Homework07Wrapper>
  );
}

export default Homework_07;
