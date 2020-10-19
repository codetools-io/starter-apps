import { useMemo, useState } from 'react';
import { orderBy, intersectionBy } from 'lodash';

export default ({ modules = [], components = [], categories = [] }) => {
  const uniqueGrommets = new Set(
    components?.flatMap((c) => c?.grommet)?.filter((c) => c)
  );
  const initialGrommetOptions = Object.fromEntries(
    [...uniqueGrommets]?.map((c) => [c, false])
  );
  const initialModuleOptions = Object.fromEntries(
    modules?.map((m) => [m?.name, false])
  );
  const initialCategoryOptions = Object.fromEntries(
    categories?.map((c) => [c?.name, false])
  );
  const [grommetOptions, setGrommetOptions] = useState({
    ...initialGrommetOptions,
  });
  const [moduleOptions, setModuleOptions] = useState({
    ...initialModuleOptions,
  });
  const [categoryOptions, setCategoryOptions] = useState({
    ...initialCategoryOptions,
  });

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

    const filteredByModules = allModulesUnchecked
      ? components
      : components?.filter(
          (component) => moduleOptions[component?.data?.module?.name]
        );
    const grommetFilters = Object.entries(grommetOptions)
      ?.filter(([key, val]) => val)
      ?.map(([key, val]) => key);
    const filteredByGrommet = allGrommetUnchecked
      ? components
      : components?.filter((component) =>
          grommetFilters?.every((filter) =>
            component?.grommet?.includes(filter)
          )
        );

    return orderBy(
      intersectionBy(filteredByModules, filteredByGrommet, 'id'),
      ['name'],
      ['asc']
    );
  }, [components, grommetOptions, moduleOptions]);

  return useMemo(() => {
    function clearOptions() {
      setGrommetOptions({ ...initialGrommetOptions });
      setModuleOptions({ ...initialModuleOptions });
      setCategoryOptions({ ...initialCategoryOptions });
    }
    return {
      categories,
      modules,
      components,
      clearOptions,
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
    initialGrommetOptions,
    initialModuleOptions,
    initialCategoryOptions,
    moduleOptions,
    grommetOptions,
    setCategoryOptions,
    setGrommetOptions,
    setModuleOptions,
  ]);
};
