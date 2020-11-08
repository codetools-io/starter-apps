import { useMemo, useState } from 'react';
import { countBy, orderBy, intersectionBy } from 'lodash';

export default function useHome({
  modules = [],
  components = [],
  categories = [],
}) {
  const uniqueGrommets = useMemo(() => {
    const grommets = new Set(
      components?.flatMap((c) => c?.grommet)?.filter((c) => c)
    );
    return [...grommets]?.sort((a, b) => {
      const nameA = a?.toUpperCase?.();
      const nameB = b?.toUpperCase?.();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
  }, [components]);
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

  const grommetCounts = useMemo(() => {
    const counts = [...uniqueGrommets]?.reduce((accum, grommetName) => {
      return {
        ...accum,
        [grommetName]: 0,
      };
    }, {});
    components.forEach((component) => {
      if (component?.grommet) {
        component.grommet.forEach((grommetName) => {
          counts[grommetName] = counts[grommetName] + 1;
        });
      }
    });

    return counts;
  }, [components, uniqueGrommets]);

  const moduleCounts = useMemo(() => {
    return countBy(
      components?.filter((c) => c?.moduleId),
      'data.module.name'
    );
  }, [components]);

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
      moduleCounts,
      moduleOptions,
      grommetCounts,
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
    moduleCounts,
    moduleOptions,
    grommetCounts,
    grommetOptions,
    setCategoryOptions,
    setGrommetOptions,
    setModuleOptions,
  ]);
}
