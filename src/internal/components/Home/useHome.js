import { useMemo, useState } from 'react';
import { orderBy, uniqBy } from 'lodash';

export default ({ modules = [], components = [], categories = [] }) => {
  const uniqueGrommets = new Set(
    components?.flatMap((c) => c?.grommet)?.filter((c) => c)
  );
  const [grommetOptions, setGrommetOptions] = useState(
    Object.fromEntries([...uniqueGrommets]?.map((c) => [c, false]))
  );
  const [moduleOptions, setModuleOptions] = useState(
    Object.fromEntries(modules?.map((m) => [m?.name, false]))
  );
  const [categoryOptions, setCategoryOptions] = useState(
    Object.fromEntries(categories?.map((c) => [c?.name, false]))
  );

  const filteredCategories = useMemo(() => {
    if (Object.values(categoryOptions)?.every((c) => !c)) {
      return categories;
    }

    return categories?.filter((c) => {
      return categoryOptions[c?.name];
    });
  }, [categories, categoryOptions]);

  const filteredComponents = useMemo(() => {
    const allGrommetUnchecked = Object.values(grommetOptions)?.every((c) => !c);
    const allModulesUnchecked = Object.values(moduleOptions)?.every((c) => !c);
    const allUnchecked = allGrommetUnchecked && allModulesUnchecked;

    if (allUnchecked) {
      return orderBy(components, ['name'], ['asc']);
    }

    const filteredByModules = components?.filter(
      (c) => moduleOptions[c?.data?.module?.name]
    );
    const grommetFilters = Object.entries(grommetOptions)
      ?.filter(([key, val]) => val)
      ?.map(([key, val]) => key);
    const filteredByGrommet = components?.filter((c) =>
      c?.grommet?.some((g) => grommetFilters?.includes(g))
    );

    return orderBy(
      uniqBy([...filteredByModules, ...filteredByGrommet], 'id'),
      ['name'],
      ['asc']
    );
  }, [components, grommetOptions, moduleOptions]);

  return useMemo(() => {
    return {
      categories,
      modules,
      components,
      filteredCategories,
      filteredComponents,
      categoryOptions,
      moduleOptions,
      grommetOptions,
      setCategoryOptions,
      setGrommetOptions,
      setModuleOptions,
    };
  }, [
    categories,
    modules,
    components,
    filteredCategories,
    filteredComponents,
    categoryOptions,
    moduleOptions,
    grommetOptions,
    setCategoryOptions,
    setGrommetOptions,
    setModuleOptions,
  ]);
};
