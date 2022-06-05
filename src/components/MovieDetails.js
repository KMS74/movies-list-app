import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});

  const params = useParams();
  console.log(params.id);
  // Get movie details data
  const getMoviDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=795495e7c5af3275a9e0a7b7bee6c2ee&language=ar`
    );
    setMovieDetails(res.data);
  };
  useEffect(() => getMoviDetails, []);
  return (
    <div>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4 ">
          <div className="card-detalis  d-flex align-items-center ">
            <img
              className="img-movie w-30"
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
              alt={movieDetails.original_title}
            />
            <div className="justify-content-center text-center  mx-auto">
              <p className="card-text-details border-bottom">
                اسم الفيلم: {movieDetails.title}
              </p>
              <p className="card-text-details border-bottom">
                تاريخ الفيلم :{movieDetails.release_date}
              </p>
              <p className="card-text-details border-bottom">
                عدد المقيمين : {movieDetails.vote_count}
              </p>
              <p className="card-text-details border-bottom">
                التقييم :{movieDetails.vote_average}
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1 ">
          <div className="card-story  d-flex flex-column align-items-start">
            <div className="text-end p-4 ">
              <p className="card-text-title border-bottom">القصة:</p>
            </div>
            <div className="text-end px-2">
              <p className="card-text-story">{movieDetails.overview}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col
          md="10"
          xs="12"
          sm="12"
          className="my-4 d-flex justify-content-center "
        >
          <Link to="/">
            <button
              type="button"
              style={{ backgroundColor: '#E50914', border: 'none' }}
              className="btn btn-primary mx-2"
            >
              عوده للرئيسيه
            </button>
          </Link>
          {/* External Link */}
          <a href={movieDetails.homepage} target="_blank" rel="noreferrer">
            <button
              type="button"
              style={{ backgroundColor: '#E50914', border: 'none' }}
              className="btn btn-primary"
            >
              مشاهده الفيلم
            </button>
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default MovieDetails;
