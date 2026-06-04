const cache = new Map();

const CACHE_DURATION = 60 * 1000; // 60 seconds

const getCachedData = (key) => {
  const cached = cache.get(key);

  if (!cached) return null;

  const isExpired =
    Date.now() - cached.timestamp > CACHE_DURATION;

  if (isExpired) {
    cache.delete(key);
    return null;
  }

  return cached.data;
};

const setCachedData = (key, data) => {
  cache.set(key, {
    data,
    timestamp: Date.now(),
  });
};

module.exports = {
  getCachedData,
  setCachedData,
};