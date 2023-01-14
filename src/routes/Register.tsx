import {
  Box,
  TextField,
  Button,
  Typography,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { redirect, useNavigate } from "react-router-dom";

type Props = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<any>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<any>>;
  role: string;
  setRole: React.Dispatch<React.SetStateAction<any>>;
  users: any[];
  setUsers: React.Dispatch<React.SetStateAction<any[]>>;
};

function Register({
  email,
  setEmail,
  users,
  setUsers,
  password,
  setPassword,
  role,
  setRole,
}: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value);
  };

  const navigate = useNavigate();

  function registerUser(email:any, password:any, role:any) {
    const existingUser = users.find((user) => (user.email === email && user.password === password && user.role === role));
    if (email === "" && password === "" && role === ""){
      navigate(0);
    }else if(existingUser){
      navigate(0)
    }else{
      const newUser = [...users, { email, password, role }];
      localStorage.setItem("users", JSON.stringify(newUser));
      window.location.replace("/auth/login");
    }
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", marginTop: 10 }}>
      <Typography sx={{ ml: 16 }} variant="h6" component="p">
        Register
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
      <InputLabel id="demo-select-small" sx={{ ml: 2 }}>
        Role
      </InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={role}
        label="Role"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Patient"}>Patient</MenuItem>
        <MenuItem value={"Personel"}>Personel</MenuItem>
      </Select>
      <Button variant="contained" sx={{ m: 1, p: 2 }} onClick={() => registerUser(email, password, role)}>
        Register
      </Button>
    </Box>
  );
}

export default Register;
