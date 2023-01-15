import {Paper, Typography, Button, Container} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NotAuthorized() {

  const navigate = useNavigate();
  return (
    <Container maxWidth="sm">
      <Button variant='contained' sx={{m:4}} onClick={() => navigate("/")}>Back to Home</Button>
      <Paper>
        <Typography variant='h5' component='p' sx={{p:4}}>Sorry, you are not authorized to access this page, <br/>
         as a Patient</Typography>
      </Paper>
    </Container>
  )
}

export default NotAuthorized