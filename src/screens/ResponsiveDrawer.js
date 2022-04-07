import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button, Grid, Chip } from "@mui/material";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import Lottie from "lottie-web";
import APIService from "../services/APIService";
import HomeIcon from '@mui/icons-material/Home';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';

let drawerWidth = 225;

function ResponsiveDrawer(props) {
  const { window, children, title, showDrawer } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [managerViewableStatus, setManagerViewableStatus] = React.useState(0);
  const [hRaudit, setHRaudit] = React.useState(0);
  const [nominationPhase, setNominationPhase] = React.useState(0);
  const [eomDeclared, setEomDeclared] = React.useState(0);

  const user_details = JSON.parse(localStorage.getItem("user_details"));
  const history = useHistory();
  const imageref = React.useRef(null);
  if (!showDrawer) {
    drawerWidth = 0;
  }

  React.useEffect(() => {
    getAuditStatus();
    Lottie.loadAnimation({
      container: imageref.current, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/animations/gift.json"), // the path to the animation json
    });
  }, []);

  const getAuditStatus = async () => {
    try {
      const response = await APIService.getAuditStatus();
      if (response.status === 200) {
        console.log(response.data.data);
        setManagerViewableStatus(response?.data?.data[0]?.status);
        setHRaudit(response?.data?.data[1]?.status);
        setNominationPhase(response?.data?.data[2]?.status);
        setEomDeclared(response?.data?.data[3]?.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_details");
    history.push("/login");
  };

  const drawer = (
    <div>
      <Toolbar>
        <img src="/logo.png" alt="logo" style={{ width: "90%" }} />
      </Toolbar>
      <Divider />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ProfileCard data="pa.jpg" />
        </Grid>
        {/* <Grid item xs={6}>
          <TeamMemberCard
            manager="{manager_name}"
            team_member="{team_mem_name}"
          />
        </Grid> */}
      </Grid>
      <Divider />
      <ListItem button key="redeem"
        onClick={() => {
          handleDrawerToggle();
          history.push("/redeem");
        }}
      >
        <ListItemIcon>
          {/* <InboxIcon /> */}
          <Box sx={{ height: 40 }} ref={imageref} />
        </ListItemIcon>
        <ListItemText primary="Redeem Points" />
      </ListItem>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: 2,
        }}
      >
        <Chip label="points 6700" color="primary" />
      </Box>

      <Divider />
      <List> 
        <ListItem
          button
          key="home"
          onClick={() => {
            handleDrawerToggle();
            history.push("/");
          }}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem
          button
          key="about"
          onClick={() => {
            handleDrawerToggle();
            history.push("/about");
          }}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>


      </List>
      <Divider />
      <List>
        {managerViewableStatus === 1 && user_details?.isAdmin ? (
          <ListItem
            button
            key="ScoreForm"
            onClick={() => {
              handleDrawerToggle();
              history.push("/" + "ScoreForm");
            }}
          >
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Score Form" />
          </ListItem>
        ) : null}

        <ListItem
          button
          key="ThreeSixtyReview"
          onClick={() => {
            handleDrawerToggle();
            history.push("/" + "three-sixty-review");
          }}
        >
          <ListItemIcon>
            <SettingsBackupRestoreIcon />
          </ListItemIcon>
          <ListItemText primary="360 Review" />
        </ListItem>
        {/* 
        <ListItem
          button
          key="EOM"
          onClick={() => {
            handleDrawerToggle();
            history.push("/" + "eom");
          }}
        >
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="EOM" />
        </ListItem> */}

        {nominationPhase === 1 ? (
          <ListItem
            button
            key="nominations"
            onClick={() => {
              handleDrawerToggle();
              history.push("/" + "nominations");
            }}
          >
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Nominations" />
          </ListItem>
        ) : null}

        {eomDeclared === 1 ? (
          <ListItem
            button
            key="eom"
            onClick={() => {
              handleDrawerToggle();
              history.push("/" + "eom");
            }}
          >
            <ListItemIcon>
              <PersonPinIcon />
            </ListItemIcon>
            <ListItemText primary="EOM" />
          </ListItem>
        ) : null}

        {user_details.isHr && hRaudit === 1 ? (
          <ListItem
            button
            key="HR"
            onClick={() => {
              handleDrawerToggle();
              history.push("/" + "HR");
            }}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="HR Audit" />
          </ListItem>
        ) : null}


        {user_details.isHr &&
          <ListItem
            button
            key="redeemRequest"
            onClick={() => {
              handleDrawerToggle();
              history.push("/redeemRequest");
            }}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Redeem Request" />
          </ListItem>}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "rgb(244,129,38)",
          background:
            "linear-gradient(90deg, rgba(244,129,38,1) 0%, rgba(238,83,75,0.8746849081429446) 49%, rgba(233,45,118,1) 100%)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {title}
          </Typography>
          <Button variant="contained" size="small" onClick={onLogout}>
            <Typography sx={{ fontSize: "0.9rem" }} m1>
              logout
            </Typography>
            <LogoutIcon />
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
