import { Grid, Box, Typography, Avatar, Badge, Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-web";
import APIService from "../services/APIService";
import moment from "moment";

function EOM() {
  const confettiImgRef = useRef(null);
  const [selectedNomination, setSelectedNomination] = useState(null);

  useEffect(() => {
    getEom();
    Lottie.loadAnimation({
      container: confettiImgRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/animations/confetti.json"),
    });
  }, []);

  const getEom = async () => {
    try {
      const response = await APIService.getEom(
        moment().month(),
        moment().year()
      );
      if (response.status === 200) {
        console.log("response nomination", response);
        setSelectedNomination(response?.data?.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ height: "100vh" }}>
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
            AND HERE IS OUR <strong>EOM</strong>
          </Typography>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            <strong>
              {selectedNomination?.PMP_USER?.first_name +
                " " +
                selectedNomination?.PMP_USER?.last_name}
            </strong>
          </Typography>
          <Box
            sx={{
              marginX: "auto",
            }}
            ref={confettiImgRef}
          />
          <Avatar
            alt="Travis Howard"
            src={selectedNomination?.PMP_USER?.image_url}
            sx={{
              width: 200,
              height: 200,
              position: "absolute",
              top: "50%",
              left: "58%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default EOM;
