import styled, {
    css
} from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import {
    TextStyleVariantsMap
} from '../../../foundations/Text';

const MenuWrapper = styled.nav `
    font-family: 'Open Sans', sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-left: 28px;
    padding-right: 28px;
    background-color: #F0F0F0;
    height:70px;
`;

MenuWrapper.LeftSide = styled.div `

`;

MenuWrapper.RightSide = styled.div `
    list-style: none;
    display: inherit;
    li {
        margin-right: 20px;
    }
    a {
        text-transform: uppercase;
        text-align: center;
        display: block;
        text-decoration: none;
        color: #555555;
        transition: 200ms ease-in-out;
        ${breakpointsMedia({
        xs: css`
        ${TextStyleVariantsMap.smallestException}
        `,
        md: css`
        ${TextStyleVariantsMap.paragraph1}
        `,
    })}
    &:hover,
    &:focus {
      font-weight: 500;
      color: #ec5e52;
      
    }
  }
`;

export default MenuWrapper;