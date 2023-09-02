import React, { useState } from "react";
import { useGetRecipesQuery } from "../store/api/api";
import CreateRecipe from "./create-recipe/CreateRecipe";
import Header from "./header/Header";
import RecipeItem from "./recipe-item/RecipeItem";

// const userId = null

function App() {
  const [searchTerm,setSearchTerm] = useState('')

  const [queryTerm,setQueryTerm] = useState('')

  const handleSearch = () => {
    setQueryTerm(searchTerm)
  }

  const { isLoading, data } = useGetRecipesQuery(queryTerm);

  //выше внутри скобок useGetRecipesQuery
  //получение из базы данных
    // undefined,{ //проверка на условие в хуке
    //   skip: !userId,
    // }

  return (
    <section>
      <Header />
      <CreateRecipe />
      {/* <User/> */}
      <div>
        <p>If you wanna find:</p>
        <input
        type="search"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Enter search term"/>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : data ? (
          data.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
        ) : (
          <div>Not found</div>
        )}
      </div>
    </section>
  );
}

export default App;
