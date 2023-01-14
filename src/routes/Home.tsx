import { Link, Navigate } from "react-router-dom";
import "../sass/home.scss";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Fab from "@mui/material/Fab";

type Props = {
  currentUser: any;
};

function Home({ currentUser }: Props) {
  const StyledFab = styled(Fab)({
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  });

  if (!currentUser) return <Navigate to="/auth/login" />;

  return (
    <div className="home_container">
      <div style={{ position: "relative", top: 45, zIndex:-999}}>
        <div className="background_image"></div>
      </div>
      <Link to="/addentry">
        <Box sx={{ position: "absolute", bottom: 1, right: 2, margin: 10 }}>
          <StyledFab color="secondary" aria-label="add">
            <AddIcon />
          </StyledFab>
        </Box>
      </Link>
    </div>
  );
}

export default Home;
