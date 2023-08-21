//import { Auth } from 'aws-amplify';

import { Stack, Button, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';


export default function ConfirmInvitation() {

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{ height: '100vh' }}
    >
      <Box sx={{ height: 'auto', p: '30px' }}>
        <Stack direction="column" alignItems="center">
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontWeight: 700, fontSize: '30px', marginBottom: 0 }}>
              Confirm Invitation
            </p>
            <p>You have been added to this organization. Please Confirm</p>
            <Button><Link to='/dashboard'>Confrim</Link></Button>
            <Button><Link to='/create-organization'>Cancel</Link></Button>
          </div>

        </Stack>
      </Box>
    </Grid>
  );
}
