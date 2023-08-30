import React from "react";
import styles from "./RecipeItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../favorites/favoritesSlice";

const RecipeItem = ({ recipe }) => {
  const { favorites } = useSelector((state) => state);

  const dispatch = useDispatch();

  const isExist = favorites.some((r) => r.id === recipe.id);

  return (
    <div className={styles.item}>
      <img src="" alt="" />
      <h2>{recipe.name}</h2>
      <button onClick={() => dispatch(actions.toggleFavorites(recipe))}>
        {isExist ? "Remove From" : "Add to"} favorites
      </button>
    </div>
  );
};

export default RecipeItem;
