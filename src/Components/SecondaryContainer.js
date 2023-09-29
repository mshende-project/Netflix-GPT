import MovieList from "./ MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-10 md:pl-12 pl-4 relative z-20">
          <MovieList
            title={"Now Playing Movies"}
            movies={movies?.nowPlayingMovies}
          />

          <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies?.popularMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies?.nowPlayingMovies}
          />
          <MovieList
            title={"Comedy Movies"}
            movies={movies?.nowPlayingMovies}
          />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
