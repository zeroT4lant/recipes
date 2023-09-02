import { useGetRecipesQuery } from "../store/api/api";
import CreateRecipe from "./create-recipe/CreateRecipe";
import Header from "./header/Header";
import RecipeItem from "./recipe-item/RecipeItem";
import User from "./user/User";

const userId = null

function App() {
  const { isLoading, data } = useGetRecipesQuery(//получение из базы данных
    // undefined,{ //проверка на условие в хуке
    //   skip: !userId,
    // }
  );

  return (
    <section>
      <Header />
      <CreateRecipe />
      {/* <User/> */}
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
