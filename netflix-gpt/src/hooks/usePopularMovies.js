import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies, addPopularMovies } from "../utils/movieSlice";

const UsePopularMovies = (props) => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => dispatch(addPopularMovies(response.results)))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default UsePopularMovies;
