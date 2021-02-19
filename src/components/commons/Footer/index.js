import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #f0f0f0;
  color: ${({ theme }) => theme.colors.primary.main.color};
  padding: 14px;
  display: flex;
  padding-right: 28px;
  padding-left: 28px;
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <span>Copyright © Laura Madalosso 2021</span>
    </FooterWrapper>
  );
}
