import { Divider } from "@material-ui/core";
import { Typography, Container, Paper } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function ServerError() {
  const { state } = useLocation();
  return (
    <Container component={Paper}>
      {state?.error ? (
        <>
          {" "}
          <Typography variant="h3" gutterBottom>
            {state.error.title}
          </Typography>
          <Divider />
          <Typography variant="body1">
            {state.error.detail || "Internal server error"}
          </Typography>
        </>
      ) : (
        <Typography variant="h5" gutterBottom>
          ServerError
        </Typography>
      )}
    </Container>
  );
}
