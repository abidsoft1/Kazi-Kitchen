const WantToCook = ({ cook, sn, handleCurrentCook }) => {
  // console.log(cook);
  const { recipe_id, recipe_name, preparing_time, calories } = cook;
  return (
    <>
      <tr className="bg-base-600 font-bold">
        <th>{sn + 1}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time} Minutes</td>
        <td>{calories} Calories</td>
        <td>
          <button
            onClick={() => handleCurrentCook(cook, recipe_id)}
            className="btn hover:bg-green-500  p-4 border-none bg-green-400 rounded-full "
          >
            Preparing
          </button>
        </td>
      </tr>
    </>
  );
};

export default WantToCook;
