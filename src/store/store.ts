import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoritesReducer } from "../favorites/favoritesSlice";//вытащили reducer как favoritesReducer
import { userSlice } from "./user/userSlice";
import { api } from "./api/api";


const reducers = combineReducers({
  favorites: favoritesReducer,
  user: userSlice.reducer,
  [api.reducerPath]: api.reducer, 
})

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>

