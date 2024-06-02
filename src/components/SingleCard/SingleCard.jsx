import React from "react";

const SingleCard = ({ movie, handleWatchTime }) => {
  //   console.log(movie);
  return (
    <div  className="movie-card card text-center col-md-6">
      <div className="movie-poster w-25 m-auto">
        <img className="w-100" src={movie.poster} alt="Poster" />
      </div>
      <h3>{movie.movieName}</h3>
      <h6>{movie.director}</h6>
      <p>{movie.description}</p>
      <div className="timeAndRating d-flex justify-content-around ">
        <p>WatchTime: {movie.watchTime}</p>
        <p>Rating :{movie.imdbRating}</p>
      </div>
      <button
        onClick={() => handleWatchTime(movie.watchTime)}
        className="btn btn-info w-75 m-auto"
      > 
        Book Now
      </button>
    </div>
  );
};

export default SingleCard;
