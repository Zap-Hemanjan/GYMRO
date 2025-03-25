export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    //'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    "x-rapidapi-key": "8de8bb5c2emsh7d7d6071c031d3ap15add6jsn93c4da1270f5",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "8de8bb5c2emsh7d7d6071c031d3ap15add6jsn93c4da1270f5",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
