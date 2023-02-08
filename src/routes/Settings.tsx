import { Box, Divider, Switch } from "@mui/material";
import React from "react";
import { toggleMode } from "../redux/slices/settingsSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

function Settings() {
  const { lightAndDarkmood } = useSelector(
    (state: RootState) => state.settings
  );
  const dispatch = useDispatch();

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 20,
          p: 2,
        }}
      >
        <Box>Dark mode:</Box>
        <Box>
          <Switch
            checked={lightAndDarkmood}
            onChange={() => dispatch(toggleMode())}
          />
        </Box>
      </Box>
      <Divider />
    </Box>
  );
}

export default Settings;
