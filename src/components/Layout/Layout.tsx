import { useNavigate } from "react-router-dom";

import {
  LayoutWrapper,
  Header,
  Main,
  Footer,
  Link,
  Logo,
  FooterLogo,
  LogoImg,
  NavigationContainer,
  FooterNavigation,
  FooterLink,
} from "./styles";
import { LayoutProps } from "./types";
import { APP_ROUTES } from "constants/routes";
import { v4 } from "uuid";

function Layout({ children }: LayoutProps) {
  const linkRoutes = {
    [APP_ROUTES.HOME]: "Home",
    [APP_ROUTES.CLIENTS]: "Clients",
    [APP_ROUTES.COUNTACT_US]: "Contact Us",
    [APP_ROUTES.ABOUT]: "About",
    [APP_ROUTES.LOGIN]: "Log In",
  };

  const headerLinks = Object.keys(linkRoutes).map((appRoute: string) => {
    return (
      <Link
        key={v4()}
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: isActive ? "underline" : "none",
        })}
        to={appRoute}
      >
        {linkRoutes[appRoute as keyof typeof linkRoutes]}
      </Link>
    );
  });
  
  const footerLinks = Object.keys(linkRoutes).map((appRoute: string) => {
    return (
      <FooterLink key={v4()} to={appRoute}>
        {linkRoutes[appRoute as keyof typeof linkRoutes]}
      </FooterLink>
    );
  });

  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate(APP_ROUTES.HOME);
  };

  return (
    <LayoutWrapper>
      <Header>
        <Logo onClick={goToHomePage}>
          <LogoImg
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
            alt="App logo"
          />
        </Logo>

        <NavigationContainer>{headerLinks}</NavigationContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <FooterLogo>
          <LogoImg
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
            alt="App logo"
          />
        </FooterLogo>
        <FooterNavigation>{footerLinks}</FooterNavigation>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;
