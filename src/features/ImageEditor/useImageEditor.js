import { useCallback, useEffect, useRef, useMemo, useState } from 'react';
import * as config from './config';

export default function useImageEditor() {
  const canvasEl = useRef();
  const [ctx, setCtx] = useState();
  const [image, setImage] = useState(config?.image);
  const [filters, setFilters] = useState(config?.filters);
  const [toggledSettings, setToggledSettings] = useState();

  const drawImage = useCallback(() => {
    if (canvasEl?.current && ctx) {
      const imageEl = new Image();
      imageEl.src = image.src;
      imageEl.onload = () => {
        canvasEl.current.width = imageEl.naturalWidth;
        canvasEl.current.height = imageEl.naturalHeight;

        // apply filters
        const appliedFilters = Object.values(filters)?.filter(
          (f) => f?.applied
        );
        const filter = appliedFilters
          ?.map((filter) => {
            const args = Object.entries(filter?.args)
              ?.map(([key, arg]) => `${arg?.value}${arg?.unit}`)
              ?.join?.(', ');
            return `${filter?.name}(${args})`;
          })
          ?.join(' ');
        ctx.filter = appliedFilters?.length ? filter : 'none';

        // draw image
        ctx.drawImage(imageEl, 0, 0);
      };
    }
  }, [canvasEl, ctx, image, filters]);

  useEffect(() => {
    if (canvasEl?.current) {
      setCtx(canvasEl?.current?.getContext?.('2d'));
    }
  }, [canvasEl]);

  useEffect(() => {
    if (canvasEl && ctx && image) {
      drawImage();
    }
  }, [canvasEl, ctx, drawImage, image]);

  return useMemo(() => {
    function updateFilter(key, updates) {
      setFilters({
        ...filters,
        [key]: {
          ...filters[key],
          ...updates,
        },
      });
    }

    function applyFilter(key) {
      updateFilter(key, { applied: true });
    }

    function clearFilter(key) {
      updateFilter(key, { applied: false });
    }

    function toggleSettings(val) {
      setToggledSettings(val);
    }

    return {
      canvasEl,
      filters,
      image,
      updateFilter,
      applyFilter,
      clearFilter,
      toggledSettings,
      toggleSettings,
    };
  }, [canvasEl, filters, image, toggledSettings]);
}
