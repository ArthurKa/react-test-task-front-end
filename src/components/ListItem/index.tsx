import { useCallback, useContext, createContext, useMemo, memo } from 'react';
import { ListNode } from 'types';
import { useCollapsible } from 'customHooks';
import { ListItemWrapper, Title, Items } from './styles';

export interface ListItemProps {
  name: ListNode['name'];
  items: ListNode['children'];
}

const Context = createContext({ collapseParentNode() {} });

export const ListItem: React.FC<ListItemProps> = memo(({ name, items }) => {
  const { collapseParentNode } = useContext(Context);
  const isLastNode = items.length === 0;

  const {
    isCollapsed,
    collapseParentNodeAndCurrent,
    toggleIsCollapsed,
  } = useCollapsible(collapseParentNode);

  const handleTitleClick = useCallback(() => {
    if(isLastNode) {
      collapseParentNode();
    } else {
      toggleIsCollapsed();
    }
  }, [collapseParentNode, isLastNode, toggleIsCollapsed]);

  const contextProvideProps = useMemo(() => ({
    value: {
      collapseParentNode: collapseParentNodeAndCurrent,
    },
  }), [collapseParentNodeAndCurrent]);

  return (
    <Context.Provider {...contextProvideProps}>
      <ListItemWrapper>
        <Title {...{
          onClick: handleTitleClick,
          isLastNode,
        }}
        >
          <span>{name}</span>
        </Title>
        {
          !isLastNode && (
            <Items {...{ withItemsHidden: isCollapsed }}>
              {
                items.map(({ name, children }, i) => (
                  <ListItem
                    key={i}
                    {...{
                      name,
                      items: children,
                    }}
                  />
                ))
              }
            </Items>
          )
        }
      </ListItemWrapper>
    </Context.Provider>
  );
});
