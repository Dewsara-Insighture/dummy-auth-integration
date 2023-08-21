//import { Auth } from 'aws-amplify';

import { Stack, Button, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Welcome() {

  return (
    <Grid container alignItems="stretch" sx={{ height: '100vh' }}>
      <Grid item md={5}>
        <Box width="100%" height="100%" sx={{ bgcolor: '#91C8E4' }}></Box>
      </Grid>
      <Grid container item md={7} justifyContent="center" alignItems="center">
        <Box sx={{ width: '400px', height: 'auto', p: '30px' }}>
          <Stack direction="column" alignItems="center">
            <h1>Welcome to Cloud!</h1>
            <Link to='/login'>
            <Button
              type="submit"
              variant="contained"
              sx={{ width: '200px', mt: '20px' }}
            >
              Login
            </Button>
            </Link>
            <Link to='/signup'>
            <Button
              type="submit"
              variant="contained"
              sx={{ width: '200px', mt: '20px' }}
            >
              Create new account
            </Button>
            </Link>
            
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}
