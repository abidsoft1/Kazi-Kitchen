import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import Recipe from "./Components/Recipe/Recipe";
import RecipeTItle from "./Components/RecipeTitle/RecipeTItle";
import WantCook from "./Components/WantCook/WantCook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = () => toast("Recipe Already Selected!");
  const [recipe, SetRecipe] = useState([]);
  useEffect(() => {
    fetch("Recipe.JSON")
      .then((res) => res.json())
      .then((data) => SetRecipe(data));
  }, []);
  // want cook functionality
  const [wantcook, SetWantCook] = useState([]);
  const handleWantCook = (cook) => {
    if (!wantcook.includes(cook)) {
      const newWantCook = [...wantcook, cook];
      SetWantCook(newWantCook);
    } else {
      notify();
    }
  };
  // current cook functionality
  const [CurrentCook, setCurrentCook] = useState([]);
  const [timeCalories, setTimeCaloris] = useState([]);

  const handleCurrentCook = (cook, id) => {
    // update remaining recipe
    setTimeCaloris([...timeCalories, cook]);
    const UpdateRemainingRecipe = wantcook.filter(
      (cookId) => cookId.recipe_id !== id
    );
    SetWantCook(UpdateRemainingRecipe);

    // update current cooking recipe
    const remainingRecipe = wantcook.filter(
      (cookId) => cookId.recipe_id === id
    );
    setCurrentCook([...CurrentCook, remainingRecipe]);
  };
  // console.log(CurrentCook);
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-3 md:px-0">
        <Header></Header>
        <Banner></Banner>
        <RecipeTItle></RecipeTItle>
        <div className="flex justify-between gap-5 flex-col lg:flex-row">
          <Recipe recipe={recipe} handleWantCook={handleWantCook}></Recipe>
          <WantCook
            handleCurrentCook={handleCurrentCook}
            wantcook={wantcook}
            currentcook={CurrentCook}
            timeCalories={timeCalories}
          ></WantCook>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
