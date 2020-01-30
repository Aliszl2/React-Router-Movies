import React from "react";
import { Link, NavLink, Route } from "react-router-dom";
// import Movie from "./Movie"

const SavedList = ({ handleDelete, list }) => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    <div className="film-list">
      {list.map(movie => (
        <div>
          <Link to={`/movies/${movie.id}`}>
            <span className="saved-movie">{movie.title}</span>
          </Link>
          <button onClick={() => handleDelete(movie.id)}>X</button>
        </div>
      ))}
    </div>
   
    <Link to={`/`}>
      <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;
