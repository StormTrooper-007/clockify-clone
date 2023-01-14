import {Paper, Box, Typography, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NotAuthorized() {

  const navigate = useNavigate();
  return (
    <Box sx={{m:20,display:"flexbox", alignItems:"center"}}>
      <Button variant='contained' sx={{m:4}} onClick={() => navigate("/")}>Back to Home</Button>
      <Paper>
        <Typography variant='h5' component='p' sx={{p:4}}>Sorry, you are not authorized to access this page, <br/>
         as a Patient</Typography>
      </Paper>
    </Box>
  )
}

export default NotAuthorized