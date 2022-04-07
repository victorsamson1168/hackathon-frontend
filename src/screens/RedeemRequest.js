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
    margin_top: { marginTop: 0 },
    width25: { width: '25%' }
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
function RedeemRequest() {

    const user_data = {
        name: 'Parag Agrawal',
        designation: 'Software Developer',
        emp_id: 'MnRN400',
        team: 'Dr.Clobo'
    }
    const manager_name = ['Amar Malik']
    const redeem_requests = [{
        first_name: 'Victor Samson',
        total: 6700,
        requested: 6000
    },
    {
        first_name: 'Akshay Arekar',
        total: 8500,
        requested: 8000
    }]


    const [selectedPoints, setSelectedPoints] = React.useState('')

    const handleChange = (event) => {
        setSelectedPoints(event.target.value);
    };

    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <Grid container spacing={2}>

                <Grid item xs={12} >
                    <Paper elevation={6} sx={styles.paperHeight} >
                        <Typography sx={styles.boldTxt}>All Requests</Typography>
                        <Paper elevation={6} sx={{ padding: 1, marginBottom: 2, backgroundColor: '#d2d2d2'}}>
                            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Typography style={styles.width25}>Name </Typography>
                                <Typography style={styles.width25}>Total Points </Typography>
                                <Typography style={styles.width25}>Requested Points </Typography>
                                <Typography style={styles.width25}>{"        "}</Typography>
                            </Box>
                        </Paper>
                        {redeem_requests.map(item => {
                            return (

                                <Paper elevation={6} sx={{ padding: 1, marginBottom: 2, }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography style={styles.width25}>{item.first_name} </Typography>
                                        <Typography style={styles.width25}>{item.total} </Typography>
                                        <Typography style={styles.width25}>{item.requested} </Typography>
                                        <Box sx={styles.width25}>
                                            <Button
                                                variant="contained"
                                                type="submit"
                                                size="small"
                                            >
                                                Approve
                                        </Button>
                                        </Box>
                                    </Box>
                                </Paper>

                            )
                        })}


                    </Paper>
                </Grid>

                {/* <Grid item xs={2}> </Grid> */}


                {/* <Grid item xs={6}>
                    <img
                        style={{ height: "auto", width: "100%" }}
                        src="redeemPointsDesc.png" alt="RPD" />
                </Grid> */}

            </Grid>
        </div >
    );
}

export default RedeemRequest;
