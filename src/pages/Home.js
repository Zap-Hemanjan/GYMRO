// src/pages/Home.js
import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setExercises, setBodyPart } from "../redux/exerciseSlice";
import { setSearch } from "../redux/uiSlice";
import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";
import HeroBanner from "../components/HeroBanner";
import { fetchData, exerciseOptions } from "../utils/fetchData";

const Home = () => {
  const dispatch = useDispatch();
  const { exercises, bodyPart } = useSelector((state) => state.exercise);
  const { search } = useSelector((state) => state.ui);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      dispatch(setExercises(exercisesData));
    };
    fetchExercisesData();
  }, [dispatch]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        search={search}
        setSearch={(val) => dispatch(setSearch(val))}
      />{" "}
      <Exercises
        exercises={exercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </Box>
  );
};

export default Home;
