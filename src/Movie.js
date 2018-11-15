import React from "react";
import { Link } from "react-router-dom";

import "./Movie.css";

const Movie = ({ id, poster, title, rating }) => {
  return (
    <div className="movie">
      <Link to={`/detail/${id}`}>
        <h3>{title}</h3>
        <h3>
          {rating}
          <span>⭐️</span>
        </h3>
        <img src={poster} alt={title} />
      </Link>
    </div>
  );
};

export default Movie;
