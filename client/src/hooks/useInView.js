import { useEffect, useRef, useState } from 'react';

/**
 * Returns [ref, inView] — inView flips to true the first time the element
 * scrolls into the viewport (used for scroll-triggered animations).
 */
export default function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, inView]);

  return [ref, inView];
}
