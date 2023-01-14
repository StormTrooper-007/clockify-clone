import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

type Props = {
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<any>>;
  handleSidebar: () => void;
  currentUser: any;
};

function Sidebar({ sidebar, handleSidebar, currentUser }: Props) {
  const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
  };

  const navigate = useNavigate();

  function logOut() {
    localStorage.removeItem("user");
    navigate("/auth/login");
  }

  return (
    <>
      {sidebar ? (
        <motion.div
          animate={{ x: [-450, -1] }}
          initial={true}
          transition={{ ease: "easeOut", duration: 1 }}
          onClick={handleSidebar}
          style={{zIndex:999}}
        >
          <Paper
            elevation={3}
            sx={{ position: "fixed", height: "100vh", width: 250}}
          >
            <Stack>
              <List sx={style} component="nav" aria-label="mailbox folders">
                <Avatar
                  alt="Profile Picture"
                  src={currentUser.email}
                  sx={{ ml: 2.5, mt: 5, mb: 3, height: 100, width: 100 }}
                />
                <Divider />
                <Button startIcon={<PersonIcon />}>
                  <Typography gutterBottom component="p" sx={{ pt: 1 }}>
                    {currentUser.email}
                  </Typography>
                </Button>
                <Typography gutterBottom component="p" sx={{ p: 2, pb: 0 }}>
                  Role: {currentUser.role}
                </Typography>
                <Typography gutterBottom component="p" sx={{ p: 2, pb: 0 }}>
                  {currentUser.email}'s Names work space
                </Typography>
                <Divider />
                <Button startIcon={<AccessTimeIcon />}>
                  <ListItem onClick={() => navigate("/time-entries")}>
                    <ListItemText primary="Time entries" />
                  </ListItem>
                </Button>
                <Divider />
                <Button startIcon={<LogoutIcon />}>
                  <ListItem onClick={logOut}>
                    <ListItemText primary="Logout" />
                  </ListItem>
                </Button>
              </List>
            </Stack>
          </Paper>
        </motion.div>
      ) : null}
    </>
  );
}

export default Sidebar;
