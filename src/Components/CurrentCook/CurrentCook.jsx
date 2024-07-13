import React, { useState } from "react";
import SingleCurrentRec from "../SingleCurrentRec/SingleCurrentRec";
// import TimeAndCalories from "../TimeAndCaloris/TimeAndCalories";

const CurrentCook = ({ currentcook, timeCalories }) => {
  let preparing_time = 0;
  let calories = 0;
  for (let i = 0; i < timeCalories.length; i++) {
    let element = timeCalories[i];
    preparing_time += parseInt(element.preparing_time);
    calories += parseInt(element.calories);
  }
  console.log(preparing_time);
  console.log(calories);
  return (
    <div className="mt-5">
      <h1 className="text-center m-0">
        Currently cooking: {currentcook.length}
      </h1>
      <div
        style={{
          height: "2px",
          width: "80%",
          background: "#e6e9ed",
          margin: "10px auto",
        }}
      ></div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-bold text-[16px] ">
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {currentcook.map((currentRes, idx) => (
              <SingleCurrentRec
                key={idx}
                currentRes={currentRes}
              ></SingleCurrentRec>
            ))}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto">
        <h4>Total Time:{preparing_time} Minutes</h4>
        <h4>Total Calories:{calories} Calories</h4>
      </div>
    </div>
  );
};

export default CurrentCook;
