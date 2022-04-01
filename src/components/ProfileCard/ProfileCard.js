import React from "react";
import { Card, CardContent, Grid, Paper, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import WorkspacePremiumTwoToneIcon from '@mui/icons-material/WorkspacePremiumTwoTone';


const styles = {
    paperContainer: { width: "100%", height: "100vh" },
    paperHeight: { height: "200px", borderRadius: 2 },
    contentContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    designationRowStyle: { display: 'flex', flexDirection: 'row', marginTop: 5, marginBottom: 5 },
    designationTextMargin: { marginLeft: 15, fontSize: 14 },
    userInfoContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: 150,
        marginLeft: 25
    },
    editBtnStyle: {
        bgcolor: 'background.paper',
        boxShadow: 3,
        borderRadius: 5,
        height: 30,
        width: 100,
        fontSize: 12
    },
    boldTxt: { fontWeight: 'bold', fontSize: 20 },
};

const gold = "#FFD700";
const silver = "#C0C0C0";
const bronze = "#CD7F32";







function ProfileCard({ data }) {
    console.log('useruseruser', data);
    const {
        name,
        designation,
        emp_id,
        team
    } = data;

    return (
        <div style={styles.paperContainer}>
            <Paper elevation={6} sx={styles.paperHeight} >
                <div style={styles.contentContainer}>
                    <div>
                        <CardContent>
                            {/* <Badge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                badgeContent={
                                    <WorkspacePremiumTwoToneIcon sx={{ width: 35, height: 35, color: gold }} />
                                }
                            >
                                <Avatar alt="Travis Howard" src="pa.jpg"
                                    sx={{ width: 150, height: 150, boxShadow: 3 }} />
                            </Badge> */}
                            <Avatar alt="Travis Howard" src="pa.jpg"
                                    sx={{ width: 150, height: 150, boxShadow: 3 }} />
                        </CardContent>
                    </div>
                    <div style={styles.userInfoContainer}>
                        <div>
                            <div style={styles.designationRowStyle}>
                                <Typography sx={styles.boldTxt}>{name}</Typography>
                                <WorkspacePremiumTwoToneIcon sx={{ width: 28, height: 28, color: gold }} />
                            </div>

                            <div style={styles.designationRowStyle}>
                                <DesktopMacOutlinedIcon />
                                <Typography style={styles.designationTextMargin}>{designation}</Typography>
                            </div>
                            <div style={styles.designationRowStyle}>
                                <AssignmentIndOutlinedIcon />
                                <Typography style={styles.designationTextMargin}>{emp_id}</Typography>
                            </div>
                            <div style={styles.designationRowStyle}>
                                <GroupsOutlinedIcon />
                                <Typography style={styles.designationTextMargin}>Team : {team}</Typography>
                            </div>
                        </div>
                        <Button
                            sx={styles.editBtnStyle}
                            variant="outlined"
                            startIcon={<EditIcon />}
                            size='small'
                        >
                            Edit
                        </Button>
                    </div>
                </div>
            </Paper>
        </div >
    );
}

export default ProfileCard;
