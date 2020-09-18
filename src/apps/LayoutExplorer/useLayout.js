import React, { useMemo, useState } from 'react';
import { keyBy, merge } from 'lodash';
import { v4 as uuid } from 'uuid';
import { useParams } from 'react-router-dom';
import { appShell } from 'data';

export default ({
  childComponent: ChildComponent,
  childProps = {
    border: {
      color: 'brand-alt',
      size: 'medium',
      style: 'dashed',
    },
    children: 'Content',
  },
  match,
}) => {
  const { layoutId } = useParams();
  const [layouts] = useState(appShell?.layouts);
  const [rootKey, setRootKey] = useState(uuid());
  const layoutsById = useMemo(() => keyBy(layouts, 'id'), [layouts]);
  const layout = useMemo(() => layoutsById[layoutId], [layoutId, layoutsById]);
  const children = useMemo(() => {
    const childComponents = new Array(layout?.childCount);

    return childComponents.fill(ChildComponent).map((Component, index) => {
      const mergedChildProps = layout?.childProps
        ? merge({}, childProps, layout?.childProps[index])
        : childProps;

      return <Component key={`${rootKey}-${index}`} {...mergedChildProps} />;
    });
  }, [childProps, ChildComponent, layout, rootKey]);

  const code = useMemo(() => {
    const props = Object.entries(layout.presets)
      .map(([propKey, propValue]) => {
        let value = propValue;

        if (Array.isArray(value)) {
          value = `{[${value.map((v) => '"' + v + '"').join(', ')}]}`;
        }

        return `${propKey}=${value}`;
      })
      .join(' ');

    return `\`\`\`
    <${layout.componentType} ${props} />
    \`\`\``;
  }, [layout]);

  return useMemo(() => {
    function resetKeys() {
      setRootKey(uuid());
    }

    function togglePreset(presetName) {
      resetKeys();
    }

    return {
      childProps,
      children,
      code,
      layout,
      layoutId,
      layouts,
      layoutsById,
      rootKey,
      resetKeys,
      togglePreset,
    };
  }, [
    childProps,
    children,
    code,
    layout,
    layoutId,
    layouts,
    layoutsById,
    rootKey,
  ]);
};
