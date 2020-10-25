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
    if (canvasEl && ctx && image) {
      drawImage();
    }
  }, [canvasEl, ctx, drawImage, image]);

  return useMemo(() => {
    function updateFilterArg({ filterKey, argKey, value }) {
      if (image?.filters?.some((f) => f?.key === filterKey)) {
        setImage({
          ...image,
          filters: image?.filters?.map((f) => {
            if (f?.key !== filterKey) {
              return f;
            }

            return {
              ...f,
              args: f?.args?.map((a) => {
                if (a?.key !== argKey) {
                  return a;
                }

                return {
                  ...a,
                  value,
                };
              }),
            };
          }),
        });
      }
    }

    function removeFilter(filter) {
      setImage({
        ...image,
        filters: image?.filters?.filter((f) => f !== filter?.key),
      });
    }

    return { canvasEl, filters, image, updateFilterArg, removeFilter };
  }, [canvasEl, filters, image]);
}
