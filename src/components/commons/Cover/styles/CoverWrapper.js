import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

const CoverWrapper = styled.div`
    font-family: 'Open Sans', sans-serif;
    /*background-image: url('/images/bg.svg');
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center top;
    background-size: cover;*/
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    max-height: 100vh;
    ${breakpointsMedia({
        xs: css`
            padding: 4rem;
        `,
        md: css`
            padding: 18% 4rem;
        `,
        xl: css`
            padding-right: 8rem;
            padding-left: 8rem; 
        `,
    })}
`;

export default CoverWrapper;
