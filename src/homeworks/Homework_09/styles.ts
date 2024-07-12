import styled from "@emotion/styled";
import { colors } from "styles/colors";
import { css } from "@emotion/react";

export const Homework09Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 20px;
`;

export const ButtonControl = styled.div`
  width: 400px;
`;

const commonCardStyles = css`
  display: flex;
  width: 400px;
  height: fit-content;
  background-color: silver;
  font-size: 24px;
  font-weight: bold;
  gap: 20px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const JokeCard = styled.div`
  ${commonCardStyles};
  color: ${colors.PRIMARY_BLUE};
`;

export const ErrorCard = styled.div`
  ${commonCardStyles};
  color: ${colors.ERROR};
`;
