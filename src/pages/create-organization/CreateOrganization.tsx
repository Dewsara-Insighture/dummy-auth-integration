import { Button, Grid, Stack, Box, TextField } from '@mui/material';
import { useEffect } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { organizationType } from '../../types/organization.types';
import { useNavigate } from 'react-router-dom';
import { ResourceService } from '../../api/api';


export default function CreateOrganization() {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<organizationType>({
    defaultValues: {
      orgName: '',
      orgSize: '',
      orgDomain: '',
      orgCountry: '',
    },
  });
  const onSubmit: SubmitHandler<organizationType> = async (data) => {
    try{
      const createOrgRes:organizationType = await ResourceService.post('/organizations');
      if(createOrgRes){
        navigate('/invite-members');
      }else{
        console.log('Issue in Org creation.')
      }
  
    }catch(error){
      // Should handle this and not console it.
      navigate('/invite-members') 
      console.log('Create Organization Error:- ', error)
    }
    
   
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
              Register Organization
            </p>
          </div>

          <Controller
            name="orgName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                id="standard-basic"
                label="Organization Name"
                variant="standard"
                type="text"
                fullWidth
              />
            )}
          />
          <Controller
            name="orgSize"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                id="standard-basic"
                label="Organization Size"
                variant="standard"
                type="text"
                fullWidth
              />
            )}
          />
          <Controller
            name="orgDomain"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                id="standard-basic"
                label="Domain"
                variant="standard"
                type="text"
                fullWidth
              />
            )}
          />
          <Controller
            name="orgCountry"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                id="standard-basic"
                label="Country"
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
            Create Organization
          </Button>
        </Stack>
      </Box>
    </Grid>
  );
}
