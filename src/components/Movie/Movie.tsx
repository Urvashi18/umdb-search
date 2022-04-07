import * as React from 'react';
import style from '../App/App.scss'

export interface MovieType {
    Title: string,
    Poster: string,
    Year: string
}

export interface MovieProps {
   movie: MovieType
}

export const Movie = (movieProps: MovieProps) => {
  return (
    <div className={style.movie}>
      <h4>{movieProps.movie.Title}</h4>
      <div>
        <img className='image'
          width="100"
          alt={`The movie titled: ${movieProps.movie.Title}`}
          src={movieProps.movie.Poster}
        />
      </div>
      <p>({movieProps.movie.Year})</p>
    </div>
  );
};
