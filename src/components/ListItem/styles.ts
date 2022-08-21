import styled, { css } from 'styled-components';
import { itemWrapperCommonStyles, colors } from 'commonStyles';
import { rowHeight } from 'commonConstants';

export const ListItemWrapper = styled.div`
  ${itemWrapperCommonStyles}
`;
export const Title = styled.button<{ isLastNode: boolean }>`
  display: flex;
  background-color: ${p => p.isLastNode ? colors.lastNode : colors.row};
  border: 1px solid ${colors.border};
  border-radius: 5px;
  padding: 2px 10px;
  font-weight: bold;
  height: ${rowHeight}px;

  user-select: none;
  > span {
    user-select: text;
  }

  :hover, :focus-visible {
    opacity: 0.7;
    :active {
      opacity: 0.5;
    }
  }
`;
export const Items = styled.div<{ withItemsHidden: boolean }>`
  ${itemWrapperCommonStyles}
  margin-left: 20px;

  ${p => p.withItemsHidden && css`
    display: none;
  `}
`;
