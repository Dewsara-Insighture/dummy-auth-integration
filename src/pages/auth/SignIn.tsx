//import { Auth } from 'aws-amplify';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { Stack, Button, Grid, Box } from '@mui/material';
import GoogleAuthentication from './components/GoogleAuthentication';
import { Link } from 'react-router-dom';
// import { useEffect } from 'react';
// import { Hub } from 'aws-amplify';

interface IFormInput {
  email: string;
  password: string;
}

export default function SignIn() {
  const { control, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

//   useEffect(() =>{
//     Hub.listen('signIn', (data) => {
//         const { payload } = data;
//         console.log(payload);           
//         console.log('A new auth event has happened: ', data.payload.data.username + ' has ' + data.payload.event);
//     })
//     console.log('hey hiting signin')
//   },[])
  return (
    <Grid container alignItems="stretch" sx={{ height: '100vh' }}>
      <Grid item md={5}>
        <Box width="100%" height="100%" sx={{ bgcolor: '#91C8E4' }}></Box>
      </Grid>
      <Grid container item md={7} justifyContent="center" alignItems="center">
        <Box sx={{  height: 'auto', p: '30px' }}>
          <Stack direction="column" alignItems="center">
            <div style={{marginBottom : '20px'}}>
            <p style={{fontWeight: 700 , fontSize : '30px' , marginBottom : 0}}>Embrace the power of Cloud</p>
           
            </div>
            
            <GoogleAuthentication />
            <p>OR</p>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  type="email"
                  fullWidth
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="standard-basic"
                  label="Password"
                  variant="standard"
                  type="password"
                  fullWidth
                />
              )}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{mt: '20px' }}
              onClick={handleSubmit(onSubmit)}
              fullWidth
            >
              Login
            </Button>
            <p style={{marginTop : 0 , marginBottom : 0 , textAlign:'left'}}><Link to={'/signup'}>Dont have an account?</Link> </p>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}
