import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavBar({ onSearch }) {
  const searchForMovies = (query) => onSearch(query);

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

NavBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
export default NavBar;
