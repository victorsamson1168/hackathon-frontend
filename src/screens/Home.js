import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import ProfileCard from '../components/ProfileCard/ProfileCard';
import TeamMemberCard from '../components/TeamMemberCard/TeamMemberCard';
import ReviewTable from '../components/ReviewTable/ReviewTable'


const styles = {
  paperHeight: { height: "200px"},
  paperContainer: { width: "100%", height: "100vh" },
  paperHeight2: { height: "auto", borderRadius:2 },
};
function Home() {
  const user_data = {
    name: 'Parag Agrawal',
    designation: 'Software Developer',
    emp_id: 'MnRN400',
    team: 'Dr.Clobo'
  }
  const manager_name=['Amar Malik']
  const team_mem_name=['Victor Samson','Akshay Arekar','Siddhant Sanadhaya']
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Grid container spacing={2} >
        <Grid item xs={6} >
          <ProfileCard
            data={user_data}
          />
        </Grid>
        <Grid item xs={6} >
          <TeamMemberCard
          manager={manager_name}
          team_member={team_mem_name}
          />
        </Grid>
        <Grid item xs={6} >
          <div style={styles.paperContainer}>
            <Paper elevation={6} sx={styles.paperHeight2} >
              <ReviewTable
              />
            </Paper>
          </div >
        </Grid>
      </Grid>
    </div >
  );
}

export default Home;
