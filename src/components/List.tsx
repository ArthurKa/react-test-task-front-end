import { ListNode } from '../types';

export interface ListProps {
  data: ListNode[];
}

export const List: React.FC<ListProps> = ({ data }) => {
  // eslint-disable-next-line no-restricted-syntax
  console.log(data);

  return (
    <div>123</div>
  );
};
