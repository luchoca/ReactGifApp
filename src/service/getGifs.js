export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=k7VFFK98vkeu77Kls91NT18uOfSn7ujd&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((info) => ({
    id: info.id,
    title: info.title,
    url: info.images.downsized_medium.url,
  }));
  return gifs;
};
