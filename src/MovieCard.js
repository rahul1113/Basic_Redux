import React, { Component } from "react";
import { addFavorite, removeFromFavorite } from "./actions/index";

export default class MovieCard extends Component {
  handleFavoriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(addFavorite(movie));
  };
  handleunFavoriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(removeFromFavorite(movie));
  };
  render() {
    const { movie, isMovieFavorite } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="Plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {isMovieFavorite ? (
              <button
                className="favorite-btn"
                onClick={this.handleunFavoriteClick}
              >
                UnFavorite
              </button>
            ) : (
              <button
                className="unfavourite-btn"
                onClick={this.handleFavoriteClick}
              >
                Favorite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
