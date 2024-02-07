import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

//Adding interface for movies array retrieved from the api
interface Movie {
  Title: string;
  Year: number;
  Type: string;
  Poster: string;
  imdbID: string
}


const API_URL = "http://www.omdbapi.com?apikey=67fc0fa5";

const App = ():React.JSX.Element => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const searchMovies = async (title: String) => {
    const response:Response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    const movies: Movie[] = data.Search;
    console.log(movies)
    setMovies(movies);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="search for movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found </h2>
        </div>
      )}
    </div>
  );
};

export default App;

//exporting changes once againSAADSDSAD
//fixing git bug
