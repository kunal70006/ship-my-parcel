import { useLayoutEffect, useState } from 'react';

export function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  if (typeof window !== 'undefined' && window.document) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
  }
  return size;
}
