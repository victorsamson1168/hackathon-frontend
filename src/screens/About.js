import { Card, CardContent, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const styles = {
  paperHeight: { height: "200px" },
};

function About() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper elevation={6} sx={styles.paperHeight}>
            <CardContent>
              <Typography>test</Typography>
            </CardContent>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={6} sx={styles.paperHeight}>
            <CardContent>
              <Typography>test</Typography>
            </CardContent>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={6} sx={styles.paperHeight}>
            <CardContent>
              <Typography>test</Typography>
            </CardContent>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={6} sx={styles.paperHeight}>
            <CardContent>
              <Typography>test</Typography>
            </CardContent>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={6} sx={styles.paperHeight}>
            <CardContent>
              <Typography>test</Typography>
            </CardContent>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={6} sx={styles.paperHeight}>
            <CardContent>
              <Typography>test</Typography>
            </CardContent>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
