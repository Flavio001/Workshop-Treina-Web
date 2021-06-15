import { Box } from "@material-ui/core";
import React from "react";
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  FooterText,
  AppList
} from "./Footer.style";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{maxWidth: '400px'}}>
          <FooterTitle>Quem Somos</FooterTitle>
          <FooterText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            excepturi incidunt earum eveniet beatae tempore repellat quam
            debitis, non accusamus tempora magnam labore doloribus rerum odio
            dolor iste quae ratione.
          </FooterText>
        </Box>
        <Box>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <AppList>
            <li>
              <a href={"/"} target={"_blank"}>
                <img src={"/img/logos/app-store.png"} alt="App Store" />
              </a>
            </li>
            <li>
              <a href={"/"} target={"_blank"}>
                <img src={"/img/logos/google-play.png"} alt="Google Play" />
              </a>
            </li>
          </AppList>
        </Box>
      </FooterContainer>
    </FooterStyled>
  );
};
export default Footer;
