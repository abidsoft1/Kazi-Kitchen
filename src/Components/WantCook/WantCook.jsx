import CurrentCook from "../CurrentCook/CurrentCook";
import WantToCook from "../WantToCook/WantToCook";

const WantCook = ({
  wantcook,
  handleCurrentCook,
  currentcook,
  timeCalories,
}) => {
  return (
    <div
      className="lg:w-2/5 rounded p-5"
      style={{ border: "1px solid lightgray" }}
    >
      <div>
        <h1 className="text-center m-0">Want to Cook {wantcook.length}</h1>
        <div
          style={{
            height: "2px",
            width: "80%",
            background: "#e6e9ed",
            margin: "10px auto",
          }}
        ></div>
      </div>
      {/* table  */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-bold text-[16px] ">
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {wantcook.map((cook, idx) => (
                <WantToCook
                  handleCurrentCook={handleCurrentCook}
                  cook={cook}
                  key={idx}
                  sn={idx}
                ></WantToCook>
              ))}
              {/* row 2 */}
            </tbody>
          </table>
        </div>
      </div>
      <CurrentCook
        currentcook={currentcook}
        timeCalories={timeCalories}
      ></CurrentCook>
    </div>
  );
};

export default WantCook;
