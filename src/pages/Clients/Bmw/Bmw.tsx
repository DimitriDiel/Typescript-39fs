import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button";

import { PageWrapper, ButtonControl, ClientInfo } from "./styles";

function Bmw() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      <ClientInfo>
        BMW AG — немецкий производитель автомобилей, мотоциклов, двигателей, а
        также велосипедов. Более 45 % акций принадлежит семье Квандт.
        Председателем правления компании является Оливер Ципсе. Главный дизайнер
        — Йозеф Кабан.
      </ClientInfo>
      <ButtonControl>
        <Button name="Go back" onClick={goBack} />
      </ButtonControl>
    </PageWrapper>
  );
}

export default Bmw;
