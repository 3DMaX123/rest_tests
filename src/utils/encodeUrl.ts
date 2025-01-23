export const encodeUrl = (url: string): string => {
  return encodeURIComponent(url.toLowerCase().trim());
};
