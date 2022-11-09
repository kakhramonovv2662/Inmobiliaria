export const getSubdomain = () => {
  const host = window.location.host;
  const arr = host.split('.').slice(0, host.includes('localhost') ? -1 : -2);
  return arr.at(-1);
};
