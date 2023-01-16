import { Paper, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Props = {
  id: any;
};

function Message({ id }: Props) {
  const navigate = useNavigate();
  return (
    <Paper
      sx={{ position: "relative", top: 200, height: 100, zIndex: 999, p: 5 }}
    >
      <Box>
        <Typography sx={{ textAlign: "center" }}>
          Task with id-{id} <br /> is due to be completed
          <br />
          check your time entries!!! for details
        </Typography>
      </Box>
      <Button
        variant="outlined"
        color="error"
        sx={{ ml: 25, mb: 40, mt: 2 }}
        onClick={() => navigate("/time-entries")}
      >
        Close
      </Button>
    </Paper>
  );
}

export default Message;
