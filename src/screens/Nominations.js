import {
  Grid,
  Box,
  Typography,
  Avatar,
  Badge,
  Button,
  LinearProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-web";
import { styled } from "@mui/material/styles";
import { fontWeight } from "@mui/system";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import APIService from "../services/APIService";
import { useHistory } from "react-router-dom";
import moment from "moment";

function Nominations() {
  const imgRef = useRef(null);
  const [selectedNomination, setSelectedNomination] = useState(null);
  const [nominations, setNominations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();

  useEffect(() => {
    requestNomination();
    Lottie.loadAnimation({
      container: imgRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/animations/bee.json"),
    });
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const requestNomination = async () => {
    setIsLoading(true);
    try {
      const response = await APIService.getNomination(moment().month(), moment().year());
      if (response.status === 200) {
        console.log("response", response);
        setNominations(response.data.data);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const putVote = async () => {
    try {
      const response = await APIService.putVote(
        moment().month(),
        moment().year(),
        selectedNomination?.uuid
      );
      if (response.status === 200) {
        console.log("put vote response", response);
        setMessage(response.data.message);
        setOpen(true);
      }
    } catch (error) {
      setMessage(error.message);
      setOpen(true);
      console.log("error test",JSON.stringify(error));
    }
  };

  return (
    <div>
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
      {isLoading ? <LinearProgress /> : null}
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            PLEASE FIND NOMINATIONS FOR <strong>EOM</strong>
          </Typography>
          <Box ref={imgRef} sx={{ width: "12%", marginX: "auto" }} />
          <Box sx={{ marginX: "auto", display: "flex", flexDirection: "row" }}>
            {nominations.map((nomination, index) => {
              return (
                <Box sx={{ marginX: 5 }} key={index}>
                  <Badge
                    onClick={() => {
                      setSelectedNomination(nomination);
                    }}
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    badgeContent={
                      selectedNomination === nomination ? (
                        <CheckCircleRoundedIcon
                          sx={{
                            color: "lime",
                            backgroundColor: "white",
                            borderRadius: 5,
                          }}
                        />
                      ) : null
                    }
                  >
                    <Avatar
                      alt={nomination.PMP_USER.first_name}
                      src={nomination.PMP_USER.image_url}
                      sx={{ width: 100, height: 100 }}
                    />
                  </Badge>
                  <Typography
                    variant="h5"
                    sx={{ textAlign: "center", fontWeight: 700 }}
                  >
                    {nomination.PMP_USER.first_name}
                  </Typography>
                  <Typography variant="h6" sx={{ textAlign: "center" }}>
                    pt :{nomination.tot_score}
                  </Typography>
                </Box>
              );
            })}
          </Box>

          <Button
            variant="contained"
            sx={{ width: "30%", marginX: "auto", marginTop: 5 }}
            onClick={() => {
              // history.push("/");
              putVote();
            }}
          >
            VOTE
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Nominations;
