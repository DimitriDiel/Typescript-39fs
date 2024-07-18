import { PageWrapper, Title, ClientLink } from "./styles";

function Clients() {
  return (
    <PageWrapper>
      <Title>Clients:</Title>
      <ClientLink to="/clients/Audi">Audi</ClientLink>
      <ClientLink to="/clients/Bmw">Bmw</ClientLink>
      <ClientLink to="/clients/Volkswagen">Volkswagen</ClientLink>
    </PageWrapper>
  );
}

export default Clients;
