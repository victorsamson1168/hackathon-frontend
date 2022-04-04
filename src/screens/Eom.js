import { Grid, Box, Typography, Avatar, Badge, Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-web";
import { height } from "@mui/system";

function Nominations() {
  const confettiImgRef = useRef(null);
  const [selectedNomination, setSelectedNomination] = useState(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: confettiImgRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/animations/confetti.json"),
    });

    console.log("====================================");
    console.log(JSON.parse(localStorage.getItem("user_details")));
    console.log("====================================");
  }, []);

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
          <Box
            sx={{
              marginX: "auto",
            }}
            ref={confettiImgRef}
          >
            <Avatar
              alt="Travis Howard"
              src="pa.jpg"
              sx={{
                width: 200,
                height: 200,
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Nominations;
