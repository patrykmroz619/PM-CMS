export const convertToDate = (timestamp: number) => {
  // received timestamp is number of seconds, but Date object requires miliseconds.
  const date = new Date(timestamp * 1000);

  return date.toLocaleString();
};
