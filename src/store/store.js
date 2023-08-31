import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoritesReducer } from "../favorites/favoritesSlice";//вытащили reducer как favoritesReducer

const reducers = combineReducers({
  favorites: favoritesReducer
})

export const store = configureStore({
  reducer: reducers,
});
