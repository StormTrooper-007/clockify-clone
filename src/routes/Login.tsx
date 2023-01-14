import { Box, TextField, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

type Props = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<any>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<any>>;
  users: any[];
  loginn: boolean;
  setLoginn: React.Dispatch<React.SetStateAction<any>>;
  currentUser: any;
  setCurrentUser: React.Dispatch<React.SetStateAction<any>>;
};

function Login({
  email,
  setEmail,
  password,
  setPassword,
  users,
  loginn,
  setLoginn,
  currentUser,
  setCurrentUser,
}: Props) {
  const navigate = useNavigate();

  const login = (email: any, password: any) => {
    if(email==="" && password==="") return 
    const user = users.find(
      (user) => (user.email === email && user.password === password)
    );
    if (user) {
      setLoginn(true);
      setCurrentUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    }
  };

  return (
    <>
      <Typography sx={{ marginTop: 10 }} variant="h6" component="p">
        Welcome to Health-Plan-it App click <Link to="/auth/register"> here </Link>
        to register or login below
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", marginTop: 10 }}>
        <Typography sx={{ ml: 16 }} variant="h6" component="p">
          Login
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          sx={{ m: 1 }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          sx={{ m: 1 }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <Button
          variant="contained"
          sx={{ m: 1, p: 2 }}
          onClick={() => login(email, password)}
        >
          Login
        </Button>
      </Box>
    </>
  );
}

export default Login;
