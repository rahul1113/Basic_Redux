//action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";
export const SET_SHOW_FAVORITE = "SET_SHOW_FAVORITE";

//action Creator
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

export function addFavorite(movie) {
  return {
    type: ADD_FAVORITE,
    movie,
  };
}

export function removeFromFavorite(movie) {
  return {
    type: REMOVE_FROM_FAVORITE,
    movie,
  };
}

export function showFavorite(val) {
  return {
    type: SET_SHOW_FAVORITE,
    val,
  };
}
