import React from "react";
import styles from "./RecipeItem.module.css";
import { useActions } from "../../favorites/hooks/useActions";
import { useFavorites } from "../../favorites/hooks/useFavorites";

const RecipeItem = ({ recipe }) => {
  
  const {favorites} = useFavorites()

  const { toggleFavorites } = useActions();

  const isExist = favorites.some((r) => r.id === recipe.id);

  return (
    <div className={styles.item}>
      {/* <img src="" alt="" /> */}
      <h2>{recipe.name}</h2>
      <button onClick={() => toggleFavorites(recipe)}>
        {isExist ? "Remove From" : "Add to"} favorites
      </button>
    </div>
  );
};

export default RecipeItem;
