import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../sass/navbar.scss";
import AppBar from "../components/AppBar";
import Container from "@mui/material/Container";

type Props = {
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<any>>;
  currentUser: any;
};

function Root({ sidebar, setSidebar, currentUser }: Props) {
  function handleSidebar() {
    setSidebar((prev: boolean) => !prev);
  }

  return (
    <>
      <AppBar handleSidebar={handleSidebar} />
      <Sidebar
        sidebar={sidebar}
        setSidebar={setSidebar}
        handleSidebar={handleSidebar}
        currentUser={currentUser}
      />
      <Container maxWidth="sm" sx={{zIndex:999}}>
        <Outlet />
      </Container>
    </>
  );
}

export default Root;
