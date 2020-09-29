import { useEffect, useState } from 'react';

export default function useDebounce(debouncedFunction, delay = 500) {
  const [executionId, setExecutionId] = useState();

  useEffect(() => {
    return () => {
      if (executionId) {
        clearTimeout(executionId);
      }
    };
  }, [executionId]);

  return (...props) => {
    if (executionId) {
      clearTimeout(executionId);
    }

    const timeoutId = setTimeout(() => {
      debouncedFunction(...props);
    }, delay);

    setExecutionId(timeoutId);
  };
}
