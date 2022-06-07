import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import CardMovie from './CardMovie';
import ThePagination from './ThePagination';
import { getAllMovies } from '../redux/action/movieActions';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('The MovieList componented is mounted to the DOM');
    dispatch(getAllMovies());
  }, []);

  const dataMovies = useSelector((state) => state.movies);

  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);
  return (
    <Row className="mt-4">
      {movies.length > 0 ? (
        movies.map((movie) => {
          return <CardMovie key={movie.id} movie={movie} />;
        })
      ) : (
        <div className="container">
          <h2 className="alert-danger rounded text-center p-2">
            لم يتم العثور علي افلام
          </h2>
        </div>
      )}
      {movies.length > 0 && <ThePagination />}
    </Row>
  );
}
export default MovieList;
