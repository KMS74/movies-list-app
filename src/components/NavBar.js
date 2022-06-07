import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';

import { getAllMovies, searhMovies } from '../redux/action/movieActions';

function NavBar() {
  const dispatch = useDispatch();

  // Search For Movies
  const searchForMovies = async (query) => {
    if (query === '') {
      dispatch(getAllMovies());
    } else {
      dispatch(searhMovies(query));
    }
  };

  return (
    <div className="nav-style w-100 ">
      <Container>
        <Row className="pt-2">
          <Col xs="2" lg="1">
            <Link to="/">
              <img
                className="logo"
                src="https://raw.githubusercontent.com/bakrgit/movies-list-project/master/src/images/logo.png"
                alt="logo"
              />
            </Link>
          </Col>
          <Col xs="10" lg="11" className="d-flex align-items-center">
            <div className="search w-100">
              <i className="fa fa-search" />

              <input
                onChange={(e) => searchForMovies(e.target.value)}
                type="text"
                placeholder="أبحث"
                className="form-control"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NavBar;
