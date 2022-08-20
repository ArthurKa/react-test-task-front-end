import { useEffect, useState } from 'react';
import { List, ListProps } from './components';
import { graphql } from './services';

export const App: React.FC = () => {
  const [listData, setListData] = useState<ListProps['data']>([]);

  useEffect(() => {
    graphql.fetchData().then(setListData);
  }, []);

  return (
    <List {... { data: listData }} />
  );
};
