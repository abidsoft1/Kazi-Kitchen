import SingleRecipe from "../SingleRecipe/SingleRecipe";

const Recipe = ({ recipe, handleWantCook }) => {
  return (
    <div className="w-full lg:w-3/5 rounded-md">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 border-5">
        {recipe.map((recipe) => (
          <SingleRecipe
            recipe={recipe}
            key={recipe.recipe_id}
            handleWantCook={handleWantCook}
          ></SingleRecipe>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
