const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

import { MediaType, TrendingResult } from '@/interfaces/apiresults';

export const getTrending = async (): Promise<TrendingResult> => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
      
  };

  console.log("🚀 ~ getTrending ~ API_KEY:", API_KEY)

  
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?language=en-US&page=1`,
    options
  );
  const json = await response.json();
  return json;
};

export const getSearchResults = async (query: string): Promise<TrendingResult> => {
  console.log('SEARCH: ', query);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/search/multi?language=en-US&api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`,
    options
  );

  const data = await response.json();
  return data;
};

export const getMovieDetails = async (id: number, type: MediaType): Promise<any> => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  }

  const response = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}?language=en-US&api_key=${API_KEY}`,
    options
  );
  const data = await response.json();
  return data;
};
