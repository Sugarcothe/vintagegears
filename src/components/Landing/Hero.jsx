import { Box, Card, Fab, Grid, Typography } from "@mui/material";
import React from "react";
import vintage from "../../assets/vint.png";
import { Search } from "@mui/icons-material";
import shadows from "@mui/material/styles/shadows";

const Hero = () => {
  return (
    <Box
      sx={{
        background: "#ededed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "10vh auto 0 auto",
        "@media (max-width:600px)": {
          height: "89vh",
        },
      }}
    >
      <Typography
        sx={{
          marginTop: "7vh",
          fontSize: "4vw",
          fontWeight: "700",
          textAlign: "center",
          "@media (max-width:600px)": {
            fontSize: "4vh",
            marginTop: "unset",
            width: "80vw"
          },
        }}
      >
        Buy Your Dream Ride
      </Typography>
      <Typography
        sx={{
          margin: "1vh 0",
          fontSize: "1.3vw",
          color: "rgb(16, 61, 56)",
          textAlign: "center",
          "@media (max-width:600px)": {
            margin: "1vh 0",
            fontSize: "4vw",
          },
        }}
      >
        Explore Our Diverse Fleet for Your Perfect Journey
      </Typography>
      <Fab
        sx={{
          color: "#ededed",
          background: "rgb(16, 61, 56)",
          width: "15vw",
          borderRadius: "5vw",

          "@media (max-width:600px)": {
            width: "55vw",
            borderRadius: "5vh",
            fontSize: "3.5vw",
            marginTop: "5vh"
          },
        }}
      >
        Buy Your Ride Now
      </Fab>
      <img style={{ width: "90vw", marginTop: "5vh" }} src={vintage} alt="" />
      <Grid
        sx={{
          display: "flex",
          marginTop: "-4vh",
          "@media (max-width:600px)": {
            display: "none",
            marginTop: "-2vh",
          },
        }}
      >
        <Card sx={{ width: "15vw", background: "white" }}>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "2vh 1vw",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Cars</Typography>
            <Search
              sx={{
                color: "#ededed",
                background: "rgb(22,56,42)",
                width: "1.5vw",
                height: "1.5vw",
                padding: "5px",
                borderRadius: "50%",
              }}
            />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              padding: "2vh 1vw",
              textAlign: "left",
              alignItems: "left",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Start</Typography>
            <Typography sx={{ fontWeight: "bold", color: "#333" }}>
              Aug 2 1:00 PM
            </Typography>
          </Grid>
        </Card>
        <Card
          sx={{
            display: "flex",
            height: "10vh",
            marginTop: "12vh",
            boxShadow: "none",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              padding: "2vh 1vw",
              textAlign: "left",
              alignItems: "left",
              width: "12vw",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Start</Typography>
            <Typography sx={{ color: "#7F8389" }}>Aug 2 1:00 PM</Typography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              padding: "2vh 1vw",
              textAlign: "left",
              alignItems: "left",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Start</Typography>
            <Typography sx={{ color: "#7F8389" }}>Aug 2 1:00 PM</Typography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              padding: "2vh 1vw",
              textAlign: "left",
              alignItems: "left",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Start</Typography>
            <Typography sx={{ color: "#7F8389" }}>Aug 2 1:00 PM</Typography>
          </Grid>
        </Card>

        <Box
          sx={{
            display: "flex",
            marginTop: "10vh",
            marginLeft: "5vw",
            gap: "5vw",
          }}
        >
          <Grid>
            <Typography
              sx={{ fontSize: "2.4vw", fontWeight: "500", color: "#333" }}
            >
              100+
            </Typography>
            <Typography
              sx={{ color: "#7F8389", fontSize: "1.4vw", marginTop: "-1vh" }}
            >
              Types of Machines
            </Typography>
          </Grid>
          <Grid>
            <Typography
              sx={{ fontSize: "2.4vw", fontWeight: "500", color: "#333" }}
            >
              30k
            </Typography>
            <Typography
              sx={{ color: "#7F8389", fontSize: "1.4vw", marginTop: "-1vh" }}
            >
              Client Served
            </Typography>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default Hero;
