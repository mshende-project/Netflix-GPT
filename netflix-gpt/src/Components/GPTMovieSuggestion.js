import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./ MovieList";

const GPTMovieSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  if (!movieResults) return null;

  return (
    <div className="m-4 p-4 bg-black text-white bg-opacity-90">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GPTMovieSuggestion;
