import { useCallback, useEffect, useRef, useMemo, useState } from 'react';
import * as config from './config';

export default function useImageEditor() {
  const canvasEl = useRef();
  const [ctx, setCtx] = useState();
  const [image, setImage] = useState(config?.image);
  const [filters, setFilters] = useState(config?.filters);

  const drawImage = useCallback(() => {
    if (canvasEl?.current && ctx) {
      console.log(canvasEl);
      const imageEl = new Image();
      imageEl.src = image.src;
      imageEl.onload = () => {
        canvasEl.current.width = imageEl.naturalWidth;
        canvasEl.current.height = imageEl.naturalHeight;

        // apply filters
        const filters = image.filters
          ?.map((filter) => {
            const args = filter?.args
              ?.map((a) => `${a?.value}${a?.unit}`)
              ?.join?.(', ');
            return `${filter?.name}(${args})`;
          })
          ?.join(' ');
        ctx.filter = filters?.length ? filters : 'none';

        // draw image
        ctx.drawImage(imageEl, 0, 0);
      };
    }
  }, [canvasEl, ctx, image]);

  useEffect(() => {
    if (canvasEl?.current) {
      setCtx(canvasEl?.current?.getContext?.('2d'));
    }
  }, [canvasEl]);

  useEffect(() => {
    if (canvasEl && ctx) {
      drawImage();
    }
  }, [canvasEl, ctx, drawImage]);

  return useMemo(() => {
    function toggleFilter(filter) {
      if (image?.filters?.some((f) => f?.key === filter?.key)) {
        setImage({
          ...image,
          filters: image?.filters?.filter((f) => f !== filter?.key),
        });
      } else {
        setImage({
          ...image,
          filters: [...image?.filters, filter],
        });
      }
    }

    function applyFilter() {}
    function clearFilter() {}

    return { canvasEl, filters, image, applyFilter, clearFilter, toggleFilter };
  }, [canvasEl, filters, image]);
}
