import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Landing/Hero";
import { Grid } from "@mui/material";
import Footbar from "../components/Navbar/Footbar";

const Landing = () => {
  return (
    <Grid sx={{ height: "100%" }}>
      <Navbar />
      <Hero />
      <Footbar/>
    </Grid>
  );
};

export default Landing;
