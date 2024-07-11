import { useState } from "react";

import { StyledCounter, ButtonControl, CountNumber } from "./styles";

import Button from "components/Button/Button";

function Counter() {
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

  return (
    <StyledCounter>
      <ButtonControl>
        <Button name="-" onClick={onMinus} />
      </ButtonControl>
      <CountNumber>{count}</CountNumber>
      <ButtonControl>
        <Button name="+" onClick={onPlus} />
      </ButtonControl>
    </StyledCounter>
  );
}

export default Counter;
