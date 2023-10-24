const fetchData = async (url: string, init?: RequestInit) => {
  try {
    const data = await fetch(url, init);
    return data;
  } catch (e) {
    return Promise.reject(e);
  }
};

export default fetchData;
