import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  color: ${({ theme }) => theme.colors.secondary.main.color};
  padding: 14px;
  display: flex;
  padding-right: 28px;
  padding-left: 28px;
  display: flex;
  justify-content: space-between;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <span>Laura Madalosso | 2021</span>    
    </FooterWrapper>
  );
}
