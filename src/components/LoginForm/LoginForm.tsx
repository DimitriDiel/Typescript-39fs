import { MouseEvent } from "react";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { LoginFormContainer, LoginTitle, InputsContainer } from "./styles";

function LoginForm() {
  const login = (event: MouseEvent): void => {
    event.preventDefault();
    console.log("User logged in succesfully");
  };

  return (
    <LoginFormContainer>
      <LoginTitle>Login form</LoginTitle>
      <InputsContainer>
        <Input
          id="email-id"
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
          disabled={false}
          $error={undefined}
        />
        <Input
          id="password-id"
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
          disabled={false}
          $error={undefined}
        />
      </InputsContainer>
      <Button onClick={login} name="Login" type="submit" />
    </LoginFormContainer>
  );
}

export default LoginForm;
