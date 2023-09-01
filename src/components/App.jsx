import { useGetRecipesQuery } from "../store/api/api";
import Header from "./header/Header";
import RecipeItem from "./recipe-item/RecipeItem";
import User from "./user/User";

function App() {
  const { isLoading, data } = useGetRecipesQuery();

  return (
    <section>
      <Header />
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
