import { useMemo } from 'react';
import { orderBy } from 'lodash';

export default function useBookmarks({
  components = [],
  categories = [],
  bookmarks = [],
}) {
  const filteredComponents = useMemo(() => {
    const bookmarked = bookmarks?.reduce((accum, bookmark) => {
      const key = `${bookmark?.categoryId}-${bookmark?.moduleId || 'none'}-${
        bookmark?.componentId
      }`;
      return {
        ...accum,
        [key]: true,
      };
    }, {});

    const filtered = components?.filter((component) => {
      const key = `${component?.categoryId}-${component?.moduleId || 'none'}-${
        component?.id
      }`;

      return bookmarked[key];
    });

    return orderBy(filtered, ['id'], ['asc']);
  }, [bookmarks, components]);

  return useMemo(() => {
    return {
      filteredComponents,
    };
  }, [filteredComponents]);
}
