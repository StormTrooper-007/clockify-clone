import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';

 
function Auth() {
  return (
    <Container maxWidth="sm">
     <Outlet/>
    </Container>
  )
}

export default Auth;