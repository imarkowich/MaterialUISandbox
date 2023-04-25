import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Button from "@mui/material/Button";
import TourCard from "./TourCard";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";

function MyApp() {
  return (
    <>
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Button variant="contained" color="secondary">
              Hello Worl
            </Button>
          </Grid>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </>
  );
}

ReactDOM.createRoot(document.querySelector("#app")).render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);
