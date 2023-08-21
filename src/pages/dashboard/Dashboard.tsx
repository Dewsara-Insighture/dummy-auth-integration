import { Button, Grid, Stack } from '@mui/material';
import { Auth } from 'aws-amplify';
import { useEffect } from 'react';


export default function Dashboard() {
  const handleSignOut = async () =>{
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  useEffect(() =>{
    console.log('hey hiting dashboard')
  },[])


  return(
    <Grid container alignItems='center' justifyContent='center' sx={{ height: '100vh' }}>
      <Stack direction='column'>
      <h1>This is the dashboard</h1>
      <Button  variant="outlined"
      sx={{
        color: 'black',
        px: '20px',
        py: '5px',
        border: '1px solid black',
        ':hover': {
          bgcolor: 'black',
          color: 'white',
          border: '1px solid black',
        },
      }} onClick={handleSignOut}> Sign Out </Button>
      </Stack>
     
    </Grid>
    
  )
}
