import React from 'react';
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CardMovie from './CardMovie';
import ThePagination from './ThePagination';

function MovieList({ movies, getAllCurrentPageMovies, pageCount }) {
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
      {movies.length > 0 && (
        <ThePagination
          getAllCurrentPageMovies={getAllCurrentPageMovies}
          pageCount={pageCount}
        />
      )}
    </Row>
  );
}
MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  getAllCurrentPageMovies: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
};
export default MovieList;
