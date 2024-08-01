
export const formatDate = (date: number) => {
  const iso = new Date(date).toISOString()
  const formattedDate = iso.split('.')[0] + 'Z';
  return formattedDate;
}

export const validateTimestamps = (start: number | null, end: number | null, interval: number) => {
  return !!(end && start) && (end - start) < interval
}

export const convertMilliseconds = (ms: number) => {
  const hours = Math.floor(ms / (1000 * 60 * 60));
  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));

  return `${hours}h ${minutes}m`;
};