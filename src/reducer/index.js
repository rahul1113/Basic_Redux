import {
  ADD_MOVIES,
  ADD_FAVORITE,
  REMOVE_FROM_FAVORITE,SET_SHOW_FAVORITE
} from "../actions/index";

const initialMovieState = {
  list: [],
  favorites: [],
  showFavorite: false,
};
export default function movies(state = initialMovieState, action) {
  if (action.type === ADD_MOVIES) {
    return {
      ...state,
      list: action.movies,
    };
  }
  if (action.type === ADD_FAVORITE) {
    return {
      ...state,
      favorites: [action.movie, ...state.favorites],
    };
  }
  if (action.type === REMOVE_FROM_FAVORITE) {
    const filteredArray = state.favorites.filter(
      (movie) => movie.title !== action.movie.title
    );
    return {
      ...state,
      favorites: filteredArray,
    };
  }
  if (action.type === SET_SHOW_FAVORITE) {
    return {
      ...state,
      showFavorite: action.val,
    };
  }
  return state;
}
