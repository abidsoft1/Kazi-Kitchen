const SingleCurrentRec = ({ currentRes }) => {
  const [recipe_id] = currentRes;
  const { recipe_name, preparing_time, calories } = recipe_id;
  return (
    <>
      <tr className="bg-base-600 font-bold">
        <th></th>
        <td>{recipe_name}</td>
        <td>{preparing_time} Minutes</td>
        <td>{calories} Calories</td>
      </tr>
    </>
  );
};

export default SingleCurrentRec;
