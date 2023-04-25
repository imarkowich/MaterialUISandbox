import { Grid, Paper, Typography } from "@mui/material";
import "./App.css";

const TourCard = () => {
  return (
    <>
      <Grid item xs={3}>
        <Paper elevation={3} square>
          <img
            src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
            alt="Nature"
            className="img"
          />
          <Typography variant="h1">Look out Below!</Typography>
        </Paper>
      </Grid>
    </>
  );
};

export default TourCard;
