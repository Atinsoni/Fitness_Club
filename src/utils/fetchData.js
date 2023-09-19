
export const exerciseOptions = {
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c294d83fcamsh86e385b605a948bp151b78jsn34199322f956',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c294d83fcamsh86e385b605a948bp151b78jsn34199322f956',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };