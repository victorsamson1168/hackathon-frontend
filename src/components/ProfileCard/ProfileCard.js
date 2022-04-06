import React from "react";
import { Box, Card, CardContent, Grid, Paper, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DesktopMacOutlinedIcon from "@mui/icons-material/DesktopMacOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import WorkspacePremiumTwoToneIcon from "@mui/icons-material/WorkspacePremiumTwoTone";

const styles = {
  paperContainer: { width: "100%", marginTop: "8px", marginBottom: "10px" },
  paperHeight: { height: "auto", borderRadius: 2 },
  contentContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  designationRowStyle: {
    display: "flex",
    flexDirection: "row",    
  },
  designationTextMargin: { marginLeft: 6, fontSize: 12 },
  userInfoContainer: {
    width: "65%",
    display: "flex",
    flexDirection: "column",    
  },
  editBtnStyle: {
    boxShadow: 3,
    borderRadius: 5,
    height: 30,
    width: "90%",
    fontSize: 12,
  },
  boldTxt: { fontWeight: "bold", fontSize: 15, whiteSpace: "nowrap" },
};

const gold = "#FFD700";
const silver = "#C0C0C0";
const bronze = "#CD7F32";

const user_details = JSON.parse(localStorage.getItem("user_details"));

function ProfileCard({ data }) {
  console.log("useruseruser", data);
  const { name, designation, emp_id, team } = data;

  return (
    <div style={styles.paperContainer}>
      {/* <Paper elevation={6} sx={styles.paperHeight}> */}
      {/* <CardContent> */}
      <div style={styles.contentContainer}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "4%",
            marginTop:"2%",
          }}
        >
          {/* <CardContent> */}
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
          <Avatar
            alt={user_details?.first_name}
            src={user_details?.image_url}
            sx={{ width: 50, height: 50, boxShadow: 3 }}
          />
          <p style={{ fontSize: "11px", fontWeight:'bold' }}>{user_details?.emp_id}</p>

          {/* </CardContent> */}
        </div>
        <div style={styles.userInfoContainer}>
          <div>
            <div style={{...styles.designationRowStyle,marginTop:-10}}>
              <Typography sx={styles.boldTxt}>
                {user_details?.first_name + " " + user_details?.last_name}
              </Typography>
              {/* <p style={{fontSize:'9px'}}>{user_details?.emp_id}</p> */}
              <WorkspacePremiumTwoToneIcon
                sx={{ fontSize:20, color: gold }}
              />
            </div>

            <div style={{...styles.designationRowStyle,marginTop:8}}>
              <DesktopMacOutlinedIcon sx={{ fontSize:18 }}/>
              <Typography style={styles.designationTextMargin}>
                {user_details?.designation}
              </Typography>
            </div>
            {/* <div style={styles.designationRowStyle}>
                <AssignmentIndOutlinedIcon />
                <Typography style={styles.designationTextMargin}>
                  {user_details?.emp_id}
                </Typography>
              </div> */}
            <div style={{...styles.designationRowStyle,marginTop:8}}>
              <GroupsOutlinedIcon sx={{ fontSize:18 }}/>
              <Typography style={styles.designationTextMargin}>
                {user_details?.project_name}
              </Typography>
            </div>
          </div>
          {/* <Button
              sx={styles.editBtnStyle}
              variant="outlined"
              startIcon={<EditIcon />}
              size="small"
            >
              Edit
            </Button> */}
        </div>
      </div>
      <Box
        sx={{ width: "100%", justifyContent: "center", textAlign: "center",backgroundColor:'white' }}
      >
        <Button
          sx={styles.editBtnStyle}
          variant="outlined"
          startIcon={<EditIcon />}
          size="small"
        >
          Edit
        </Button>
      </Box>
      {/* </CardContent> */}
      {/* </Paper> */}
    </div>
  );
}

export default ProfileCard;
