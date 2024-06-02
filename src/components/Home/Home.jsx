import React, { useState, useEffect } from "react";
import SingleCard from "../SingleCard/SingleCard";

const Home = ({ handleWatchTime }) => {
  const [movies, setMovies] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState(6); 

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const handleSeeMore = () => {
    setVisibleMovies(visibleMovies + 6);
  };

  return (
    <div>
      <div className="movie-container row g-2">
        {movies.slice(0, visibleMovies).map((movie) => (
          <SingleCard
            key={movie.id}
            handleWatchTime={handleWatchTime}
            movie={movie}
          />
        ))}
      </div>
      {visibleMovies < movies.length && (
        <div className="text-center mt-4">
          <button className="btn btn-info" onClick={handleSeeMore}>
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
