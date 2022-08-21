import styled, { createGlobalStyle } from 'styled-components';
import { colors } from 'commonStyles';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${colors.background};
  }
  #root {
    font-family: sans-serif;
    padding: 20px;
  }
`;

export const ListWrapper = styled.div`
  width: 500px;
`;
