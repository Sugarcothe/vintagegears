import { Grid, Typography } from "@mui/material";
import React from "react";

const Footbar = () => {
  return (
    <Grid
      sx={{
        background: "rgb(16, 61, 56)",
        color: "#ededed",
        textAlign: "center",
        padding: "2vh 0",
        position: "bottom",
      }}
    >
      <Typography
        sx={{
          fontSize: "1.3vw",
          letterSpacing: "10px",
          "@media (max-width:600px)": {
            fontSize: "4.3vw",
          },
        }}
      >
        Book Your Ride
      </Typography>
    </Grid>
  );
};

export default Footbar;
