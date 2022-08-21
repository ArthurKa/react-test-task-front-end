import { memo, useEffect, useState } from 'react';
import { List, ListProps } from 'components';
import { graphql } from 'services';
import { GlobalStyles, ListWrapper } from './styles';

export const App: React.FC = memo(() => {
  const [listData, setListData] = useState<ListProps['data']>([]);

  useEffect(() => {
    graphql.fetchData().then(setListData);
  }, []);

  return (
    <>
      <GlobalStyles />
      <ListWrapper>
        <List {...{ data: listData }} />
      </ListWrapper>
    </>
  );
});
