import { Avatar, Badge, Box, Button, styled } from "@mui/material";
import React from "react";
import {
  Grid, Paper, Typography, CardContent, Tooltip, FormControl,
  InputLabel, Select, MenuItem
} from "@mui/material";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import TeamMemberCard from "../components/TeamMemberCard/TeamMemberCard";
import ReviewTable from "../components/ReviewTable/ReviewTable";
import Pie from "../components/circularRating";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";


const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

const styles = {
  paperHeight: { height: "auto", padding: 3, flexDirection: 'row', justifyContent: 'space-between' },
  paperContainer: { width: "100%", height: "100vh" },
  paperHeight2: { height: "auto", borderRadius: 2 },
  boldTxt: { fontWeight: "bold", fontSize: 19, marginBottom: 2 },
};

const points_type = [
  "1000",
  "2500",
  "4500",
  "7000",
  "8000",
  "9000",
  "9500",
  "1000 and more"
]
function Redeem() {

  const user_data = {
    name: 'Parag Agrawal',
    designation: 'Software Developer',
    emp_id: 'MnRN400',
    team: 'Dr.Clobo'
  }
  const manager_name = ['Amar Malik']
  const team_mem_name = ['Victor Samson', 'Akshay Arekar', 'Siddhant Sanadhaya']


  const [selectedPoints, setSelectedPoints] = React.useState('')

  const handleChange = (event) => {
    setSelectedPoints(event.target.value);
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Grid container spacing={2}>

        <Grid item xs={6} >
          <Paper elevation={6} sx={styles.paperHeight} >
            <Typography sx={styles.boldTxt}>Total redeemable points</Typography>

            <Typography sx={{...styles.boldTxt,fontSize: 37,color: "#F48126"}}>6700</Typography>
            <Typography >Select your points to redeem.
             </Typography>
             <Typography sx={{ marginBottom: 2 }}>
            And send a request.
             </Typography>
            <Box sx={{ width: '100%',marginBottom:15 }}>
              <FormControl fullWidth>
                <InputLabel sx={{ fontSize: 14 }}>Points</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedPoints}
                  label="Month"
                  onChange={handleChange}
                  size="small"
                  sx={{  fontWeight: 'bold' }}
                >
                  {points_type.map((item, index) => {
                    return (
                      <MenuItem value={item}>{item}</MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            </Box>

            <Button
                  variant="contained"
                  type="submit"
                  endIcon={<ArrowForwardIosTwoToneIcon />}
                >
                  Send Request
                </Button>
          </Paper>
        </Grid>

        {/* <Grid item xs={2}> </Grid> */}
          
       
        <Grid item xs={6}>
          <img
            style={{ height: "auto", width: "100%" }}
            src="redeemPointsDesc.png" alt="RPD" />
        </Grid>
        
      </Grid>
    </div >
  );
}

export default Redeem;
