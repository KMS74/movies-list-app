import axios from 'axios';
import ALLMOVIES from '../types/moviesType';

const getAllMovies = () => {
  return async (dispatch) => {
    // Get all movies data form API
    const res = await axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=795495e7c5af3275a9e0a7b7bee6c2ee&language=ar'
    );
    dispatch({
      type: ALLMOVIES,
      allMoviesData: res.data.results,
      pages: Math.ceil(res.data.total_pages),
    });
  };
};

const searhMovies = (query) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=795495e7c5af3275a9e0a7b7bee6c2ee&language=ar&query=${query}`
    );
    dispatch({
      type: ALLMOVIES,
      allMoviesData: res.data.results,
      pages: Math.ceil(res.data.total_pages),
    });
  };
};

const moviesOnPage = (page) => {
  return async (dispatch) => {
    // Get all movies data form API
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=795495e7c5af3275a9e0a7b7bee6c2ee&language=ar&page=${page}`
    );
    dispatch({
      type: ALLMOVIES,
      allMoviesData: res.data.results,
      pages: Math.ceil(res.data.total_pages),
    });
  };
};

export { getAllMovies, searhMovies, moviesOnPage };
