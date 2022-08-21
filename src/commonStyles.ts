import { rowsGap } from 'commonConstants';
import { css } from 'styled-components';

export const colors = {
  background: '#eaeaea',
  row: '#fff',
  lastNode: 'paleturquoise',
  border: '#000',
};

export const itemWrapperCommonStyles = css`
  display: flex;
  flex-direction: column;
  gap: ${rowsGap}px;
`;
