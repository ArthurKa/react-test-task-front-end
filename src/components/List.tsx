import styled from 'styled-components';
import { itemWrapperCommonStyles } from 'commonStyles';
import { ListNode } from 'types';
import { ListItem } from 'components/ListItem';
import { memo } from 'react';

export interface ListProps {
  data: ListNode[];
}

const ListWrapper = styled.div`
  ${itemWrapperCommonStyles}
`;
export const List: React.FC<ListProps> = memo(({ data }) => (
  <ListWrapper>
    {
      data.map(({ name, children }, i) => (
        <ListItem
          key={i}
          {...{
            name,
            items: children,
          }}
        />
      ))
    }
  </ListWrapper>
));
