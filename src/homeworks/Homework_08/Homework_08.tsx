import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { Homework08Wrapper } from "./styles";

function Homework_08() {
  return (
    <Homework08Wrapper>
      <Input
        id="1"
        name="simple-input"
        type="text"
        placeholder="simple input"
        label="Simple Input"
        disabled={false}
        error={undefined}
      />
      <Input
        id="1"
        name="disabled-input"
        type="text"
        placeholder="no input"
        label="Disabled Input"
        disabled={true}
        error={undefined}
      />
      <Input
        id="2"
        name="error-input"
        type="text"
        placeholder="Error input"
        label="Error Input"
        disabled={false}
        error="Some error"
      />
      <Button
        name="Simple Button"
        onClick={() => {}}
        disabled={false}
        isRed={false}
      />
      <Button
        name="Disabled Button"
        onClick={() => {}}
        disabled
        isRed={false}
      />
      <Button
        name="Red Button"
        onClick={() => {}}
        disabled={false}
        isRed={true}
      />
    </Homework08Wrapper>
  );
}

export default Homework_08;
