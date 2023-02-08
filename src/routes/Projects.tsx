import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Project from "./Project";
import SaveIcon from "@mui/icons-material/Save";
import { addProject } from "../redux/slices/projectsSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";

function Projects() {
  const [projectName, setProjectName] = useState<string>("");
  const { projects } = useSelector((state: RootState) => state.projects);
  const dispatch = useDispatch();

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TextField
          label="Add project"
          variant="standard"
          value={projectName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setProjectName(e.target.value)
          }
        />
        <Button
          variant="contained"
          startIcon={<SaveIcon />}
          onClick={() => {
            dispatch(addProject(projectName));
            setProjectName("");
          }}
        />
      </Box>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" sx={{ textAlign: "left" }}>
          Projects
        </Typography>
        <Divider />
        {projects.map((project: any) => (
          <Project key={project.id} project={project} />
        ))}
      </Box>
    </Box>
  );
}

export default Projects;
