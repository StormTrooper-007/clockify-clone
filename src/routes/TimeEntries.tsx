import React from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import { Dayjs } from "dayjs";
import { TimeEntriesI } from "../interface/interfaces";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useNavigate } from "react-router-dom";
import TimeEntry from "./TimeEntry";

type Props = {
  timeEntries: TimeEntriesI[];
  setTimeEntries: React.Dispatch<React.SetStateAction<any>>;
  setDateTime: React.Dispatch<React.SetStateAction<Dayjs>>;
  active: any;
  setActive: React.Dispatch<React.SetStateAction<any>>;
  sidebar:boolean
};

function TimeEntries({
  timeEntries,
  setDateTime,
  active,
  setActive,
  sidebar
}: Props) {
  const navigate = useNavigate();

  if (timeEntries?.length === 0)
    return (
      <>
        {!sidebar && <Button sx={{mt:5}} onClick={() => navigate("/addentry")}>back</Button>}
        <Paper>
          <Typography variant="h5" sx={{ ml: 10, mt: 10, p:10}}>
            There is currently no Task
          </Typography>
        </Paper>
      </>
    );

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", margin: 5 }}>
        <Button
          variant="contained"
          size="small"
          onClick={() => navigate("/")}
        >
          {" "}
          <KeyboardArrowLeftIcon />
          Home{" "}
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={() => navigate("/addentry")}
        >
          {" "}
          New Time Entry{" "}
        </Button>
      </Box>
      {timeEntries.map((timeEntry, i: any) => {
        return (
          <TimeEntry
            key={i}
            timeEntries={timeEntries}
            timeEntry={timeEntry}
            setDateTime={setDateTime}
            setActive={setActive}
            active={active}
          />
        );
      })}
    </Box>
  );
}

export default TimeEntries;
