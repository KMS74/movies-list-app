import { Container } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import MovieDetails from './components/MovieDetails';

function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Get all movies data form API using axoi
  const getAllMovies = async () => {
    const res = await axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=795495e7c5af3275a9e0a7b7bee6c2ee&language=ar'
    );
    setMovies(res.data.results);
    setPageCount(Math.ceil(res.data.total_pages));
  };

  // Get all current page movies data form API using axoi
  const getAllCurrentPageMovies = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=795495e7c5af3275a9e0a7b7bee6c2ee&language=ar&page=${page}`
    );
    setMovies(res.data.results);
    setPageCount(Math.ceil(res.data.total_pages));
  };
  // Search For Movies
  const searchForMovies = async (query) => {
    if (query === '') {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=795495e7c5af3275a9e0a7b7bee6c2ee&language=ar&query=${query}`
      );
      setMovies(res.data.results);
      setPageCount(Math.ceil(res.data.total_pages));
    }
  };

  useEffect(() => {
    console.log('The App componented is mounted to the DOM');
    getAllMovies();
  }, []);
  return (
    <div className="font color-body">
      <NavBar onSearch={searchForMovies} />

      <Container>
        {/* <BrowserRouter> */}
        <Routes>
          <Route
            path="/"
            element={
              <MovieList
                movies={movies}
                getAllCurrentPageMovies={getAllCurrentPageMovies}
                pageCount={pageCount}
              />
            }
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
        {/* </BrowserRouter> */}
      </Container>
    </div>
  );
}

export default App;
