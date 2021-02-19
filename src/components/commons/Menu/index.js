import React from 'react';
import MenuWrapper from './styles/MenuWrapper';
import Text from "../../foundations/Text";
import Logo from '../../../theme/Logo';

const links = [
    {
      texto: 'Sobre',
      url: '/sobre',
    },
    {
      texto: 'Contato',
      url: '/contato',
    },
  ];

  export default function Menu() {
    return (
      <MenuWrapper>
        <MenuWrapper.LeftSide>
          <Logo />
        </MenuWrapper.LeftSide>
        <MenuWrapper.RightSide>
        {links.map((link) => (
            <li key={link.url}>
              <Text variant="smallestException" tag="a" href={link.url}>
                {link.texto}
              </Text>
            </li>
          ))}
        </MenuWrapper.RightSide>
      </MenuWrapper>
    );
  }
  