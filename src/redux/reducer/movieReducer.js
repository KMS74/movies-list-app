import ALLMOVIES from '../types/moviesType';

const initialValue = { movies: [], pageCount: 0 };

const moviesReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ALLMOVIES:
      return { movies: action.allMoviesData, pageCount: action.pages };

    default:
      return state;
  }
};

export default moviesReducer;
