import React, { useState } from "react";
import { Box, MenuItem, Button, Menu } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link, useNavigate } from "react-router-dom";
import { Dayjs } from "dayjs";

type Props = {
  timeEntry: any;
  timeEntries: any;
  active: any;
  setActive: React.Dispatch<React.SetStateAction<any>>;
  setDateTime: React.Dispatch<React.SetStateAction<Dayjs>>;
};

function TimeEntry({
  timeEntry,
  timeEntries,
  setDateTime,
  active,
  setActive,
}: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  function deleteTimeEntry(id: any) {
    localStorage.setItem(
      "timeEntries",
      JSON.stringify(
        timeEntries.filter((timeEntry: any) => timeEntry.id !== id)
      )
    );
    navigate(0);
  }

  function handleDateTime(date: any, id: any) {
    const i = timeEntries.findIndex((entry: any) => entry.id === id);
    setDateTime(date);
    handleActive(i);
  }

  function handleActive(i: number) {
    setActive({ ...active, act: active.ids[i] });
  }

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h5" component="h4">
          Task: {timeEntry.task}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>Description: {timeEntry.desc}</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link to={`details/${timeEntry.id}`}>
            <Box
              onClick={() => handleDateTime(timeEntry.dateTime, timeEntry.id)}
            >
              <Button startIcon={<VisibilityIcon />}>View</Button>
            </Box>
          </Link>

          <Box sx={{ mt: 2 }}>
            <Button
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              sx={{ mb: 2 }}
              onClick={handleClick}
            >
              <MoreVertIcon />
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={handleClose}>
                <Button onClick={() => deleteTimeEntry(timeEntry.id)}>
                  End Task
                </Button>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default TimeEntry;
