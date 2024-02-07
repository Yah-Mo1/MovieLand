import React from "react";
interface Movie {
  Title: string;
  Year: number;
  Type: string;
  Poster: string;
  imdbID: string
}

interface MovieCardProps {
  movie: Movie;
}
const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <>
      <div className="movie">
        <div>
          <p>{movie.Year}</p>
        </div>
        <div>
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/400"
            }
            alt={movie.Title}
          />
        </div>
        <div>
          <span>{movie.Type}</span>
          <h3>{movie.Title}</h3>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
