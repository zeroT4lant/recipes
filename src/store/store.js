import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoritesReducer } from "../favorites/favoritesSlice";

const reducers = combineReducers({
  favorites: favoritesReducer
})

export const store = configureStore({
  reducer: reducers, //импортировали из favoritesSlice
});
