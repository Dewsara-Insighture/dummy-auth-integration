//import { Auth } from 'aws-amplify';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { Stack, Button, Grid, Box } from '@mui/material';
import GoogleAuthentication from './components/GoogleAuthentication';
import { Link } from 'react-router-dom';

interface IFormInput {
  email: string;
  password: string;
}

export default function SignUp() {
  const { control, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };
  return (
    <Grid container alignItems="stretch" sx={{ height: '100vh' }}>
      <Grid item md={5}>
        <Box width="100%" height="100%" sx={{ bgcolor: '#91C8E4' }}></Box>
      </Grid>
      <Grid container item md={7} justifyContent="center" alignItems="center">
        <Box sx={{  height: 'auto', p: '30px' }}>
          <Stack direction="column" alignItems="center">
            <p style={{fontWeight: 700 , fontSize : '30px' , marginBottom : 0}}>Create your free account</p>
            <p style={{marginTop : 0 , marginBottom : '20px'}}>Already have an account? <Link to={'/login'}>Sign In</Link></p>
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
              sx={{ width: '200px', mt: '20px' }}
              onClick={handleSubmit(onSubmit)}
            >
              Sign up
            </Button>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}
