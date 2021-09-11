import React from "react";
import Text from "../../foundations/Text";
import FooterIcon from "../Footer/styles/FooterIcon";
import CoverWrapper from "./styles/CoverWrapper";

export default function Cover() {
  return (
    <CoverWrapper>
      <Text 
        variant="title" 
        tag="h1" 
        color="primary.main"
        marginBottom="0">
        Laura 
        <Text
          variant="titleBold"
          tag="span">
          Madalosso
        </Text>
      </Text>
      <Text
        variant="titleXS" 
        tag="h2" 
        color="secondary.main"
        marginTop="0">
        I’m a Front-end Developer based in São Paulo, Brazil.
      </Text>
      <FooterIcon>
        <a href="https://www.linkedin.com/in/madalossolaura/" rel="noreferrer" target="_blank">
          <img src="../images/linkedin-alt.svg" alt="Linkedin"/>
        </a>
        <a href="https://github.com/madalossolaura" rel="noreferrer"  target="_blank">
          <img src="../images/github-alt.svg" alt="Github" />
        </a>
      </FooterIcon>
    </CoverWrapper>
  );
}
