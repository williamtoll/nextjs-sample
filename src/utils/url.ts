/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { parse } from 'query-string';

type ParsedSearch = { [key: string]: string };

export const parseUrlParams = (search: string) => {
  const parsed: ParsedSearch = {};

  Object.entries(parse(search)).forEach(([key, value]) => {
    if (value === null) {
      return;
    }

    if (typeof value === 'string') {
      parsed[key] = decodeURIComponent(value);
    } else {
      parsed[key] = decodeURIComponent(value[0]);
    }
  });

  return parsed;
};

export const formatToValidHttpUrl = (url: string) => {
  if (!url.startsWith('https://')) {
    return `https://${url}`;
  }

  return url;
};
