import { Button, Grid, Stack, Box, TextField } from '@mui/material';
import { useEffect } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { memberType } from '../../types/member.types';


export default function InviteMembers() {
  const { control, handleSubmit } = useForm<memberType>({
    defaultValues: {
      email: '',
      role: '',
    },
  });
  const onSubmit: SubmitHandler<memberType> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    console.log('hey hiting create Organization');
  }, []);

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
              Invite Members
            </p>
          </div>

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
            name="role"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                id="standard-basic"
                label="Member Role"
                variant="standard"
                type="text"
                fullWidth
              />
            )}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: '20px' }}
            onClick={handleSubmit(onSubmit)}
            fullWidth
          >
            Invite Members
          </Button>
        </Stack>
      </Box>
    </Grid>
  );
}
