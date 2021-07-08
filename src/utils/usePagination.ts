import { useState, useCallback } from 'react';

type PaginationValues<T> = {
  pageSize: number;
  pageIndex: number;
  maxPages: number;
  canPreviousPage: boolean;
  canNextPage: boolean;
  setPageSize: (size: number) => void;
  previousPage: () => void;
  nextPage: () => void;
  view: Array<T>;
};

export const usePagination: <T>(list: Array<T>) => PaginationValues<T> = (
  list,
) => {
  const [pageSize, setPageSize] = useState(5);
  const [pageIndex, setPageIndex] = useState(0);
  const [maxPages, setMaxPages] = useState(Math.ceil(list.length / pageSize));

  const previousPage = useCallback(() => {
    if (pageIndex === 0) return;
    setPageIndex(pageIndex - 1);
  }, [pageIndex, setPageIndex]);

  const nextPage = useCallback(() => {
    if (pageIndex >= maxPages) return;
    setPageIndex(pageIndex + 1);
  }, [maxPages, pageIndex, setPageIndex]);

  const canPreviousPage = pageIndex > 0;
  const canNextPage = maxPages - pageIndex > 1;
  const view = list.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);

  const wrapSetPageSize = useCallback(
    (size: number) => {
      if (size < 1 || size > 100) return;

      const firstIndex = pageSize * pageIndex;
      setPageIndex(Math.floor(firstIndex / size));
      setPageSize(size);
      setMaxPages(Math.ceil(list.length / size));
    },
    [list.length, pageIndex, pageSize],
  );

  return {
    pageSize,
    pageIndex,
    maxPages,
    canPreviousPage,
    canNextPage,
    setPageSize: wrapSetPageSize,
    previousPage,
    nextPage,
    view,
  };
};
