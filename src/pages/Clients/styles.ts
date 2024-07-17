import styled from "@emotion/styled";

import { Link } from "react-router-dom";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const ClientLink = styled(Link)`
  font-size: 14px;
  font-weight: bold;
`;
