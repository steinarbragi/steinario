import styled, { css } from 'styled-components';

const baseStyles = css`
  & > a {
    color: #0070f3;
    text-decoration: none;
  }

  & > a:hover,
  & > a:focus,
  & > a:active {
    text-decoration: underline;
  }

  margin: 0;
  line-height: 1.15;
  text-align: center;
`;

export const H1 = styled.h1`
  ${baseStyles}
  font-size: 32px;
`;

export const H2 = styled.h2`
  ${baseStyles};
  text-transform: uppercase;
  font-size: 28px;
`;

export const H3 = styled.h3`
  ${baseStyles};
  font-size: 24px;
`;

export const H4 = styled.h4`
  ${baseStyles};
  font-size: 20px;
`;

const Headings = {
  H1,
  H2,
  H3,
  H4,
};

export default Headings;
