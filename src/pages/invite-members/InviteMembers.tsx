import { Button, Grid, Stack, Box, TextField } from '@mui/material';
import { useEffect , useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { memberType } from '../../types/member.types';
import { AuthService } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { getUserAccessToken } from '../../utils/getUserToken';



export default function InviteMembers() {
  const navigate = useNavigate();
  const [roles , setRoles] = useState<object[] >([]);
  const [members , setMembers] = useState<{email : string , orgRoleIds:string[]}[] | null>([]);
  const { control, handleSubmit } = useForm<memberType>({
    defaultValues: {
      email: '',
      role: '',
    },
  });

  const handleInviteMembers = async () => {
    try{
      const accessToken = await getUserAccessToken();
      const inviteUserRes = await AuthService.post('/users/invite',{members}  , {headers : {
        'x-organization-id' : 'dummyvalue',
        Autherization : `Bearer ${accessToken}`
      }});
      console.log('inviteUserRes: - ' , inviteUserRes);
      if(inviteUserRes.data.statusCode === 200){
        
        navigate('/dashboard');
      }
    }catch(error){
      console.log('Invite User error :- ' , error)
    }
  }
  const onSubmit: SubmitHandler<memberType> = async (data) => {
      const postInviteUserData = {
        email : data.email,
        orgRoleIds : [data.role]
      };

      setMembers((prevMembers) => (prevMembers ? [...prevMembers, postInviteUserData] : [postInviteUserData]));
  };

  useEffect(() => {
    console.log('Get Roles Use Effect hit');
    const getRoles = async () => {
      try{
        const getRolesRes = await AuthService.get('/roles/', );
        console.log('Get Roles Res: - ' , getRolesRes);
        if(getRolesRes.data.statusCode === 200){
          setRoles(getRolesRes.data.data);
        }else{
          setRoles([]);
        }
      }catch(error){
        console.log('Get Roles error :- ' , error)
      }
    }

    getRoles();

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
                value = {roles[0]}
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
            Add
          </Button>
        </Stack>
        {members?.length !== 0 && (members || []).map((member) =><div>{JSON.stringify(member)}</div>)}
        <Button onClick = {() => handleInviteMembers()} sx={{ mt: '20px' }}  variant="contained" fullWidth>Invite Members</Button>
      </Box>
    </Grid>
  );
}

