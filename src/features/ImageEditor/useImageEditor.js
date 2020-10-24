import { useEffect, useRef, useMemo, useState } from 'react';
import * as config from './config';

export default function useImageEditor() {
  const canvasEl = useRef();
  const [ctx, setCtx] = useState();
  const [layers, setLayers] = useState(config?.layers);
  const [document, setDocument] = useState(config?.document);
  const [filters, setFilters] = useState(config?.filters);

  useEffect(() => {
    if (canvasEl?.current) {
      setCtx(canvasEl?.current?.getContext?.('2d'));
    }
  }, [canvasEl]);

  useEffect(() => {
    if (ctx && layers?.length) {
      function drawLayer(layer) {
        const image = new Image();
        image.src = layer.settings.src;
        image.onload = () => {
          canvasEl.current.width = image.naturalWidth;
          canvasEl.current.height = image.naturalHeight;

          // apply filters
          ctx.filter = layer?.filters?.length
            ? layer?.filters.join(' ')
            : 'none';
          // draw image
          ctx.drawImage(image, 0, 0);

          console.log(layer?.filters.join(' '));
        };
      }

      layers.forEach((layer) => {
        if (layer?.type === 'image') {
          drawLayer(layer);
        }
      });
    }
  }, [canvasEl, ctx, layers]);
  return useMemo(() => {
    return { canvasEl, document, filters, layers };
  }, [canvasEl, document, filters, layers]);
}
