import * as React from 'react';
import style from './App.scss';
import { Header } from "../Header/AppHeader";
import { Search } from "../Search/Search";
import { Movie, MovieType } from "../Movie/Movie";

var appName = "UMDB";
export const App = () => {
  const [loading, setLoading] = React.useState(true);
  const [movies, setMovies] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState(null);

  const search = (searchValue: any) => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?apikey=47348f7c&s=${searchValue}`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      }); 
  };

  return (
    <div className={style.App}>
      <Header title={appName}/>
      <Search searchAction={search} />
        <div className={style.movies}>
          {loading && !errorMessage ? (
            <span></span>
            ) : errorMessage ? (
            <div className={style.errorMessage}>{errorMessage}</div>
          ) : (
            movies.map((movie: MovieType, index) => (
              <Movie key={`${index}-${movie.Title}`} movie={movie} />
            ))
          )}
        </div>
    </div>
  );
};
