// src/components/Exercises.js
import React from "react";
import { useDispatch } from "react-redux";
import { setBodyPart } from "../redux/exerciseSlice";

const Exercises = ({ exercises, bodyPart, setBodyPart }) => {
  return (
    <div>
      {exercises
        .filter(
          (exercise) => exercise.bodyPart === bodyPart || bodyPart === "all"
        )

        .map((exercise) => (
          <div key={exercise.id}>
            <h2>{exercise.name}</h2>
            {/* Render exercise details */}
          </div>
        ))}
    </div>
  );
};

export default Exercises;
