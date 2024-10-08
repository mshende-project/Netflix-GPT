import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => dispatch(addNowPlayingMovies(response.results)))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useNowPlayingMovies;
