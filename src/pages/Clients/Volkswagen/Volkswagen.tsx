import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button";

import { PageWrapper, ButtonControl, ClientInfo } from "./styles";

function Volkswagen() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      <ClientInfo>
        Volkswagen ([fɔlksˈvaːɡn], в переводе с нем. — «народный автомобиль») —
        немецкая автомобильная марка, одна из многих, принадлежащих концерну
        Volkswagen AG. Под этой маркой в 2019 году было реализовано 6 млн 620
        тыс. автомобилей
      </ClientInfo>
      <ButtonControl>
        <Button name="Go back" onClick={goBack} />
      </ButtonControl>
    </PageWrapper>
  );
}

export default Volkswagen;
