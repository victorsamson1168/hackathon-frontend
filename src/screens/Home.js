import { Avatar, Badge, Box, Button, styled } from "@mui/material";
import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import TeamMemberCard from "../components/TeamMemberCard/TeamMemberCard";
import ReviewTable from "../components/ReviewTable/ReviewTable";
import Pie from "../components/circularRating";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

const styles = {
  paperHeight: { height: "200px" },
  paperContainer: { width: "100%", height: "100vh" },
  paperHeight2: { height: "auto", borderRadius: 2 },
};
function Home() {

  const user_data = {
    name: "Parag Agrawal",
    designation: "Software Developer",
    emp_id: "MnRN400",
    team: "Dr.Clobo",
  };
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ProfileCard data={user_data} />
        </Grid>
        <Grid item xs={6}>
          <TeamMemberCard />
        </Grid>
        <Grid item xs={6}>
          <div style={styles.paperContainer}>
            <Paper elevation={6} sx={styles.paperHeight2}>
              <ReviewTable />
            </Paper>
          </div>
        </Grid>
      </Grid>

      <h1>Home</h1>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <Pie percentage={50} colour="#42a5f5" />
        <Pie percentage={40} colour="#42a5f5" />
        <Pie percentage={66} colour="#42a5f5" />
        <Pie percentage={22} colour="#42a5f5" />
        <Pie percentage={9} colour="#42a5f5" />
      </Box>
    </div>
  );
}

export default Home;
