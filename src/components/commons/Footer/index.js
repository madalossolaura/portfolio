import React from "react";
import styled from "styled-components";
import FooterIcon from "./styles/FooterIcon";

const FooterWrapper = styled.footer`
  background-color: #f0f0f0;
  color: ${({ theme }) => theme.colors.primary.main.color};
  padding: 14px;
  display: flex;
  padding-right: 28px;
  padding-left: 28px;
  display: flex;
  justify-content: space-between;
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <span>Laura Madalosso | 2021</span>
      <FooterIcon>
        <a href="https://www.linkedin.com/in/madalossolaura/" rel="noreferrer" target="_blank">
          <img src="../images/icon_linkedin.svg" alt="Linkedin"/>
        </a>
        <a href="https://github.com/madalossolaura" rel="noreferrer"  target="_blank">
          <img src="../images/icon_github.svg" alt="Github" />
        </a>
      </FooterIcon>      
    </FooterWrapper>
  );
}
