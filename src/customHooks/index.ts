import { transitionDuration } from 'commonConstants';
import { useCallback, useState } from 'react';

export const useCollapsible = (collapseParentNode: () => void) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const collapseParentNodeAndCurrent = useCallback(() => {
    setIsCollapsed(true);
    setTimeout(collapseParentNode, transitionDuration);
  }, [collapseParentNode]);

  const toggleIsCollapsed = useCallback(() => setIsCollapsed(s => !s), []);

  return {
    isCollapsed,
    setIsCollapsed,
    collapseParentNodeAndCurrent,
    toggleIsCollapsed,
  };
};
