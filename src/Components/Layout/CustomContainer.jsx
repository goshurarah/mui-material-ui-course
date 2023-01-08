import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function CustomContainer() {
  return (
    <>
      <h1>Container</h1>
      <h3>Container Fluid:</h3>
      <CssBaseline />
      <Container maxWidth='md' sx={{ bgcolor: 'pink', height: '20rem' }}>
      </Container>

      <h3>Container Fixed:</h3>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#388e3c', height: '20rem' }} />
      </Container>
    </>
  );
}
export default CustomContainer;