import {
  Alert,
  Box,
  Button,
  CardContent,
  CircularProgress,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import Lottie from "lottie-web";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../services/APIService";

function Login() {
  const imageref = useRef(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(false);
  const history = useHistory();

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/");
    }
  }, []);

  const loginApiCall = async () => {
    try {
      setLoading(true);
      if (username === "" || password === "") {
        setMessage("Please enter both username and password");
        setOpen(true);
      }
      const response = await API.login({
        email_id: username,
        password: password,
      });
      console.log("response", response);
      if (response.status === 200 && response.data.result) {
        localStorage.setItem("token", response.data.reponse.access_token);
        localStorage.setItem(
          "user_details",
          JSON.stringify(response.data.reponse.user_details)
        );
        history.push("/");
      } else if (response.status === 200 && !response.data.result) {
        setMessage(response.data.message);
        setOpen(true);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    Lottie.loadAnimation({
      container: imageref.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/animations/working-people.json"),
    });
  }, []);

  return (
    <Grid container spacing={2} sx={{ height: "100vh" }}>
      {/* alert */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
      {/* alert-end */}
      <Grid item xs={8}>
        <Box
          elevation={6}
          sx={{
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Box ref={imageref} sx={{ width: "100%" }}></Box>
        </Box>
      </Grid>

      <Grid item xs={4}>
        <Box
          elevation={6}
          sx={{
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            borderWidth: "3px",
            backgroundColor: "#fafafa",
          }}
        >
          <Box
            sx={{
              borderWidth: "2px",
              borderColor: "black",
              width: "60%",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <Typography variant="h5" m={2} align="center">
                Login
              </Typography>
              <TextField
                id="outlined-basic"
                label="username"
                variant="outlined"
                sx={{ m: 1 }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <TextField
                id="outlined-basic"
                label="password"
                variant="outlined"
                sx={{ m: 1 }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
              <Button
                variant="contained"
                sx={{ m: 1 }}
                onClick={() => {
                  loginApiCall();
                }}
                disabled={loading}
              >
                {loading ? <CircularProgress size={"1.5rem"} /> : "LOGIN"}
              </Button>
            </CardContent>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;
