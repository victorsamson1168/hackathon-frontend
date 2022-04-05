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
import { Button, Grid } from "@mui/material";
import ProfileCard from "../components/ProfileCard/ProfileCard";

let drawerWidth = 225;

function ResponsiveDrawer(props) {
  const { window, children, title, showDrawer } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const user_details = JSON.parse(localStorage.getItem("user_details"));
  const history = useHistory();
  if (!showDrawer) {
    drawerWidth = 0;
  }

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
        {/* <Typography variant="h6" noWrap>
          PMP
        </Typography> */}
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
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="home" />
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
          <ListItemText primary="about" />
        </ListItem>
      </List>
      <Divider />
      <List>
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
          <ListItemText primary="ScoreForm" />
        </ListItem>

        {user_details.isHr ? (
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
            <ListItemText primary="HR" />
          </ListItem>
        ) : null}
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
