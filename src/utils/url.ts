/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const formatToValidHttpUrl = (url: string) => {
  if (!url.startsWith('https://')) {
    return `https://${url}`;
  }
  return url;
};
