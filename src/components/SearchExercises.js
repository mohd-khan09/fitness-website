import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { fetchData } from "../utils/fetchData";
import { exerciseOptions } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setsearch] = useState("");

  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchexercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchexercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData  = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);


      const searchedExercises  = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
        || item.target.toLowerCase().includes(search)
        || item.equipment.toLowerCase().includes(search)
        || item.bodyPart.toLowerCase().includes(search),
);
window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      setsearch("");
      setExercises(searchedExercises);
    }
  };
  return (
    <Stack
      alignItems={"center"}
      mt={"37px"}
      justifyContent={"center"}
      p={"20px"}
    >
      <Typography
        fontWeight={700}
        mb={"50px"}
        textAlign={"center"}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
      >
        Aewsome Exercises You <br /> Should Know
      </Typography>
      <Box position={"relative"} mb="72px">
        <TextField
          height="76px"
          value={search}
          onChange={(e) => setsearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "white",
            textTransform: "none",
            width: { lg: "175px", xs: "90px" },
            fontSize: { lg: "20px", xs: "18px" },
            height: "56px",
            Position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          search
        </Button>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          padding: "20px",
        }}
      >
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart}/>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
