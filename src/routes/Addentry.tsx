import React from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate, Navigate } from "react-router-dom";

type Props = {
  dateTime: Dayjs;
  setDateTime: React.Dispatch<React.SetStateAction<any>>;
  desc: string;
  setDesc: React.Dispatch<React.SetStateAction<any>>;
  task: string;
  setTask: React.Dispatch<React.SetStateAction<any>>;
  timeEntries: any[];
  setTimeEntries: React.Dispatch<React.SetStateAction<any>>;
  currentUser: any;
  sidebar:boolean
};

function Addentry({
  desc,
  setDesc,
  task,
  setTask,
  dateTime,
  setDateTime,
  timeEntries,
  setTimeEntries,
  currentUser,
  sidebar
}: Props) {
  function saveTimeEntries() {
    const newEntries = [
      ...timeEntries,
      { id: new Date().getTime().toString(), dateTime, desc, task },
    ];
    localStorage.setItem("timeEntries", JSON.stringify(newEntries));
    setDateTime(dayjs());
    navigate(0);
    console.log(timeEntries);
  }

  const navigate = useNavigate();
  console.log(currentUser);

  if (currentUser.role !== "Personel") return <Navigate to="/notauthorized" />;

  return (
    <Box sx={{ m: 5 }}>
      <Button
        variant="contained"
        sx={{ mt: 2, mb: 5, ml: 20, zIndex:-999}}
        onClick={() => navigate("/time-entries")}
      >
        Time Entries <KeyboardArrowRightIcon />
      </Button>
      {!sidebar && <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="DateTimePicker"
          value={dateTime}
          onChange={(newValue: any) => {
            setDateTime(newValue);
          }}
        />
      </LocalizationProvider>}
      <Box>
        <TextField
          multiline
          rows={3}
          label="What are you working on?"
          sx={{ m: 1, zIndex:-999 }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDesc(e.target.value)
          }
        />
        <TextField
          label="Task"
          variant="outlined"
          sx={{ m: 1, zIndex:-999 }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTask(e.target.value)
          }
        />
        <Button variant="contained" sx={{ m: 1, zIndex:-999 }} onClick={saveTimeEntries}>
          Save
        </Button>
      </Box>
    </Box>
  );
}

export default Addentry;
