import React, { useContext, useState } from "react";
import { Box } from "@mui/material";

import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";
import HeroBanner from "../components/HeroBanner";
import ExerciseContext from "../context/ExerciseContext";

const Home = () => {
  const [exercises, setExercises] = useState([""]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box>
      <HeroBanner />
      <ExerciseContext.Provider
        value={{ setExercises, bodyPart, setBodyPart, exercises }}
      >
        <SearchExercises
        // setExercises={setExercises}
        // bodyPart={bodyPart}
        // setBodyPart={setBodyPart}
        />
        <Exercises
        // setExercises={setExercises}
        // exercises={exercises}
        // bodyPart={bodyPart}
        />
      </ExerciseContext.Provider>
    </Box>
  );
};

export default Home;
