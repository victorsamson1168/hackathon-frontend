import { Grid, Box, Typography, Avatar, Badge, Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-web";
import { styled } from "@mui/material/styles";
import { fontWeight } from "@mui/system";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useHistory } from "react-router-dom";

function Nominations() {
  const imgRef = useRef(null);
  const [selectedNomination, setSelectedNomination] = useState(null);
  const history = useHistory();

  useEffect(() => {
    Lottie.loadAnimation({
      container: imgRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/animations/bee.json"),
    });
  }, []);


  return (
    <div>
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
            <Box sx={{ marginX: 5 }}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  selectedNomination ? (
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
                  alt="Travis Howard"
                  src="pa.jpg"
                  sx={{ width: 100, height: 100 }}
                />
              </Badge>
              <Typography
                variant="h5"
                sx={{ textAlign: "center", fontWeight: 700 }}
              >
                varsha
              </Typography>
              <Typography variant="h6" sx={{ textAlign: "center" }}>
                pt :900
              </Typography>
            </Box>

            <Box sx={{ marginX: 5 }}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <CheckCircleRoundedIcon
                    sx={{
                      color: "lime",
                      backgroundColor: "white",
                      borderRadius: 5,
                    }}
                  />
                }
              >
                <Avatar
                  alt="Travis Howard"
                  src="pa.jpg"
                  sx={{ width: 100, height: 100 }}
                />
              </Badge>
              <Typography
                variant="h5"
                sx={{ textAlign: "center", fontWeight: 700 }}
              >
                deepika
              </Typography>
              <Typography variant="h6" sx={{ textAlign: "center" }}>
                pt :900
              </Typography>
            </Box>
            <Box sx={{ marginX: 5 }}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  selectedNomination ? (
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
                  alt="Travis Howard"
                  src="pa.jpg"
                  sx={{ width: 100, height: 100 }}
                />
              </Badge>
              <Typography
                variant="h5"
                sx={{ textAlign: "center", fontWeight: 700 }}
              >
                akshay
              </Typography>
              <Typography variant="h6" sx={{ textAlign: "center" }}>
                pt :900
              </Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            sx={{ width: "30%", marginX: "auto", marginTop: 5 }}
            onClick={() => {
              history.push("/");
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
