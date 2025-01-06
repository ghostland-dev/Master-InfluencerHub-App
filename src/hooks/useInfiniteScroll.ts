import { useState, useEffect, useCallback } from 'react';

interface UseInfiniteScrollOptions {
  threshold?: number;
  initialPage?: number;
}

export function useInfiniteScroll(
  callback: (page: number) => Promise<void>,
  options: UseInfiniteScrollOptions = {}
) {
  const { threshold = 100, initialPage = 1 } = options;
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);

  const handleScroll = useCallback(async () => {
    if (loading) return;

    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollHeight - scrollTop - clientHeight < threshold) {
      setLoading(true);
      await callback(page);
      setPage((prev) => prev + 1);
      setLoading(false);
    }
  }, [callback, loading, page, threshold]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { page, loading };
}