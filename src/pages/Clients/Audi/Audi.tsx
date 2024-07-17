import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button";

import { PageWrapper, ButtonControl, ClientInfo } from "./styles";

function Audi() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      <ClientInfo>
        Audi AG — немецкая автомобилестроительная компания в составе концерна
        Volkswagen Group, специализирующаяся на выпуске автомобилей под маркой
        Audi. Штаб-квартира расположена в городе Ингольштадт. Девиз — Vorsprung
        durch Technik. Объём производства в 2016 году составил около 1 903 259
        автомобилей
      </ClientInfo>
      <ButtonControl>
        <Button name="Go back" onClick={goBack} />
      </ButtonControl>
    </PageWrapper>
  );
}

export default Audi;
