import { useEffect, useMemo, useState } from "react";

function useOnScreen(ref: any) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => setIsIntersecting(entry.isIntersecting),
        { threshold: 0.3 }
      ),
    []
  );

  useEffect(() => {
    if (!ref) return;
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [observer, ref]);

  return isIntersecting;
}

export default useOnScreen;
