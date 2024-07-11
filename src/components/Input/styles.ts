import styled from "@emotion/styled";

import { colors } from "styles/colors";

interface StyledInputProps {
  $error: string | undefined;
}

export const InputWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const InputLabel = styled("label")`
  font-size: 16px;
  color: hsl(0, 0%, 44%);
`;

const getStyledInputDorder = (
  disabled: boolean | undefined,
  error: string | undefined
) => {
  if (typeof error === "string") {
    return "red";
  } else if (disabled) {
    return "gray";
  } else {
    return "#3f3f3f";
  }
};

export const InputComponent = styled("input")<StyledInputProps>`
  width: 100%;
  height: 50px;
  border: 3px solid
    ${({ disabled, $error }) => getStyledInputDorder(disabled, $error)};

  border-radius: 4px;
  padding: 12px;
  outline: none;

  &::placeholder {
    color: "gray";
    font-size: 16px;
  }
`;
