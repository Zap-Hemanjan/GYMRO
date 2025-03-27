// src/components/SearchExercises.js
import React, { useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/uiSlice"; // Optional

const SearchExercises = ({ search, setSearch }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch or do other setup work here if necessary
  }, []);

  const handleSearch = () => {
    dispatch(setSearch(search)); // Update the search term
    // Fetch new exercises based on the search term
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="49px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Update search term
          placeholder="Search Exercises"
          type="text"
        />
        <Button onClick={handleSearch}>Search</Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
