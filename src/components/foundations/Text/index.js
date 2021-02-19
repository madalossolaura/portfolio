import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import styled, { css } from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';

export const TextStyleVariantsMap = {
  title: css`
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: ${({ theme }) => theme.typographyVariants.title.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.title.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.title.lineHeight};
  `,
  titleBold: css`
    font-size: ${({ theme }) => theme.typographyVariants.titleBold.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.titleBold.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.titleBold.lineHeight};
  `,
  titleXS: css`
    font-size: ${({ theme }) => theme.typographyVariants.titleXS.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.titleXS.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.titleXS.lineHeight};
  `,
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
  `,
};

const TextBase = styled.span`
    ${({ variant }) => TextStyleVariantsMap[variant]}
    color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
    ${(props) => TextStyleVariantsMap[props.variant]}
    ${propToStyle('textAlign')}
    ${propToStyle('marginTop')}
    ${propToStyle('marginBottom')}
`;

export default function Text({
  tag, variant, children, ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
};

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};
