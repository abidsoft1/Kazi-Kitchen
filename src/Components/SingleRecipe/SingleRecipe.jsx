import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
const SingleRecipe = ({ recipe, handleWantCook }) => {
  const {
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
    recipe_img,
  } = recipe;
  return (
    <div
      className="card bg-base-100 shadow-xl"
      style={{ border: "1px solid lightgray" }}
    >
      <div className="h-[250px]">
        <img
          src={recipe_img}
          alt="recipe"
          className="w-full h-full rounded-t-md"
        />
      </div>
      <div className="card-body px-5 py-3">
        <h2 className="card-title p-0 m-0">{recipe_name}</h2>
        <p className="m-0 mt-3 text-[#878787] text-[18px]">
          {short_description}
        </p>
        <div
          style={{ height: "1px", width: "100%", background: "#e6e9ed" }}
        ></div>
        <h3>Ingredients {ingredients.length}</h3>
        <ul className="m-0 px-4 py-0">
          {ingredients.map((ingred, idx) => (
            <li key={idx} className="text-[#878787] my-2 text-[18px]">
              {ingred}
            </li>
          ))}
        </ul>
        <div
          style={{ height: "1px", width: "100%", background: "#e6e9ed" }}
        ></div>
        <div className="flex justify-between">
          <h5 className="flex items-center text-[#878787]">
            <MdOutlineWatchLater className="mr-2" />
            {preparing_time} Minutes
          </h5>
          <h5 className="flex items-center text-[#878787]">
            <MdOutlineLocalFireDepartment className="mr-2" />
            {calories} Calories
          </h5>
        </div>
        <div className="card-actions justify-start">
          <button
            onClick={() => handleWantCook(recipe)}
            className="btn hover:bg-green-500 px-10 p-3 border-none bg-green-400 rounded-full "
          >
            Want To Cook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
