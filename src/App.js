import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className="font color-body">
      <NavBar />

      <Container>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
