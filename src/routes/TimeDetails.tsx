import { Box, Typography, Paper } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useCountDown } from "../hooks/useCountDown";
import Message from "../components/Message";
import { Dayjs } from "dayjs";
import { useParams } from "react-router-dom";

type Props = {
  dateTime: Dayjs;
};

function TimeDetails({ dateTime }: Props) {
  const [days, hours, minutes, seconds] = useCountDown(dateTime);
  const { id } = useParams();

  if (days + hours + minutes + seconds <= 0) {
    return <Message id={id} />;
  }

  return (
    <>
      <Paper elevation={5} sx={{ m: 3, p: 5 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ mb: 2 }}>
            <Typography> Task - {id}</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <FiberManualRecordIcon
              sx={{ color: "red", mr: 2, fontSize: 15, mb: 0.5 }}
            />
            <Typography variant="caption" display="block" gutterBottom>
              {days <= 0 ? "00" : days}:
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              {hours <= 0 ? "00" : hours}:
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              {minutes <= 0 ? "00" : minutes}:
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              {seconds <= 0 ? "00" : seconds}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
}

export default TimeDetails;
