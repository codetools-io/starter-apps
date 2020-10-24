import { useMemo, useState } from 'react';
import * as config from './config';

export default function useImageEditor() {
  const [layers, setLayers] = useState(config?.layers);

  return useMemo(() => {
    return { layers };
  }, [layers]);
}
