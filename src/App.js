import React, { Component } from "react";
import "./App.css";
import { data } from "./data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, showFavorite } from "./actions/index";

class App extends Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
    console.log(this.props.store.getState());
  }
  isMovieFavorite = (movie) => {
    const { favorites } = this.props.store.getState();
    const index = favorites.indexOf(movie);
    return index !== -1 ? "true" : false;
  };
  onChangeTab = (val) => {
    this.props.store.dispatch(showFavorite(val));
  };
  render() {
    const { list, favorites, showFavorite } = this.props.store.getState();
    console.log(favorites);

    const display = showFavorite ? favorites : list;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavorite ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavorite ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favorites
            </div>
          </div>
          <div className="list">
            {display.map((movie, index) => {
              return (
                <MovieCard
                  key={index}
                  movie={movie}
                  dispatch={this.props.store.dispatch}
                  isMovieFavorite={this.isMovieFavorite(movie)}
                />
              );
            })}
          </div>
          {display.length === 0 ? <div>No movies to display</div> : null}
        </div>
      </div>
    );
  }
}

export default App;
