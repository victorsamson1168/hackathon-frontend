import React from "react";
import { Card, CardContent, Grid, Paper, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AvatarGroup from '@mui/material/AvatarGroup';

const styles = {
    paperContainer: { width: "100%", height: "100vh" },
    paperHeight: { height: "200px",borderRadius:2 },
    contentContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    }, 
    avatarImgStyle: { width: 40, height: 40, boxShadow: 3 },
    boldTxt:{fontWeight:'bold',fontSize:16},
    
};

function TeamMemberCard() {
    const total_team = 6
    return (
        <div style={styles.paperContainer}>
            <Paper elevation={6} sx={styles.paperHeight} >
                <div style={styles.contentContainer}>
                    <CardContent>
                        <Typography sx={styles.boldTxt}>My Manager</Typography>
                        <Avatar src="pa.jpg"
                            sx={styles.avatarImgStyle} />
                    </CardContent>
                    <div style={{display: "flex" }}>
                    <CardContent>
                        <Typography sx={styles.boldTxt}>My Team</Typography>
                        <AvatarGroup total={total_team}>
                            <Avatar sx={styles.avatarImgStyle} src="pa.jpg" />
                            <Avatar sx={styles.avatarImgStyle} src="pa.jpg" />
                            <Avatar sx={styles.avatarImgStyle} src="pa.jpg" />
                            <Avatar sx={styles.avatarImgStyle} src="pa.jpg" />
                        </AvatarGroup>                        
                    </CardContent>
                    </div>

                </div>
            </Paper>
        </div >
    );
}

export default TeamMemberCard;
